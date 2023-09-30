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
    name: 'Có Chắc Yêu Là Đây (Remix)',
    artwork: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/9/4/c/a/94ca60a9619bfba5cb98d3745e815bc0.jpg',
    artist: 'Sơn Tùng M-TP, BOMATELA',
    timeRelease: '2 ngày trước',
    isHasPrize: false,
    isPremium: false,
  },
  {
    name: 'Hẹn Gặp Em Ở Cuộc Đời Khác',
    artwork: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/3/8/a/3/38a3f39e4dd710ca7556f70e138d8432.jpg',
    artist: 'Nguyên.',
    timeRelease: '2 ngày trước',
    isHasPrize: false,
    isPremium: false,
  },
  {
    name: 'Vô Tri',
    artwork: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/3/1/8/7/31872e13302cfd59a37928f52003ffde.jpg',
    artist: 'HuyR',
    timeRelease: '3 ngày trước',
    isHasPrize: false,
    isPremium: false,
  },
  {
    name: 'Cuộc Tình Vá Víu',
    artwork: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/d/8/5/4/d8544832fec56eb50201da2d0a74fb3f.jpg',
    artist: 'Dee Trần',
    timeRelease: '2 ngày trước',
    isHasPrize: false,
    isPremium: false,
  },
  {
    name: '3D (feat. Jack Harlow)',
    artwork: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/2/2/6/0/2260c4961349da8e4534352836ed7099.jpg',
    artist: 'Jung Kook, Jack Harlow',
    timeRelease: '2 ngày trước',
    isHasPrize: false,
    isPremium: true,
  },
  {
    name: 'Đừng Khóc',
    artwork: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/1/7/2/5/1725eb414462d2b5806785f9701a3e19.jpg',
    artist: 'Chi Dân',
    timeRelease: '3 ngày trước',
    isHasPrize: true,
    isPremium: false,
  },
  {
    name: 'Lạc Lối',
    artwork: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/a/0/b/0/a0b0b149c36fe8ee068525fc55d66763.jpg',
    artist: 'Whee!',
    timeRelease: '2 ngày trước',
    isHasPrize: false,
    isPremium: false,
  },
  {
    name: 'Better Off (Alone, Pt. III)',
    artwork: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/f/9/4/3/f9436eb6a8ddb4fa7f93b106c3ad22c1.jpg',
    artist: 'Alan Walker, Dash Berlin, Vikkstar',
    timeRelease: '2 ngày trước',
    isHasPrize: false,
    isPremium: false,
  },
  {
    name: 'Cắt Đôi Nỗi Sầu',
    artwork: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/b/f/0/1/bf0182328238f2a252496a63e51f1f74.jpg',
    artist: 'Tăng Duy Tân, Drum7',
    timeRelease: '3 ngày trước',
    isHasPrize: false,
    isPremium: false,
  },
  {
    name: 'Rơi',
    artwork: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/a/e/e/9/aee90359803ab1322ffad4dc9d982e16.jpg',
    artist: 'Hoàng Thống',
    timeRelease: '2 ngày trước',
    isHasPrize: false,
    isPremium: false,
  },
  {
    name: 'Better Place (From...',
    artwork: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/4/e/3/5/4e357877e1e658e2ddf6fb41858ed020.jpg',
    artist: '*NSync, Justin Timberlake',
    timeRelease: '2 ngày trước',
    isHasPrize: false,
    isPremium: true,
  },
  {
    name: 'Điều Ước Giản Đơn',
    artwork: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/0/0/0/2/00024af241f5bda55749fe15606cd058.jpg',
    artist: 'Tăng Phúc, Nguyễn Hồng Thuận',
    timeRelease: '3 ngày trước',
    isHasPrize: false,
    isPremium: false,
  },
];

const playlistData = {
  Chill: {
    title: 'Chill',
    playlists: [
      {
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/2/4/5/3/24538985249cd4d3b324b4a4a09ad288.jpg',
        title: 'Nhạc Việt "lâu phai" và gây nghiện hoài hoài',
      },
      {
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/6/0/5/8/6058a7cec305e63abbf7f27819f0552e.jpg',
        title: 'Đắm chìm vào những bản Lofi cực chill',
      },
      {
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/3/3/8/3/338314b32165c5e44d6c7ec302d3fdfb.jpg',
        title: 'Thả mình cùng những giai điệu V-Pop nhẹ nhàng',
      },
      {
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/1/7/3/c/173ce5cfc42b83b9ebe59d4441fbae60.jpg',
        title: 'Không ồn ã, không vội vàng, cùng thư giãn với âm nhạc...',
      },
      {
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/e/a/9/4/ea943663fef1d2670d132180118dec6b.jpg',
        title: 'Một list nhạc Indie mang lại cảm giác bình yên cho bạn',
      },
    ],
  },
  Motchutyeudoi: {
    title: 'Nghe Là Yêu Đời',
    playlists: [
      {
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/8/9/a/9/89a98c8448ec29c596c8abdfa6e95f47.jpg',
        title: 'Nhạc gì mà nghe xong dính cứng ngắc',
      },
      {
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/2/9/f/f/29ff3e2baff070f8bc672ec6406c2dcb.jpg',
        title: 'Nghe các flex sư hệ rap thả những con flow cực chất',
      },
      {
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/b/1/3/5/b135e48463662bab9d9910316ad4b098.jpg',
        title: 'Nghe vào đảm bảo vui muốn xỉu',
      },
      {
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/c/c/3/d/cc3d330517162b124aab8f716aad427c.jpg',
        title: `Cậu và tớ cùng nhau yêu đời hơn nhá`,
      },
      {
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/a/7/2/e/a72e63b7602ab3fd88404c6717920e38.jpg',
        title: 'Ở đây có nhạc để edit ảnh giật giật cực choáy.',
      },
    ],
  },
  RemicLaDanceLuon: {
    title: 'Remix Là Dance Luôn',
    playlists: [
      {
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/8/c/e/9/8ce9abbbdb04cd95262082d923a0f7dd.jpg',
        title: 'K-ICM, Touliver, Hoaprox...',
      },
      {
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/9/e/8/c/9e8c67c23bace04d5e0e99b850ced883.jpg',
        title: 'Châu Khải Phong, Phan Duy Anh, Thương Võ...',
      },
      {
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/2/9/e/7/29e78741b838c9db1e97aa321d9a6ca6.jpg',
        title: 'Masew, K-ICM, SlimV...',
      },
      {
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/d/9/9/d/d99df5fa9d3284569db5aef1ee84e6df.jpg',
        title: 'Đông Nhi, Hoàng Thùy Linh, Chi Pu...',
      },
      {
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/7/d/1/e/7d1eaaea957e086487b5738503f44aa3.jpg',
        title: 'Tăng Duy Tân, Hoàng Thùy Linh, Bích Phương...',
      },
    ],
  },
  Tamtrangtancham: {
    title: 'Tâm Trạng Hơi Suy',
    playlists: [
      {
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/8/a/a/5/8aa5fd594f34cbefc188dc95df496c6e.jpg',
        title: 'Xin chôn giấu nỗi niềm vào những giai điệu acoustic sầu...',
      },
      {
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/f/2/7/5/f2759ca502759689d6b37a5e4e638722.jpg',
        title: 'Có những nỗi buồn không thể nói ra đành giấu sâu trong...',
      },
      {
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/1/e/e/2/1ee25e659e0be691309e19ba6f3b33c3.jpg',
        title: 'Cô đơn chẳng phải là thứ đáng sợ nhất trong đêm. Thứ đáng...',
      },
      {
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/9/0/a/a/90aaf76ec66bed90edc006c899415054.jpg',
        title: 'Thật đáng thương cho một kẻ lụy tình, đem chân thành...',
      },
      {
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/d/0/d/9/d0d9dc692c6c5b5299c7f5ca17a45776.jpg',
        title: 'Có những ngày, mình đã ngồi suy nghĩ rất lâu về những gì...',
      },
    ],
  },
  Nghesithinhhanh: {
    title: 'Nghệ Sĩ Thịnh Hành',
    playlists: [
      {
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/a/d/3/7/ad378b33b541c991c07b60fb562f5116.jpg',
        title: `Nghe liền những bản Hit 'xịn sò' của Tiên Tiên`,
      },
      {
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/0/d/3/5/0d35ef7adc0a2a604892c1029b991b39.jpg',
        title: `Ở đây có 'Đại minh tinh' và bộ sưu tập Hit của Văn Mai...`,
      },
      {
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/7/a/5/f/7a5f33517f9813b6a6313b231dba6d0e.jpg',
        title: `Cập nhật nhanh 'Nhờ em nhắn với người đó' và Hit của Tăng...`,
      },
      {
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/3/f/a/f/3faf9e320cc1a6cf42093ea107d5f0cb.jpg',
        title: `'Có đau thì đau một mình' và những bản Hit của Orange`,
      },
      {
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/8/8/e/6/88e6032dc03fdf283015b2da6c6ecf0c.jpg',
        title: `'Cắt đôi nỗi sầu' với Tăng Duy Tân và bộ sưu tập Hit nổi bật`,
      },
    ],
  },
};

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
