import styles from './PlaylistItem.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartt, faPlayCircle } from '@fortawesome/free-regular-svg-icons';
import { faHeart, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';
import { Box, Img } from '@chakra-ui/react';
import { changePlaylistNavigatePath } from '~/page/Auth/UserSlice';
import PlaylistOptions from '~/layouts/components/Sidebar/component/PlaylistOptions';

const cx = classNames.bind(styles);

function PlaylistItem({ playlist, scroll }) {
  const { user, afterAddPlaylistNavigatePath } = useSelector((state) => state.user);
  const [isFavoritePlaylist, setIsFavoritePlaylist] = useState(false);
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const show = () => setVisible(true);
  const hide = () => setVisible(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (afterAddPlaylistNavigatePath) {
      navigate(afterAddPlaylistNavigatePath, { replace: false, relative: 'path' });
      dispatch(changePlaylistNavigatePath(''));
    }
  }, [navigate, afterAddPlaylistNavigatePath, dispatch]);

  useEffect(() => {
    if (visible) {
      hide();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scroll]);

  return (
    <div
      onClick={(e) => {
        if (playlist) {
          e.preventDefault();
          dispatch(changePlaylistNavigatePath(`/playlist/${playlist?.id}`));
        }
      }}
      className={cx('wrapper', visible ? 'showoptions' : '')}
    >
      {/* <Link to={`/playlist/${playlist?.id}`}> */}
      <div className={cx('img')}>
        <div className={cx('imgg')}>
          {!playlist && (
            <Img
              className={cx('imggg')}
              src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/1/2/1/f/121fde6fe3898bc64cf04b716ddbe590.jpg"
              alt="img"
            />
          )}
          {playlist && !playlist?.songs && (
            <Img
              className={cx('imggg')}
              src="https://photo-zmp3.zmdcdn.me/album_default.png"
              alt="img"
            />
          )}
          {playlist?.songs?.length <= 3 && (
            <Img
              className={cx('imggg')}
              sx={css.img}
              src={
                playlist?.songs?.length === 0
                  ? 'https://photo-zmp3.zmdcdn.me/album_default.png'
                  : playlist?.songs?.length <= 3
                  ? playlist?.songs[0].artwork
                  : 'https://photo-zmp3.zmdcdn.me/album_default.png'
              }
              alt="img"
            />
          )}
          {playlist?.songs?.length > 3 && (
            <Box className={cx('imggg')} sx={css.box3}>
              <Img src={playlist?.songs[0].artwork} alt="img" />
              <Img src={playlist?.songs[1].artwork} alt="img" />
              <Img src={playlist?.songs[2].artwork} alt="img" />
              <Img src={playlist?.songs[3].artwork} alt="img" />
            </Box>
          )}
        </div>
        <div className={cx('img_hover', visible ? 'showoptions' : '')}>
          {isFavoritePlaylist && (
            <button
              className={cx('btn-option')}
              onClick={(e) => {
                e.stopPropagation();
                setIsFavoritePlaylist(false);
              }}
            >
              <FontAwesomeIcon className={cx('purple_heart')} icon={faHeart} />
            </button>
          )}
          {!isFavoritePlaylist && (
            <button
              className={cx('btn-option')}
              onClick={(e) => {
                e.stopPropagation();
                setIsFavoritePlaylist(true);
              }}
            >
              <FontAwesomeIcon icon={faHeartt} />
            </button>
          )}
          <FontAwesomeIcon className={cx('btn_play')} icon={faPlayCircle} />
          <Tippy
            interactive
            visible={visible}
            onClickOutside={hide}
            placement="right"
            offset={[-130, 0]}
            render={(attrs) => (
              <PlaylistOptions x={-113} y={-10} hide={hide} playlist={playlist} attrs={attrs} />
            )}
          >
            <button
              className={cx('btn-option')}
              onClick={(e) => {
                if (playlist) {
                  e.stopPropagation();
                  visible ? hide() : show();
                }
              }}
            >
              <FontAwesomeIcon icon={faEllipsis} />
            </button>
          </Tippy>
        </div>
      </div>
      <a href="http://localhost:3000/mymusic">{playlist ? playlist.name : '4U - On Repeat'}</a>
      <h3>{playlist ? `${user.first_name} ${user.last_name}` : 'Zing MP3'}</h3>
    </div>
  );
}

export default memo(PlaylistItem);

const css = {
  img: {
    display: 'block',
    w: '100%',
    transition: 'transform 0.4s linear',
    _groupHover: { filter: 'brightness(55%)', transform: 'scale(1.1)' },
  },
  box3: {
    display: 'grid',
    gridTemplateColumns: '50% 50%',
    w: '100%',
    transition: 'transform 0.4s linear',
    _groupHover: { filter: 'brightness(55%)', transform: 'scale(1.1)' },
  },
};
