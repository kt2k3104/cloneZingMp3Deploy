import styles from './Timkiem.module.scss';
import classNames from 'classnames/bind';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, TabIndicator } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { playSong, setCurrentSong } from '~/layouts/components/PlayerControls/ListenSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faPlay } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import Tippyy from '@tippyjs/react/headless';
import { handleChangeFavoriteSong } from '../Auth/UserSlice';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartt } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import SongOtherOptions from '../ThuVien/components/SongOtherOptions/SongOtherOptions';

const cx = classNames.bind(styles);

function Timkiem() {
  const { isPlaying, currentSong, pauseSong } = useSelector((state) => state.listen);
  const { favoriteId } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);
  const show = () => setIsVisible(true);
  const hide = () => setIsVisible(false);
  const song = {
    id: 21,
    name: '3 1 0 7 - 2',
    artwork:
      'http://res.cloudinary.com/dc4vad8tx/image/upload/v1693882486/musicapp-nest/images/artworks/nfkmlzmidlr4lnoshlwd.webp',
    artist: 'Duongg, W/N, Nâu',
    duration: 268,
    url: 'http://res.cloudinary.com/dc4vad8tx/video/upload/v1693882484/musicapp-nest/audios/y6guainjorrmfqyllebr.mp3',
    created_at: '2023-09-04T19:54:47.142Z',
    updated_at: '2023-09-04T19:54:47.142Z',
    user: {
      id: 1,
      first_name: 'Trần',
      last_name: 'Đức Khải',
      email: 'khai@gmail.com',
      avatar: null,
      role: 'user',
      account_type: 'local',
      created_at: '2023-08-19T05:56:39.623Z',
      updated_at: '2023-08-19T05:56:39.623Z',
    },
    likedUsers: 1,
  };
  return (
    <div className={cx('wrapper')}>
      <Tabs w={'100%'} h={'100%'} minW={'768px'} variant="enclosed" sx={css.tabs}>
        <TabList
          borderBottomColor={'hsla(0, 0%, 100%, 0.1)'}
          padding={'0 59px'}
          h={'48px'}
          minW={'768px'}
        >
          <Box
            display={{ base: 'none', xl: 'flex' }}
            alignItems={'center'}
            fontSize={'24px'}
            fontWeight={'700'}
          >
            <Box sx={css.box1}>Kết Quả Tìm Kiếm</Box>
          </Box>
          <Tab ml={'19px'} sx={css.tab1}>
            TẤT CẢ
          </Tab>
          <Tab sx={css.tab1}>BÀI HÁT</Tab>
          <Tab sx={css.tab1}>PLAYLIST/ALBUM</Tab>
          <Tab sx={css.tab1}>NGHỆ SĨ/OA</Tab>
          <Tab sx={css.tab1}>MV</Tab>
        </TabList>
        <TabIndicator height="1px" bg="#9b4de0" borderRadius="1px" />

        <TabPanels w={'100%'} h={'100%'} minW={'768px'} p={{ base: '28px 29px', lg: '28px 59px' }}>
          <TabPanel minW={'768px'} w={'100%'} h={'100%'} p={'0'}>
            <div className={cx('section_1')}>
              <h3>Nổi Bật</h3>
              <div className={cx('section_1_content')}>
                <div className={cx('section_1_content1')}>
                  <div className={cx('left')}>
                    <div
                      className={cx('song-thumb')}
                      onClick={() => {
                        // if (type === 'PLAYLIST_SONG') dispatch(setQueue(playlist.songs));

                        if (song.id === currentSong.id && isPlaying) {
                          dispatch(pauseSong());
                        } else if (song.id === currentSong.id && !isPlaying) {
                          dispatch(setCurrentSong(song));
                          dispatch(playSong());
                        } else if (song.id !== currentSong.id) {
                          dispatch(setCurrentSong(song));
                          dispatch(playSong());
                        }
                      }}
                    >
                      <img src={song.artwork} alt="img" />
                      {currentSong.id === song.id && (
                        <div className={cx('song-thumb-active')}>
                          {isPlaying ? (
                            <img
                              style={{ width: '40%', height: '40%', borderRadius: 0 }}
                              src="/assets/img/icon-playing.gif"
                              alt="img"
                            />
                          ) : (
                            <FontAwesomeIcon icon={faPlay} />
                          )}
                        </div>
                      )}
                      {currentSong.id !== song.id && (
                        <div className={cx('song-thumb-active')}>
                          <FontAwesomeIcon icon={faPlay} />
                        </div>
                      )}
                    </div>
                    <div className={cx('card-info')}>
                      <span>{song.name}</span>
                      <h3>{song.artist}</h3>
                    </div>
                  </div>
                  <div className={cx('right')}>
                    {favoriteId.includes(song.id) ? (
                      <button
                        onClick={() => {
                          dispatch(handleChangeFavoriteSong(song.id));
                        }}
                        className={cx('showInFav')}
                      >
                        <FontAwesomeIcon className={cx('heart_purple')} icon={faHeart} />
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          dispatch(handleChangeFavoriteSong(song.id));
                        }}
                      >
                        <FontAwesomeIcon icon={faHeartt} />
                      </button>
                    )}

                    <Tippyy
                      interactive
                      placement="left"
                      visible={isVisible}
                      // trigger="mouseenter"
                      onClickOutside={hide}
                      offset={[0, 0]}
                      render={(attrs) => <SongOtherOptions hide={hide} song={song} attrs={attrs} />}
                    >
                      <Tippy content="Khác">
                        <button
                          className={cx('btn_option', 'dfnone')}
                          onClick={isVisible ? hide : show}
                        >
                          <FontAwesomeIcon icon={faEllipsis} />
                        </button>
                      </Tippy>
                    </Tippyy>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default Timkiem;

const css = {
  tabs: {
    position: 'relative',
    w: '100%',
    pb: '35px',
  },
  tab1: {
    fontSize: '14px',
    p: '15px 0 16px',
    mr: '38px',
    color: '#dadada',
    fontWeight: '500',
    _selected: { color: 'white' },
  },
  box1: {
    display: 'flex',
    alignItems: 'center',
    height: '60%',
    p: '10px 20px 10px 0',
    borderRight: '1px solid hsla(0,0%,100%,0.1)',
  },
};
