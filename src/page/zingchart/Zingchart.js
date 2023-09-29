import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './zingchart.module.scss';
import classNames from 'classnames/bind';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

import ListSongs from './components/listSongs/ListSongs';
import WeekChartItem from './components/weekChartItem/WeekChartItem';

const cx = classNames.bind(styles);

function Zingchart() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <h3>#zingchart</h3>
        <FontAwesomeIcon icon={faPlayCircle} />
      </div>
      <ListSongs />
      <div className={cx('week_chart_section')}>
        <div className={cx('bg-blur')}></div>
        <div className={cx('bg-alpha')}></div>
        <h1 className={cx('title')}>Bảng Xếp Hạng Tuần</h1>
        <div className={cx('content')}>
          <WeekChartItem data={weekChartSection.vietnam} />
          <WeekChartItem data={weekChartSection.usuk} />
          <WeekChartItem data={weekChartSection.kpop} />
        </div>
      </div>
    </div>
  );
}

export default Zingchart;

const weekChartSection = {
  vietnam: {
    title: 'Việt Nam',
    songs: [
      {
        prefix: '1',
        artwork: '/assets/img/zingchart/weekchart/vietnam/1.png',
        name: 'Sau Này Chúng Ta Giàu',
        artist: 'Khắc Việt, ACV',
        duration: '04:19',
      },
      {
        prefix: '2',
        artwork: '/assets/img/zingchart/weekchart/vietnam/2.png',
        name: 'Ngày Mai Người Ta...',
        artist: 'Thành Đạt',
        duration: '06:02',
      },
      {
        prefix: '3',
        artwork: '/assets/img/zingchart/weekchart/vietnam/3.png',
        name: 'À Lôi',
        artist: 'Double2T, Masew',
        duration: '03:17',
      },
      {
        prefix: '4',
        artwork: '/assets/img/zingchart/weekchart/vietnam/4.png',
        name: 'Sao Trời Làm Gió',
        artist: 'Nal, CT',
        duration: '05:23',
      },
      {
        prefix: '5',
        artwork: '/assets/img/zingchart/weekchart/vietnam/5.png',
        name: 'Xóa Tên Anh Đi',
        artist: 'Jack-J97',
        duration: '03:12',
      },
    ],
  },
  usuk: {
    title: 'US-UK',
    songs: [
      {
        prefix: '1',
        artwork: '/assets/img/zingchart/weekchart/usuk/1.png',
        name: 'Fast Car',
        artist: 'Luke Combs',
        duration: '04:25',
      },
      {
        prefix: '2',
        artwork: '/assets/img/zingchart/weekchart/usuk/2.png',
        name: 'Last Night',
        artist: 'Morgan Wallen',
        duration: '02:44',
      },
      {
        prefix: '3',
        artwork: '/assets/img/zingchart/weekchart/usuk/3.png',
        name: 'Cruel..',
        artist: 'Taylor Swift',
        duration: '02:58',
      },
      {
        prefix: '4',
        artwork: '/assets/img/zingchart/weekchart/usuk/4.png',
        name: 'Calm Down',
        artist: 'Rema, Selena Gomez',
        duration: '03:59',
      },
      {
        prefix: '5',
        artwork: '/assets/img/zingchart/weekchart/usuk/5.png',
        name: 'vampire',
        artist: 'Olivia Rodrigo',
        duration: '03:40',
      },
    ],
  },
  kpop: {
    title: 'K-Pop',
    songs: [
      {
        prefix: '1',
        artwork: '/assets/img/zingchart/weekchart/kpop/1.png',
        name: 'Super Shy',
        artist: 'NewJeans',
        duration: '02:35',
      },
      {
        prefix: '2',
        artwork: '/assets/img/zingchart/weekchart/kpop/2.png',
        name: 'Seven (feat.Latto)...',
        artist: 'Jung Kook, Latto',
        duration: '03:04',
      },
      {
        prefix: '3',
        artwork: '/assets/img/zingchart/weekchart/kpop/3.png',
        name: 'ETA',
        artist: 'NewJeans',
        duration: '02:31',
      },
      {
        prefix: '4',
        artwork: '/assets/img/zingchart/weekchart/kpop/4.png',
        name: 'Queencard',
        artist: '(G)i-DLE',
        duration: '02:41',
      },
      {
        prefix: '5',
        artwork: '/assets/img/zingchart/weekchart/kpop/5.png',
        name: 'I AM',
        artist: 'IVE',
        duration: '03:04',
      },
    ],
  },
};
