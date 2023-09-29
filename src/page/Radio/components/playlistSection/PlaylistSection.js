import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './PlaylistSection.module.scss';
import classNames from 'classnames/bind';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

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
      <div className={cx('container')}>
        <div className={cx('content')}>
          <div className={cx('img')}>
            <img src={data.playlists[0].img} alt="img" />
          </div>
          <h3>{data.playlists[0].title}</h3>
        </div>
        <div className={cx('content')}>
          <div className={cx('img')}>
            <img src={data.playlists[1].img} alt="img" />
          </div>
          <h3>{data.playlists[1].title}</h3>
        </div>
        <div className={cx('content')}>
          <div className={cx('img')}>
            <img src={data.playlists[2].img} alt="img" />
          </div>
          <h3>{data.playlists[2].title}</h3>
        </div>
        <div className={cx('content')}>
          <div className={cx('img')}>
            <img src={data.playlists[3].img} alt="img" />
          </div>
          <h3>{data.playlists[3].title}</h3>
        </div>
        <div className={cx('content', 'hideplaylist')}>
          <div className={cx('img')}>
            <img src={data.playlists[4].img} alt="img" />
          </div>
          <h3>{data.playlists[4].title}</h3>
        </div>
      </div>
    </div>
  );
}

export default PlaylistSection;
