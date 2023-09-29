import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './SongItem.module.scss';
import classNames from 'classnames/bind';
import {
  faChevronDown,
  faEllipsis,
  faHeart,
  faMusic,
  faPlay,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartt } from '@fortawesome/free-regular-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import {
  pauseSong,
  playSong,
  setCurrentSong,
  setQueue,
} from '~/layouts/components/PlayerControls/ListenSlice';
import Tippy from '@tippyjs/react';
import Tippyy from '@tippyjs/react/headless';
import { memo, useEffect, useState } from 'react';
import SongOtherOptions from '../SongOtherOptions/SongOtherOptions';
import customIcon from '~/components/UI/Icons/Icons';
import { handleChangeFavoriteSong } from '~/page/Auth/UserSlice';

const cx = classNames.bind(styles);

function SongItem({ song, scroll, type }) {
  const { currentSong, isPlaying } = useSelector((state) => state.listen);
  const { favoriteId, queueFavorite, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [isVisible, setIsVisible] = useState(false);

  const show = () => setIsVisible(true);
  const hide = () => setIsVisible(false);

  const convertTime = (time) => {
    if (!time) return '00:00';
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time - minutes * 60);
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    return `${minutes}:${seconds}`;
  };
  useEffect(() => {
    if (isVisible) {
      hide();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scroll]);

  return (
    <div
      onDoubleClick={() => {
        if (type === 'FAVORITE_ITEM') {
          dispatch(setQueue(queueFavorite));
        }
        if (type === 'UPLOAD_SONG') {
          dispatch(setQueue(user.songs));
        }

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
      className={cx('wrapper', currentSong.id === song.id ? 'isActive' : 'noActive')}
    >
      <div className={cx('left')}>
        <FontAwesomeIcon className={cx('music_icon')} icon={faMusic} />
        <div
          className={cx('song-thumb')}
          onClick={() => {
            if (type === 'FAVORITE_ITEM') {
              dispatch(setQueue(queueFavorite));
            }
            if (type === 'UPLOAD_SONG') {
              dispatch(setQueue(user.songs));
            }

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
      <div
        onDoubleClick={(e) => {
          e.stopPropagation();
        }}
        className={cx('center')}
      >
        {type === 'FAVORITE_ITEM' && <span>{song.name + ' (Single)'}</span>}
        {type === 'UPLOAD_SONG' && (
          <div className={cx('title')}>
            <span>Công khai</span>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        )}
      </div>
      <div className={cx('right')}>
        {type === 'FAVORITE_ITEM' && (
          <>
            <Tippy content="MV">
              <button
                onDoubleClick={(e) => {
                  e.stopPropagation();
                }}
                className={cx('btn-mv')}
              >
                <div className={cx('icon-mv')}>
                  <p>MV</p>
                </div>
              </button>
            </Tippy>
            <Tippy content="Xem lời bài hát">
              <button
                onDoubleClick={(e) => {
                  e.stopPropagation();
                }}
                className={cx('btn-karaoke')}
              >
                <customIcon.IconKaraoke />
              </button>
            </Tippy>
          </>
        )}
        {favoriteId.includes(song.id) ? (
          <button
            onDoubleClick={(e) => {
              e.stopPropagation();
            }}
            onClick={() => {
              dispatch(handleChangeFavoriteSong(song.id));
            }}
            className={cx('showInFav')}
          >
            <FontAwesomeIcon className={cx('heart_purple')} icon={faHeart} />
          </button>
        ) : (
          <button
            onDoubleClick={(e) => {
              e.stopPropagation();
            }}
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
          onClickOutside={hide}
          offset={[0, 0]}
          render={(attrs) => <SongOtherOptions type={type} hide={hide} song={song} attrs={attrs} />}
        >
          <Tippy content="Khác">
            <button
              className={cx('btn_option', 'dfnone')}
              onDoubleClick={(e) => {
                e.stopPropagation();
              }}
              onClick={isVisible ? hide : show}
            >
              <FontAwesomeIcon icon={faEllipsis} />
            </button>
          </Tippy>
        </Tippyy>

        <span className={cx('duration')}>{convertTime(song.duration)}</span>
      </div>
    </div>
  );
}

export default memo(SongItem);
