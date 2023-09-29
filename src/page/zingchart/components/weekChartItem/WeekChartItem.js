import styles from './WeekChartItem.module.scss';
import classNames from 'classnames/bind';
import SongItem from './songItem/SongItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function WeekChartItem({ data }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('title')}>
        <h2>{data.title}</h2>
        <FontAwesomeIcon icon={faPlayCircle} />
      </div>
      <div className={cx('content')}>
        {data.songs.map((song, index) => {
          return <SongItem key={index} song={song} />;
        })}
      </div>
      <div className={cx('btn')}>
        <button>Xem tất cả</button>
      </div>
    </div>
  );
}

export default WeekChartItem;
