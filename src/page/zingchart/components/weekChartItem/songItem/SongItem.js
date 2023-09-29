import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './SongItem.module.scss';
import classNames from 'classnames/bind';
import { faEllipsis, faMinus, faPlay } from '@fortawesome/free-solid-svg-icons';
import customIcon from '~/components/UI/Icons/Icons';
import Tippy from '@tippyjs/react';

const cx = classNames.bind(styles);

function SongItem({ song }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('left')}>
        <div className={cx('song-prefix')}>
          <span className={cx('number')}>{song.prefix}</span>
          <FontAwesomeIcon icon={faMinus} />
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
      <div className={cx('right')}>
        <Tippy content="Phát cùng lời bài hát">
          <button className={cx('btn-karaoke')}>
            <customIcon.IconKaraoke />
          </button>
        </Tippy>
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
