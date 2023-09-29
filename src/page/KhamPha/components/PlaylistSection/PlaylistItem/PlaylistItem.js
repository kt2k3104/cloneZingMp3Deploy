import { useState } from 'react';
import styles from './PlaylistItem.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartt, faPlayCircle } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

function PlaylistItem({ playlist, index }) {
  const [isFavoritePlaylist, setIsFavoritePlaylist] = useState(false);

  return (
    <div className={cx('wrapper', index === 4 ? 'hideplaylist' : '')}>
      <div className={cx('img')}>
        <img className={cx('img')} src={playlist.img} alt="img" />
        <div className={cx('img_hover')}>
          {isFavoritePlaylist && (
            <button
              onClick={() => {
                setIsFavoritePlaylist(false);
              }}
            >
              <FontAwesomeIcon className={cx('purple_heart')} icon={faHeart} />
            </button>
          )}{' '}
          {!isFavoritePlaylist && (
            <button
              onClick={() => {
                setIsFavoritePlaylist(true);
              }}
            >
              <FontAwesomeIcon icon={faHeartt} />
            </button>
          )}{' '}
          <FontAwesomeIcon className={cx('btn_play')} icon={faPlayCircle} />
          <button>
            <FontAwesomeIcon icon={faEllipsis} />
          </button>
        </div>
      </div>
      <h3>{playlist.title}</h3>
    </div>
  );
}

export default PlaylistItem;
