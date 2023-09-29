import { Box, HStack, Image, Img, Stack, useDisclosure } from '@chakra-ui/react';
import styles from './Playlist.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';
import { faEllipsis, faMusic, faPause, faPen, faPlay } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react/headless';

import PlaylistOptions from '~/layouts/components/Sidebar/component/PlaylistOptions';
import SongItem from './components/songItem/SongItem';
import { getPlaylists } from '../Auth/UserSlice';
import ModalAddPlaylist from '~/layouts/components/Sidebar/component/ModalAddPlaylist';
import {
  pauseSong,
  playSong,
  setCurrentSong,
  setQueue,
} from '~/layouts/components/PlayerControls/ListenSlice';

const cx = classNames.bind(styles);

function Playlist() {
  const { user, playlists } = useSelector((state) => state.user);
  const { isPlaying, currentSong } = useSelector((state) => state.listen);
  const dispatch = useDispatch();
  const { playlistId } = useParams();
  const {
    isOpen: isOpenModalUpdate,
    onOpen: onOpenModalUpdate,
    onClose: onCloseModalUpdate,
  } = useDisclosure();
  const [visible, setVisible] = useState(false);
  const show = () => setVisible(true);
  const hide = () => setVisible(false);
  // const playlistId = Number(query.get('id'));
  let playlist;
  playlists?.forEach((item) => {
    if (item.id === Number(playlistId)) playlist = item;
  });

  useEffect(() => {
    dispatch(getPlaylists());
  }, [dispatch]);

  return (
    <div className={cx('wrapper')}>
      <Stack w={'100%'} h={'100%'} gap={'0'} flexDirection={{ base: 'column', xl: 'row' }}>
        <Stack sx={css.stack1}>
          <Box
            onClick={() => {
              if (!playlist.songs.includes(currentSong)) {
                dispatch(setQueue(playlist.songs));
                dispatch(setCurrentSong(playlist.songs[0]));
                dispatch(playSong());
              }
              if (isPlaying && playlist.songs.includes(currentSong)) {
                dispatch(pauseSong());
              } else {
                dispatch(playSong());
              }
            }}
            sx={css.box1}
            role="group"
          >
            {!playlist?.songs && (
              <Image sx={css.img} src="https://photo-zmp3.zmdcdn.me/album_default.png" alt="img" />
            )}
            {playlist?.songs?.length <= 3 && (
              <Image
                _groupHover={
                  isPlaying && playlist.songs.includes(currentSong)
                    ? {
                        transform: 'scale(1.1)',
                        filter: 'brightness(100%)',
                      }
                    : { filter: 'brightness(55%)', transform: 'scale(1.1)' }
                }
                sx={css.img}
                src={
                  playlist?.songs?.length === 0
                    ? 'https://photo-zmp3.zmdcdn.me/album_default.png'
                    : playlist?.songs?.length <= 3
                    ? playlist?.songs[0].artwork
                    : ''
                }
                alt="img"
              />
            )}
            {playlist?.songs?.length > 3 && (
              <Box sx={css.box3}>
                <Image src={playlist?.songs[0].artwork} alt="img" />
                <Image src={playlist?.songs[1].artwork} alt="img" />
                <Image src={playlist?.songs[2].artwork} alt="img" />
                <Image src={playlist?.songs[3].artwork} alt="img" />
              </Box>
            )}
            <Stack sx={css.stack2}>
              {isPlaying && playlist.songs.includes(currentSong) ? (
                <HStack
                  w={'15%'}
                  h={'15%'}
                  borderRadius={'50%'}
                  border={'1px solid #fff'}
                  justifyContent={'center'}
                >
                  <Img sx={css.img2} src="/assets/img/icon-playing.gif" alt="img" />
                </HStack>
              ) : (
                <Box sx={css.box4}>
                  <FontAwesomeIcon className={cx('btn_play')} icon={faPlayCircle} />
                </Box>
              )}
            </Stack>
          </Box>
          <Stack sx={css.stack3}>
            <Stack sx={css.stack4}>
              <h2 className={cx('name_playlist')}>
                {playlist?.name}{' '}
                <FontAwesomeIcon
                  onClick={() => {
                    onOpenModalUpdate();
                  }}
                  icon={faPen}
                />
                <ModalAddPlaylist
                  playlist={playlist}
                  isOpen={isOpenModalUpdate}
                  onClose={onCloseModalUpdate}
                />
              </h2>
              <h3 className={cx('artist_playlist')}>
                Tạo bởi {user?.first_name} {user?.last_name}
              </h3>
              <h3 className={cx('status_playlist')}>Công khai</h3>
            </Stack>
            <Stack sx={css.stack5}>
              <button
                onClick={() => {
                  if (!playlist.songs.includes(currentSong)) {
                    dispatch(setQueue(playlist.songs));
                    dispatch(setCurrentSong(playlist.songs[0]));
                    dispatch(playSong());
                  }
                  if (isPlaying && playlist.songs.includes(currentSong)) {
                    dispatch(pauseSong());
                  } else {
                    dispatch(playSong());
                  }
                }}
                className={cx('btn_keep_playing')}
              >
                {isPlaying && playlist.songs.includes(currentSong) ? (
                  <>
                    <FontAwesomeIcon icon={faPause} />
                    <span>TẠM DỪNG</span>
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon icon={faPlay} />
                    <span>TIẾP TỤC PHÁT</span>
                  </>
                )}
              </button>
              <Tippy
                interactive
                placement="right"
                visible={visible}
                onClickOutside={hide}
                offset={[-130, 0]}
                render={(attrs) => (
                  <PlaylistOptions x={-113} y={-10} hide={hide} playlist={playlist} attrs={attrs} />
                )}
              >
                <button onClick={visible ? hide : show} className={cx('more_option')}>
                  <FontAwesomeIcon icon={faEllipsis} />
                </button>
              </Tippy>
            </Stack>
          </Stack>
        </Stack>
        <Box sx={css.box2}>
          {(!playlist?.songs || playlist?.songs?.length === 0) && (
            <div className={cx('no_content_box')}>
              <FontAwesomeIcon icon={faMusic} />
              <span>Không có bài hát trong playlist của bạn</span>
            </div>
          )}
          {playlist?.songs?.length > 0 && (
            <>
              <div className={cx('media-playlist-header')}>
                <span className={cx('span1')}>BÀI HÁT</span>
                <span className={cx('span2')}>ALBUM</span>
                <span className={cx('span3')}>THỜI GIAN</span>
              </div>
              {playlist?.songs?.map((song) => {
                return (
                  <SongItem
                    type={'PLAYLIST_SONG'}
                    playlistId={playlist.id}
                    favoriteSong
                    key={song.id}
                    song={song}
                  />
                );
              })}
            </>
          )}
        </Box>
      </Stack>
    </div>
  );
}

export default Playlist;

const css = {
  stack1: {
    w: { base: '100%', xl: '300px' },
    h: { base: '230px', xl: '514.6px' },
    pb: { base: '30px' },
    flexDirection: { base: 'row', xl: 'column' },
    gap: { base: '20px', xl: '0' },
  },
  box1: {
    minW: { base: '200px', xl: '300px' },
    w: { base: '200px', xl: '100%' },
    h: { base: '200px', xl: '300px' },
    minH: { base: '200px', xl: '300px' },
    borderRadius: '8px',
    role: 'group',
    position: 'relative',
    overflow: 'hidden',
  },
  img: {
    display: 'block',
    w: '100%',
    transition: 'transform 0.4s linear, filter 0.2s linear',
  },
  stack2: {
    position: 'absolute',
    top: '0',
    left: '0',
    w: '100%',
    h: '100%',
    bgColor: 'transparent',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  },
  stack3: {
    mt: { base: '0', xl: '12px' },
    w: '100%',
    dir: 'column',
    gap: '0',
    justifyContent: { base: 'space-between', xl: 'center' },
  },
  stack4: {
    w: '100%',
    h: '69.2px',
    flexDirection: 'column',
    alignItems: { base: 'start', xl: 'center' },
    gap: '0',
  },
  stack5: {
    gap: { base: '10px', xl: '0' },
    w: '100%',
    mt: '16px',
    alignItems: { base: 'flex-end', xl: 'center' },
    flexDir: { base: 'row', xl: 'column' },
  },
  box2: {
    w: { base: '100%', xl: 'calc(100% - 300px)' },
    h: { base: 'calc(100% - 230px)', xl: '100%' },
    pl: { base: '0', xl: '30px' },
  },
  box3: {
    display: 'grid',
    gridTemplateColumns: '50% 50%',
    w: '100%',
    transition: 'transform 0.4s linear',
    _groupHover: { filter: 'brightness(55%)', transform: 'scale(1.1)' },
  },
  img2: {
    width: '40%',
    height: '40%',
    borderRadius: 0,
  },
  box4: {
    _groupHover: { opacity: '1' },
    opacity: '0',
  },
};
