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
        artwork: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/6/f/4/1/6f412fff2959cf4b59df9fef77bd638a.jpg',
        name: 'Tất Cả Hoặc Không Là Gì Cả',
        artist: 'Cao Thái Sơn, Đông Thiên Đức',
        duration: '06:23',
      },
      {
        prefix: '2',
        artwork: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/d/f/a/e/dfae8c95805f0eacf0b26756ff0a0ae9.jpg',
        name: 'Mối Tình Không Tên',
        artist: 'Đình Nguyễn',
        duration: '05:36',
      },
      {
        prefix: '3',
        artwork: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/9/c/f/c/9cfcfa64d888e48f44a3326af53374f1.jpg',
        name: 'Sao Trời Làm Gió',
        artist: 'Nal, CT',
        duration: '05:23',
      },
      {
        prefix: '4',
        artwork: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/1/d/0/0/1d0055b67678494b663fb29eae6a082c.jpg',
        name: 'Anh Đâu Muốn Thấy Em Buồn',
        artist: 'Châu Khải Phong, ACV',
        duration: '04:58',
      },
      {
        prefix: '5',
        artwork: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/f/9/3/9/f9390ab7a26adbe59739fe2ba9470ee1.jpg',
        name: 'Ngày Mai Người Ta Lấy Chồng',
        artist: 'Thành Đạt',
        duration: '06:02',
      },
    ],
  },
  usuk: {
    title: 'US-UK',
    songs: [
      {
        prefix: '1',
        artwork: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/d/0/4/7/d04768a6d77df7ed9b41683bcc70d21d.jpg',
        name: 'vampire',
        artist: 'Olivia Rodrigo',
        duration: '03:40',
      },
      {
        prefix: '2',
        artwork: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/8/7/1/2/8712cbba24a6ce1961c0b89deb542792.jpg',
        name: 'Paint The Town Red',
        artist: 'Doja Cat',
        duration: '03:50',
      },
      {
        prefix: '3',
        artwork: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/4/e/1/1/4e114dd33889fbf6bc9538a5c1e2486d.jpg',
        name: 'Fast Car',
        artist: 'Luke Combs',
        duration: '04:25',
      },
      {
        prefix: '4',
        artwork: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/a/5/3/7/a537c16b2b1247e23ea926814340b5a4.jpg',
        name: 'Cruel Summer',
        artist: 'Taylor Swift',
        duration: '02:58',
      },
      {
        prefix: '5',
        artwork: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/9/e/e/e/9eeeacec8b43c3c3dc4d1112905175bb.jpg',
        name: 'Last Night',
        artist: 'Morgan Wallen',
        duration: '02:44',
      },
    ],
  },
  kpop: {
    title: 'K-Pop',
    songs: [
      {
        prefix: '1',
        artwork: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/8/d/9/f/8d9f0a0677a10ef40ad8d6a2cace1fb5.jpg',
        name: 'Love Lee',
        artist: 'AKMU',
        duration: '03:00',
      },
      {
        prefix: '2',
        artwork: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/9/8/0/9/9809eee597aeac551718ebd7bdd512d1.jpg',
        name: 'Smoke',
        artist: 'Dynamic Duo, Lee Young Ji',
        duration: '03:30',
      },
      {
        prefix: '3',
        artwork: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/9/8/0/9/9809eee597aeac551718ebd7bdd512d1.jpg',
        name: 'Fry’s Dream',
        artist: 'AKMU',
        duration: '03:25',
      },
      {
        prefix: '4',
        artwork: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/3/6/a/4/36a4f508df29ec8c7c342118b63a00aa.jpg',
        name: 'Seven (feat. Latto) (Clean Ver.)',
        artist: 'Jung Kook, Latto',
        duration: '03:04',
      },
      {
        prefix: '5',
        artwork: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/6/c/f/c/6cfcd4738a51c54368bace7191294203.jpg',
        name: 'Super Shy',
        artist: 'NewJeans',
        duration: '02:35',
      },
    ],
  },
};
