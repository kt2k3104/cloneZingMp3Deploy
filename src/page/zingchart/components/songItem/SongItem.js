import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './SongItem.module.scss';
import classNames from 'classnames/bind';
import { faEllipsis, faHeart, faMinus, faPlay } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartt } from '@fortawesome/free-regular-svg-icons';
import Tippy from '@tippyjs/react';
import { useState } from 'react';

import customIcon from '~/components/UI/Icons/Icons';

const cx = classNames.bind(styles);

function SongItem({ song }) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className={cx('wrapper', 'noActive')}>
      <div className={cx('left')}>
        <div className={cx('song-prefix')}>
          {song.prefix === 'Gợi ý' && <span className={cx('title')}>Gợi ý</span>}
          {song.prefix !== 'Gợi ý' && (
            <>
              <span
                className={cx(
                  'number',
                  song.prefix === '1' ? 'one' : '',
                  song.prefix === '2' ? 'two' : '',
                  song.prefix === '3' ? 'three' : '',
                )}
              >
                {song.prefix}
              </span>
              <FontAwesomeIcon icon={faMinus} />
            </>
          )}
        </div>
        <div className={cx('song-thumb')}>
          <img src={song.artwork} alt="img" />

          <div className={cx('song-thumb-active')}>
            <FontAwesomeIcon icon={faPlay} />
          </div>
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
        <Tippy content="MV">
          <button className={cx('btn-mv')}>
            <div className={cx('icon-mv')}>
              <p>MV</p>
            </div>
          </button>
        </Tippy>
        <Tippy content="Xem lời bài hát">
          <button className={cx('btn-karaoke')}>
            <customIcon.IconKaraoke />
          </button>
        </Tippy>

        {isFavorite ? (
          <button
            onClick={() => {
              setIsFavorite(false);
            }}
          >
            <FontAwesomeIcon className={cx('heart_purple')} icon={faHeart} />
          </button>
        ) : (
          <button
            onClick={() => {
              setIsFavorite(true);
            }}
          >
            <FontAwesomeIcon icon={faHeartt} />
          </button>
        )}

        <Tippy content="Khác">
          <button className={cx('btn_option', 'dfnone')}>
            <FontAwesomeIcon icon={faEllipsis} />
          </button>
        </Tippy>

        <span className={cx('duration')}>{song.duration}</span>
      </div>
    </div>
  );
}

export default SongItem;
