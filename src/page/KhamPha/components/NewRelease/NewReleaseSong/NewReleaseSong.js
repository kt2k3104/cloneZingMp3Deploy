import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './NewReleaseSong.module.scss';
import classNames from 'classnames/bind';
import { faEllipsis, faStar } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';

import customIcon from '~/components/UI/Icons/Icons';

const cx = classNames.bind(styles);

function NewReleaseSong({ song }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <img className={cx('song_thumb')} src={song.artwork} alt="img" />
        <div className={cx('card_info')}>
          <h3 className={song.isPremium ? cx('is-premium-name') : ''}>
            {song.name}
            {song.isPremium && <customIcon.PremiumIcon />}
          </h3>
          <span className={cx('artist', song.isPremium ? 'is-premium-artist' : '')}>
            {song.artist}
            {song.isHasPrize && <FontAwesomeIcon icon={faStar} />}
          </span>
          <span>{song.timeRelease}</span>
        </div>
      </div>
      <Tippy content="Khác">
        <button>
          <FontAwesomeIcon icon={faEllipsis} />
        </button>
      </Tippy>
    </div>
  );
}

export default NewReleaseSong;
