import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './PlaylistSection.module.scss';
import classNames from 'classnames/bind';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import PlaylistItem from './PlaylistItem/PlaylistItem';

const cx = classNames.bind(styles);

function PlaylistSection({ data }) {
  return (
    <div className={cx('wrapper')}>
      <h3 className={cx('title')}>
        {data.title}
        <span>
          TẤT CẢ <FontAwesomeIcon icon={faChevronRight} />
        </span>
      </h3>
      <div className={cx('content')}>
        {data.playlists.map((playlist, index) => {
          return <PlaylistItem playlist={playlist} key={index} index={index} />;
        })}
      </div>
    </div>
  );
}

export default PlaylistSection;
