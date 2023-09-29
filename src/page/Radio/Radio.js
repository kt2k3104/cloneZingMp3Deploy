import LivestreamSection from '../KhamPha/components/LivestreamSection/LivestreamSection';
import styles from './Radio.module.scss';
import classNames from 'classnames/bind';
import PlaylistSection from './components/playlistSection/PlaylistSection';

const cx = classNames.bind(styles);

function Radio() {
  return (
    <div className={cx('wrapper')}>
      <h1 className={cx('header')}>Radio</h1>
      <div className={cx('livestream_section')}>
        <LivestreamSection noheader data={radioData} />
        <PlaylistSection data={playlistData.khamphapodcast} />
        <PlaylistSection data={playlistData.chuongtrinhmoi} />
      </div>
    </div>
  );
}

export default Radio;

const radioData = [
  {
    img: '/assets/img/khampha/radionoibat/2.png',
    title: 'XONE Radio',
    subtitle: '68 đang nghe',
  },
  {
    img: '/assets/img/khampha/radionoibat/3.png',
    title: 'V-POP',
    subtitle: '665 đang nghe',
  },
  {
    img: '/assets/img/khampha/radionoibat/4.png',
    title: 'Pladio',
    subtitle: '50 đang nghe',
  },
  {
    img: '/assets/img/khampha/radionoibat/5.png',
    title: 'Chạm',
    subtitle: '113 đang nghe',
  },
  {
    img: '/assets/img/khampha/radionoibat/6.png',
    title: 'On Air',
    subtitle: '38 đang nghe',
  },
  {
    img: '/assets/img/khampha/radionoibat/7.png',
    title: 'Bolero',
    subtitle: '431 đang nghe',
  },
  {
    img: '/assets/img/khampha/radionoibat/8.png',
    title: 'US-UK',
    subtitle: '68 đang nghe',
  },
];

const playlistData = {
  khamphapodcast: {
    title: 'Khám Phá Podcast',
    playlists: [
      {
        img: '/assets/img/radio/khamphapodcast/1.png',
        title: 'Đắp Chăn Nằm Nghe Tun Kể',
      },
      {
        img: '/assets/img/radio/khamphapodcast/2.png',
        title: 'Nắng Thủy Tinh',
      },
      {
        img: '/assets/img/radio/khamphapodcast/3.png',
        title: 'Mây Podcast',
      },
      {
        img: '/assets/img/radio/khamphapodcast/4.png',
        title: 'Vì sao thế nhỉ!',
      },
      {
        img: '/assets/img/radio/khamphapodcast/5.png',
        title: 'Mây kể chuyện',
      },
    ],
  },
  chuongtrinhmoi: {
    title: 'Chương Trình Mới',
    playlists: [
      {
        img: '/assets/img/radio/chuongtrinhmoi/1.png',
        title: 'Thầy Thích Trúc Thái Minh',
      },
      {
        img: '/assets/img/radio/chuongtrinhmoi/2.png',
        title: 'Nhìn - thấy',
      },
      {
        img: '/assets/img/radio/chuongtrinhmoi/3.png',
        title: 'First, Lady',
      },
      {
        img: '/assets/img/radio/chuongtrinhmoi/4.png',
        title: 'Trăm năm sân khấu',
      },
      {
        img: '/assets/img/radio/chuongtrinhmoi/5.png',
        title: 'Nửa kia ngoại quốc',
      },
    ],
  },
};
