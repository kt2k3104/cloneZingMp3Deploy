import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Thuvien.module.scss';
import classNames from 'classnames/bind';
import { faChevronRight, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
  useDisclosure,
  Box,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';

import PlaylistItem from './components/PlaylistItem/PlaylistItem';
import SongItem from './components/SongItem/SongItem';
import { useEffect, useRef, useState } from 'react';
import { getPlaylists } from '../Auth/UserSlice';
import { useNavigate, useParams } from 'react-router-dom';
import ModalAddPlaylist from '~/layouts/components/Sidebar/component/ModalAddPlaylist';

const cx = classNames.bind(styles);

function ThuVien() {
  const { isLogined, user, playlists, queueFavorite } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [scroll, setScroll] = useState(0);
  const [pageIndex, setPageIndex] = useState(0);
  const [childPageIndex, setChildPageIndex] = useState(0);
  const refWrapper = useRef();

  const { page } = useParams();

  useEffect(() => {
    if (page === 'index') {
      setPageIndex(0);
      refWrapper.current.scrollTop = 0;
    } else {
      refWrapper.current.scrollTo({ top: 706, behavior: 'smooth' });
      if (page === 'album') {
        setPageIndex(2);
      } else {
        setPageIndex(0);
        if (page === 'upload') setChildPageIndex(1);
        else setChildPageIndex(0);
      }
    }
  }, [page]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleScroll = (e) => {
    setScroll(e.target.scrollTop);
  };

  useEffect(() => {
    dispatch(getPlaylists());
  }, [dispatch, isLogined]);
  return (
    <div onScroll={handleScroll} className={cx('wrapper')} ref={refWrapper}>
      {isLogined && (
        <div className={cx('inner')}>
          <div className={cx('header')}>
            <div className={cx('text')}>Thư viện</div>
            <FontAwesomeIcon icon={faPlayCircle} />
          </div>
          <div className={cx('inner-playlists')}>
            <div className={cx('title')}>
              <h3>PLAYLIST</h3>
              <button onClick={onOpen}>+</button>
              <ModalAddPlaylist isOpen={isOpen} onClose={onClose} />
              <h4
                onClick={() => {
                  navigate('/mymusic/library/playlist');
                }}
              >
                TẤT CẢ <FontAwesomeIcon icon={faChevronRight} />
              </h4>
            </div>
            <Box
              m={'0 -14px'}
              display="grid"
              gridTemplateColumns={{ base: '25% 25% 25% 25%', xl: '20% 20% 20% 20% 20%' }}
            >
              <PlaylistItem />
              {playlists?.map((playlist, index) => {
                if (index > 3) return undefined;
                return (
                  <div
                    key={playlist.id}
                    className={cx('playlist_item', index === 3 ? 'hideplaylist' : '')}
                  >
                    <PlaylistItem scroll={scroll} playlist={playlist} />
                  </div>
                );
              })}
            </Box>
          </div>
          <div className={cx('content')}>
            <Tabs
              minH={'calc(100vh - 160px)'}
              position="relative"
              variant="enclosed"
              index={pageIndex}
              onChange={(index) => {
                setPageIndex(index);
              }}
            >
              <TabList borderBottomColor={'hsla(0, 0%, 100%, 0.1)'}>
                <Tab sx={css.tab1}>BÀI HÁT</Tab>
                <Tab sx={css.tab1}>PODCAST</Tab>
                <Tab sx={css.tab1}>ALBUM</Tab>
                <Tab sx={css.tab1}>MV</Tab>
              </TabList>
              <TabIndicator height="1px" bg="#9b4de0" borderRadius="1px" />

              <TabPanels>
                <TabPanel p={'28px 0 0 0'}>
                  <Tabs
                    variant="soft-rounded"
                    colorScheme="purple"
                    index={childPageIndex}
                    onChange={(index) => {
                      setChildPageIndex(index);
                    }}
                  >
                    <TabList>
                      <Tab sx={css.tab2}>YÊU THÍCH</Tab>
                      <Tab ml={'16px'} sx={css.tab2}>
                        ĐÃ TẢI LÊN
                      </Tab>
                    </TabList>
                    <TabPanels>
                      <TabPanel p={'20px 0 0 0'}>
                        <div className={cx('media-favorite-header')}>
                          <span className={cx('span1')}>BÀI HÁT</span>
                          <span className={cx('span2')}>ALBUM</span>
                          <span className={cx('span3')}>THỜI GIAN</span>
                        </div>
                        {queueFavorite?.length === 0 && <p>Chưa có bài hát ưa thích</p>}

                        {queueFavorite?.length !== 0 &&
                          queueFavorite?.map((song) => {
                            return (
                              <SongItem
                                type={'FAVORITE_ITEM'}
                                scroll={scroll}
                                song={song}
                                key={song.id}
                              />
                            );
                          })}
                      </TabPanel>
                      <TabPanel p={'0'} mt={'20px'}>
                        <div className={cx('up-limit')}>
                          <div className={cx('left')}>
                            <h3>Đã tải lên: {user?.songs?.length}/200</h3>
                            <div className={cx('slider')}>
                              <div
                                className={cx('slider-active')}
                                style={{ width: `${user?.songs?.length / 2}%` }}
                              ></div>
                            </div>
                          </div>
                          <div className={cx('right')}>
                            <h3>Bạn muốn tải lên nhiều hơn?</h3>
                            <a
                              href="https://zingmp3.vn/vip/upgrade?utm_source=desktop&utm_campaign=VIP&utm_medium=upload-upvip-btn"
                              target="blank"
                            >
                              NÂNG CẤP TÀI KHOẢN
                            </a>
                          </div>
                        </div>
                        <div className={cx('media-select-header')}>
                          <span className={cx('span1')}>BÀI HÁT</span>
                          <span className={cx('span3')}>THỜI GIAN</span>
                        </div>
                        {user?.songs?.length === 0 && <p>Chưa có bài hát được tải lên</p>}
                        {user?.songs?.length !== 0 &&
                          user?.songs?.map((song) => {
                            return (
                              <SongItem
                                type={'UPLOAD_SONG'}
                                scroll={scroll}
                                song={song}
                                key={song.id}
                              />
                            );
                          })}
                      </TabPanel>
                    </TabPanels>
                  </Tabs>
                </TabPanel>
                <TabPanel>
                  <p>POSTCAST!</p>
                </TabPanel>
                <TabPanel>
                  <p>ALBUM!</p>
                </TabPanel>
                <TabPanel>
                  <p>MV!</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </div>
        </div>
      )}
    </div>
  );
}

export default ThuVien;

const css = {
  tab1: {
    fontSize: '14px',
    p: '15px 0',
    mr: '40px',
    colo: '#dadada',
    fontWeight: '500',
    _selected: { color: 'white' },
  },
  tab2: {
    _hover: { borderColor: '#9b4de0', color: '#9b4de0' },
    fontSize: '12px',
    padding: '3px 10px 2px',
    color: '#fff',
    fontWeight: '400',
    border: '1px solid #fff',
    _selected: {
      bgColor: '#9b4de0',
      border: 'none',
      _hover: { color: '#fff' },
    },
  },
};
