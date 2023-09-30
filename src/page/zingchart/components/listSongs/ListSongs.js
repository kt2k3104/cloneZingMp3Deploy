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
    artwork: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/f/3/7/9/f379cc4a11048e8c3cf94cc42e6bff89.jpg',
    name: 'Có đau thì đau một mình',
    artist: 'Orange, Phúc Du',
    duration: '03:31',
  },
  {
    prefix: '1',
    artwork: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/6/f/4/1/6f412fff2959cf4b59df9fef77bd638a.jpg',
    name: 'Tất Cả Hoặc Không Là Gì Cả',
    artist: 'Cao Thái Sơn, Đông Thiên Đức',
    duration: '06:23',
  },
  {
    prefix: '2',
    artwork: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/9/c/f/c/9cfcfa64d888e48f44a3326af53374f1.jpg',
    name: 'Sao Trời Làm Gió',
    artist: 'Nal, CT',
    duration: '05:23',
  },
  {
    prefix: '3',
    artwork: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/6/9/3/f/693f8f516bfaa717ef4043f11edfdde2.jpg',
    name: 'Lệ Lưu Ly',
    artist: 'Vũ Phụng Tiên, DT',
    duration: '03:21',
  },
  {
    prefix: '4',
    artwork: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/b/f/0/1/bf0182328238f2a252496a63e51f1f74.jpg',
    name: 'Cắt Đôi Nỗi Sầu',
    artist: 'Tăng Duy Tân, Drum7',
    duration: '03:02',
  },
  {
    prefix: '5',
    artwork: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/d/f/a/e/dfae8c95805f0eacf0b26756ff0a0ae9.jpg',
    name: 'Mối Tình Không Tên',
    artist: 'Đình Nguyễn',
    duration: '05:36',
  },
  {
    prefix: '6',
    artwork: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/1/d/0/0/1d0055b67678494b663fb29eae6a082c.jpg',
    name: 'Anh Đâu Muốn Thấy Em Buồn',
    artist: 'Châu Khải Phong, ACV',
    duration: '04:58',
  },
  {
    prefix: '7',
    artwork: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/f/9/3/9/f9390ab7a26adbe59739fe2ba9470ee1.jpg',
    name: 'Ngày Mai Người Ta Lấy Chồng',
    artist: 'Thành Đạt',
    duration: '06:02',
  },
  {
    prefix: '8',
    artwork: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/8/e/7/6/8e760a4505164f319d678689feabbe37.jpg',
    name: 'Cạn Tình Như Thế',
    artist: 'DICKSON, Thành Đạt, Lê Chí Trung',
    duration: '04:56',
  },
  {
    prefix: '9',
    artwork: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/3/7/7/6/3776ebae253694a7a7e02cc7c2b790b1.jpg',
    name: 'Nhờ Em Nhắn Với Người Đó',
    artist: 'Tăng Phúc, Tonny Việt',
    duration: '05:18',
  },
  {
    prefix: '10',
    artwork: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/6/e/d/b/6edb77335e90a767735022f61ae93ab4.jpg',
    name: 'id 072019',
    artist: 'W/N',
    duration: '04:32',
  },
];
