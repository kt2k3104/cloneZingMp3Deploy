import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './FavoriteSong.module.scss';
import classNames from 'classnames/bind';
import { faEllipsis, faHeart, faMusic, faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartt } from '@fortawesome/free-regular-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import {
  handleChangeFavoriteSong,
  pauseSong,
  playSong,
  setCurrentSong,
} from '~/layouts/components/PlayerControls/ListenSlice';
import Tippy from '@tippyjs/react';
import Tippyy from '@tippyjs/react/headless';
import { useState } from 'react';
import SongOtherOptions from '../SongOtherOptions/SongOtherOptions';

const cx = classNames.bind(styles);

function FavoriteSong({ song }) {
  const { currentSong, isPlaying, favoriteId } = useSelector((state) => state.listen);
  const dispatch = useDispatch();

  const [isVisible, setIsVisible] = useState(false);

  const show = () => setIsVisible(true);
  const hide = () => setIsVisible(false);

  return (
    <div className={cx('wrapper', currentSong.id === song.id ? 'isActive' : 'noActive')}>
      <div className={cx('left')}>
        <FontAwesomeIcon className={cx('music_icon')} icon={faMusic} />
        <div
          className={cx('song-thumb')}
          onClick={() => {
            if (song.id === currentSong.id && isPlaying) {
              dispatch(pauseSong());
            } else if (song.id === currentSong.id && !isPlaying) {
              dispatch(playSong());
            } else if (song.id !== currentSong.id) {
              dispatch(setCurrentSong(song));
              dispatch(playSong());
            }
          }}
        >
          <img src={song.artwork} alt="img" />
          {currentSong === song && (
            <div className={cx('song-thumb-active')}>
              {isPlaying ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
            </div>
          )}
          {currentSong !== song && (
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
      <div className={cx('center')}>
        <span>{song.name + ' (Single)'}</span>
      </div>
      <div className={cx('right')}>
        {favoriteId.includes(song.id) ? (
          <button
            onClick={() => {
              dispatch(handleChangeFavoriteSong(song.id));
            }}
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
          onClickOutside={hide}
          offset={[0, 0]}
          render={(attrs) => <SongOtherOptions song={song} attrs={attrs} />}
        >
          <Tippy content="Khác">
            <button onClick={isVisible ? hide : show}>
              <FontAwesomeIcon icon={faEllipsis} />
            </button>
          </Tippy>
        </Tippyy>
      </div>
    </div>
  );
}

export default FavoriteSong;
