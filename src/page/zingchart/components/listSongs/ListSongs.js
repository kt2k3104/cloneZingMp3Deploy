import SongItem from '../songItem/SongItem';
import styles from './ListSongs.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function ListSongs() {
  return (
    <div className={cx('wrapper')}>
      {listSongs.map((song, index) => {
        return <SongItem song={song} key={index} />;
      })}
      <div className={cx('btn')}>
        <button>Xem top 100</button>
      </div>
    </div>
  );
}

export default ListSongs;

const listSongs = [
  {
    prefix: 'Gợi ý',
    artwork: '/assets/img/zingchart/listsongs/0.png',
    name: 'Tưởng Là Hiểu Nhau...',
    artist: 'Trịnh Thăng Bình',
    duration: '04:51',
  },
  {
    prefix: '1',
    artwork: '/assets/img/zingchart/listsongs/1.png',
    name: 'Sao Trời Làm Gió',
    artist: 'Nal, CT',
    duration: '05:23',
  },
  {
    prefix: '2',
    artwork: '/assets/img/zingchart/listsongs/2.png',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '3',
    artwork: '/assets/img/zingchart/listsongs/3.png',
    name: 'Ngày Mai Người Ta Lấy Chồng',
    artist: 'Thành Đạt',
    duration: '06:02',
  },
  {
    prefix: '4',
    artwork: '/assets/img/zingchart/listsongs/4.png',
    name: 'À Lôi',
    artist: 'Double2T, Masew',
    duration: '03:17',
  },
  {
    prefix: '5',
    artwork: '/assets/img/zingchart/listsongs/5.png',
    name: 'Hoa Cỏ Lau',
    artist: 'Phong Max',
    duration: '03:31',
  },
  {
    prefix: '6',
    artwork: '/assets/img/zingchart/listsongs/6.png',
    name: 'Em Là Ai',
    artist: 'Keyo',
    duration: '04:04',
  },
  {
    prefix: '7',
    artwork: '/assets/img/zingchart/listsongs/7.png',
    name: 'Xóa Tên Anh Đi',
    artist: 'Jack-J97',
    duration: '03:12',
  },
  {
    prefix: '8',
    artwork: '/assets/img/zingchart/listsongs/8.png',
    name: 'id 072019',
    artist: 'W/N',
    duration: '04:32',
  },
  {
    prefix: '9',
    artwork: '/assets/img/zingchart/listsongs/9.png',
    name: 'Rượu Mừng Hóa Người Dưng',
    artist: 'TLong',
    duration: '04:22',
  },
  {
    prefix: '10',
    artwork: '/assets/img/zingchart/listsongs/10.png',
    name: 'Cạn Tình Như Thế',
    artist: 'DICKSON, Thành Đạt, Lê Chí Trung',
    duration: '04:56',
  },
];
