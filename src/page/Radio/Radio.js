import LivestreamSection from '../KhamPha/components/LivestreamSection/LivestreamSection';
import styles from './Radio.module.scss';
import classNames from 'classnames/bind';
// import PlaylistSection from './components/playlistSection/PlaylistSection';
import RadioSchedule from './components/radioSchedule';

const cx = classNames.bind(styles);

function Radio() {
  return (
    <div className={cx('wrapper')}>
      <h1 className={cx('header')}>Radio</h1>
      <div className={cx('livestream_section')}>
        <LivestreamSection noheader data={radioData} />
        <RadioSchedule />
        {/* <PlaylistSection data={playlistData.khamphapodcast} />
        <PlaylistSection data={playlistData.chuongtrinhmoi} /> */}
      </div>
    </div>
  );
}

export default Radio;

const radioData = [
  {
    img: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/b/1/6/a/b16ac2732018aa6684c5b1265b6c7d61.jpg',
    title: 'XONE Radio',
    subtitle: '71 đang nghe',
  },
  {
    img: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/f/d/7/9/fd79808d2180de9a421afa6aff38953e.jpg',
    title: 'V-POP',
    subtitle: '665 đang nghe',
  },
  {
    img: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/b/c/2/1/bc2115886f2e2e9f7cf2fa28a39cda12.jpg',
    title: 'K-POP',
    subtitle: '50 đang nghe',
  },
  {
    img: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/e/2/3/5/e235117d191db9f7bbc82a3d31f17e60.jpg',
    title: 'Chạm',
    subtitle: '113 đang nghe',
  },
  {
    img: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/e/f/b/0/efb05fb9097a7057aecef6ecb62bff5a.jpg',
    title: 'Acoustic',
    subtitle: '38 đang nghe',
  },
  {
    img: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/4/8/c/e/48cefd41cfc03533d52303190f47e6ef.jpg',
    title: 'Bolero',
    subtitle: '431 đang nghe',
  },
  {
    img: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/d/4/f/f/d4ffcd5734d4dae6266fec08719324f0.jpg',
    title: 'US-UK',
    subtitle: '68 đang nghe',
  },
];

// const playlistData = {
//   khamphapodcast: {
//     title: 'Khám Phá Podcast',
//     playlists: [
//       {
//         img: '/assets/img/radio/khamphapodcast/1.png',
//         title: 'Đắp Chăn Nằm Nghe Tun Kể',
//       },
//       {
//         img: '/assets/img/radio/khamphapodcast/2.png',
//         title: 'Nắng Thủy Tinh',
//       },
//       {
//         img: '/assets/img/radio/khamphapodcast/3.png',
//         title: 'Mây Podcast',
//       },
//       {
//         img: '/assets/img/radio/khamphapodcast/4.png',
//         title: 'Vì sao thế nhỉ!',
//       },
//       {
//         img: '/assets/img/radio/khamphapodcast/5.png',
//         title: 'Mây kể chuyện',
//       },
//     ],
//   },
//   chuongtrinhmoi: {
//     title: 'Chương Trình Mới',
//     playlists: [
//       {
//         img: '/assets/img/radio/chuongtrinhmoi/1.png',
//         title: 'Thầy Thích Trúc Thái Minh',
//       },
//       {
//         img: '/assets/img/radio/chuongtrinhmoi/2.png',
//         title: 'Nhìn - thấy',
//       },
//       {
//         img: '/assets/img/radio/chuongtrinhmoi/3.png',
//         title: 'First, Lady',
//       },
//       {
//         img: '/assets/img/radio/chuongtrinhmoi/4.png',
//         title: 'Trăm năm sân khấu',
//       },
//       {
//         img: '/assets/img/radio/chuongtrinhmoi/5.png',
//         title: 'Nửa kia ngoại quốc',
//       },
//     ],
//   },
// };
