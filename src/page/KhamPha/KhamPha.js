import styles from './KhamPha.module.scss';
import classNames from 'classnames/bind';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import NewRelease from './components/NewRelease/NewRelease';
import PlaylistSection from './components/PlaylistSection/PlaylistSection';
import LivestreamSection from './components/LivestreamSection/LivestreamSection';
import PartnerSection from './components/PartnerSection/PartnerSection';

const cx = classNames.bind(styles);

function KhamPha() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('gallery')}>
        <Slider {...settings}>
          <div className={cx('gallery_img')}>
            <img
              src="https://photo-zmp3.zmdcdn.me/banner/1/4/a/6/14a6bc4408e442dc2a892e1d4a189887.jpg"
              alt="img"
            />
          </div>
          <div className={cx('gallery_img')}>
            <img
              src="https://photo-zmp3.zmdcdn.me/banner/e/2/9/1/e2917910851c112d22209b2aa8d6e9a9.jpg"
              alt="img"
            />
          </div>
          <div className={cx('gallery_img')}>
            <img
              src="https://photo-zmp3.zmdcdn.me/banner/b/0/f/a/b0fa9fbfce103d1dce15d73aaceb68be.jpg"
              alt="img"
            />
          </div>
          <div className={cx('gallery_img')}>
            <img
              src="https://photo-zmp3.zmdcdn.me/banner/0/a/4/1/0a417c2e9a463131c8d70465e357770b.jpg"
              alt="img"
            />
          </div>
          <div className={cx('gallery_img')}>
            <img
              src="https://photo-zmp3.zmdcdn.me/banner/5/6/f/4/56f4435fafc4c88d278759de7ca28506.jpg"
              alt="img"
            />
          </div>
        </Slider>
      </div>
      <NewRelease newReleaseSongs={newReleaseSongs} />
      <PlaylistSection data={playlistData.Chill} />
      <PlaylistSection data={playlistData.Motchutyeudoi} />
      <PlaylistSection data={playlistData.RemicLaDanceLuon} />
      <PlaylistSection data={playlistData.Tamtrangtancham} />
      <PlaylistSection data={playlistData.Nghesithinhhanh} />
      <LivestreamSection data={radioData} />
      <PartnerSection />
    </div>
  );
}

export default KhamPha;

const newReleaseSongs = [
  {
    name: 'Làm Sao Để Em Biết',
    artwork: './assets/img/khampha/newrelease/lamsaodeembiet.png',
    artist: 'Khải Đăng',
    timeRelease: '2 giờ trước',
    isHasPrize: false,
    isPremium: false,
  },
  {
    name: 'Winner',
    artwork: './assets/img/khampha/newrelease/winner.png',
    artist: 'Conan Gray',
    timeRelease: '2 ngày trước',
    isHasPrize: false,
    isPremium: true,
  },
  {
    name: 'Hóa Đơn Tiền Điện',
    artwork: './assets/img/khampha/newrelease/hoadontiendien.png',
    artist: 'Thu Minh, Hoàng Dũng',
    timeRelease: '3 ngày trước',
    isHasPrize: false,
    isPremium: false,
  },
  {
    name: 'Tưởng Là Hiểu Nhau...',
    artwork: './assets/img/khampha/newrelease/tuonglahieunhau.png',
    artist: 'Trịnh Thăng Bình',
    timeRelease: 'Hôm qua',
    isHasPrize: true,
    isPremium: false,
  },
  {
    name: 'Single Soon',
    artwork: './assets/img/khampha/newrelease/singlesoon.png',
    artist: 'Selena Gomez',
    timeRelease: '2 ngày trước',
    isHasPrize: false,
    isPremium: true,
  },
  {
    name: 'Chờ Em Đến Bao Giờ?',
    artwork: './assets/img/khampha/newrelease/choemdenbaogio.png',
    artist: 'Phong Max',
    timeRelease: '3 ngày trước',
    isHasPrize: false,
    isPremium: false,
  },
  {
    name: 'THE GIRLS (BLACKPINK THE GAME...',
    artwork: './assets/img/khampha/newrelease/thegirl.png',
    artist: 'BLACKPINK',
    timeRelease: '2 ngày trước',
    isHasPrize: false,
    isPremium: false,
  },
  {
    name: 'Cung Bậc Sầu',
    artwork: './assets/img/khampha/newrelease/cungbacsau.png',
    artist: 'Mr.Siro',
    timeRelease: '3 ngày trước',
    isHasPrize: true,
    isPremium: false,
  },
  {
    name: 'Làm Bồ Anh Nhá',
    artwork: './assets/img/khampha/newrelease/lamboanhnha.png',
    artist: 'Phạm Đình Thái Ngân, Lăng LD',
    timeRelease: '4 ngày trước',
    isHasPrize: false,
    isPremium: false,
  },
  {
    name: 'Used To Be Young',
    artwork: './assets/img/khampha/newrelease/usedtobeyoung.png',
    artist: 'Miley Cyrus',
    timeRelease: '2 ngày trước',
    isHasPrize: false,
    isPremium: true,
  },
  {
    name: 'bản tình ca không trọn vẹn',
    artwork: './assets/img/khampha/newrelease/bantinhcakhongchonven.png',
    artist: 'Lê Ngọc Châu Anh, Andriez',
    timeRelease: '3 ngày trước',
    isHasPrize: false,
    isPremium: false,
  },
  {
    name: 'Thà Bỏ Lỡ',
    artwork: './assets/img/khampha/newrelease/thabolo.png',
    artist: 'Ngô Lan Hương',
    timeRelease: '5 ngày trước',
    isHasPrize: false,
    isPremium: false,
  },
];

const playlistData = {
  Chill: {
    title: 'Chill',
    playlists: [
      {
        img: '/assets/img/khampha/chill/imgChill1.png',
        title: 'Không ồn ào, không vội vàng, cùng thư giãn với âm nhạc ...',
      },
      {
        img: '/assets/img/khampha/chill/imgChill2.png',
        title: 'Lắng nghe những giai điệu nhạc Hoa lời Việt nhẹ nhàng như ...',
      },
      {
        img: '/assets/img/khampha/chill/imgChill3.png',
        title: 'Ở đây có những bản hit cực chill, vừa nghe vừa feel',
      },
      {
        img: '/assets/img/khampha/chill/imgChill4.png',
        title: 'Va vào những giai điệu thư giãn của V-Pop',
      },
      {
        img: '/assets/img/khampha/chill/imgChill5.png',
        title: 'Thả mình trong những giai điệu V-Pop nhẹ nhàng',
      },
    ],
  },
  Motchutyeudoi: {
    title: 'Một Chút Yêu Đời',
    playlists: [
      {
        img: '/assets/img/khampha/motchutyeudoi/1.png',
        title: 'Yêu là phải nói, giống như đói là phải ăn',
      },
      {
        img: '/assets/img/khampha/motchutyeudoi/2.png',
        title: 'Nhạc gì mà nghe xong dính cứng ngắt',
      },
      {
        img: '/assets/img/khampha/motchutyeudoi/3.png',
        title: 'Nhẹ nhàng chữa lành trái tim bằng giai điệu tích cực',
      },
      {
        img: '/assets/img/khampha/motchutyeudoi/4.png',
        title: `'Ưng quá chừng' với giai điệu V-Pop làm bạn vui tươi cả ngày`,
      },
      {
        img: '/assets/img/khampha/motchutyeudoi/5.png',
        title: 'Hạnh phúc trong tình yêu là được bên nhau mỗi ngày',
      },
    ],
  },
  RemicLaDanceLuon: {
    title: 'Remix Là Dance Luôn',
    playlists: [
      {
        img: '/assets/img/khampha/remixladanceluon/1.png',
        title: 'Nhật Phong, Châu Khải Phong, NB3 Hoài Bảo...',
      },
      {
        img: '/assets/img/khampha/remixladanceluon/2.png',
        title: 'Tăng Duy Tân, Hoàng Thùy Linh, Bích Phương...',
      },
      {
        img: '/assets/img/khampha/remixladanceluon/3.png',
        title: 'K-ICM, Touliver, Hoaprox...',
      },
      {
        img: '/assets/img/khampha/remixladanceluon/4.png',
        title: 'Hoàng Thùy Linh, Masew, Văn Mai Hương...',
      },
      {
        img: '/assets/img/khampha/remixladanceluon/5.png',
        title: 'Masew, K-ICM, Slimv...',
      },
    ],
  },
  Tamtrangtancham: {
    title: 'Tâm Trạng Tan Chậm',
    playlists: [
      {
        img: '/assets/img/khampha/tamtrangtancham/1.png',
        title: 'Chưa đi hết nửa đoạn đường, hứa thề chi để vấn vương...',
      },
      {
        img: '/assets/img/khampha/tamtrangtancham/2.png',
        title: 'Những khúc tình buồn ngày xưa qua tiếng hát ngày nay',
      },
      {
        img: '/assets/img/khampha/tamtrangtancham/3.png',
        title: 'Dù rằng đã hết lòng mà tình vẫn hóa hư không',
      },
      {
        img: '/assets/img/khampha/tamtrangtancham/4.png',
        title: 'Có những nỗi buồn không biết chia sẻ cùng ai...',
      },
      {
        img: '/assets/img/khampha/tamtrangtancham/5.png',
        title: 'Thập niên 2010 và những bản hit làm tan nát trái tim',
      },
    ],
  },
  Nghesithinhhanh: {
    title: 'Nghệ Sĩ Thịnh Hành',
    playlists: [
      {
        img: '/assets/img/khampha/nghesithinhhanh/1.png',
        title: 'Thả tâm trạng với những bản Hit của Đạt G',
      },
      {
        img: '/assets/img/khampha/nghesithinhhanh/2.png',
        title: `'Tình cũ' và những bản Hit gây thương nhớ của Khải Đăng`,
      },
      {
        img: '/assets/img/khampha/nghesithinhhanh/3.png',
        title: 'Những dòng flow của BigDaddy chạm đến trái tim bạn',
      },
      {
        img: '/assets/img/khampha/nghesithinhhanh/4.png',
        title: `Thuận theo 'ý trời' nghe nhạc Đông Nhi`,
      },
      {
        img: '/assets/img/khampha/nghesithinhhanh/5.png',
        title: `'Sau này chúng ta giàu' và nhiều Hit khác của Khắc Việt`,
      },
    ],
  },
};

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
