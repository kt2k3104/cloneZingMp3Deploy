import { HStack } from '@chakra-ui/react';
import styles from './top100.module.scss';
import classNames from 'classnames/bind';
import customIcon from '~/components/UI/Icons/Icons';
import PlaylistSection from './components/playlistSection/PlaylistSection';

const cx = classNames.bind(styles);

function Top100() {
  return (
    <div className={cx('wrapper')}>
      <HStack mb={'55px'} justifyContent={'center'}>
        <customIcon.Top100Banner />
      </HStack>
      <PlaylistSection data={playlistData.noibat} />
      <PlaylistSection data={playlistData.nhacvietnam} />
      <PlaylistSection data={playlistData.nhacchaua} />
      <PlaylistSection data={playlistData.nhacaumy} />
      <PlaylistSection data={playlistData.nhachoatau} />
    </div>
  );
}

export default Top100;

const playlistData = {
  noibat: {
    title: 'Nổi Bật',
    playlists: [
      {
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/d/d/9/c/dd9c7ff99fdd1d19cb4010e3bb327bf8.jpg',
        title: 'Top 100 Bài Hát Nhạc Trẻ Hay...',
        subtitle: 'MONO, Jack-J97, Phát Huy T4...',
      },
      {
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/d/c/9/3/dc93131661063ebb86e66883a0a31503.jpg',
        title: 'Top 100 Pop Âu Mỹ Hay Nhất',
        subtitle: 'Adele, Miley Cyrus, Olivia, Rodrigo...',
      },
      {
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/c/a/b/6/cab65e28a76f71d816e60825273d56e9.jpg',
        title: 'Top 100 Nhạc Hàn Quốc Hay...',
        subtitle: 'Jung Kook, JISOO, NewJeans...',
      },
      {
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/1/6/0/7/16074373ed00c600a08c497837519c92.jpg',
        title: 'Top 100 Nhạc Rap Việt Nam...',
        subtitle: 'Hiếu Thứ Hai, Pháo, B Ray...',
      },
      {
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/4/0/a/a/40aac032ac1e897a0541eb69b0a34b68.jpg',
        title: 'Top 100 Nhạc...',
        subtitle: 'Alan Walker, K-391, Emelie Hollow...',
      },
    ],
  },
  nhacvietnam: {
    title: 'Nhạc Việt Nam',
    playlists: [
      {
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/1/c/7/8/1c78127972cab75af38c8f00c53c6004.jpg',
        title: 'Top 100 Nhạc EDM Việt Hay...',
        subtitle: 'Masew, Pháo, CM1X...',
      },
      {
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/2/d/b/8/2db8bb60d73afe9636216fbb55b93fea.jpg',
        title: 'Top 100 Nhạc V-Pop Hay Nhất',
        subtitle: 'Văn Mai Hương, Phan Duy Anh, Thành Đạt...',
      },
      {
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/5/a/d/6/5ad60aa024b28614f38a279023c54a2a.jpg',
        title: 'Top 100 Nhạc Phim Việt Nam...',
        subtitle: 'Phan Mạnh Quỳnh, Lâm Bảo Ngọc, Khải Đăng...',
      },
      {
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/6/3/d/6/63d66cba99e32af4630120850c19bd53.jpg',
        title: 'Top 100 Nhạc Trịnh Hay Nhất',
        subtitle: 'Hùng Cường, Lưu Ánh Loan, Việt Hòa...',
      },
      {
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/9/1/b/1/91b1bb8b5419bf72f7fcc899626f7ec4.jpg',
        title: 'Top 100 Cải Lương Hay Nhất',
        subtitle: 'Cẩm Loan, Thanh Tú Vote For Five, Vy Thúy Hằng...',
      },
      {
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/d/5/8/8/d588becc28ad769d07f6bec6cd4ba2e0.jpg',
        title: 'Top 100 Nhạc Không Lời Việt...',
        subtitle: 'Vũ Đăng Quốc Việt, Peto, Phương Thùy...',
      },
      {
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/6/e/8/36e831358246203cbc056e4a8f4daa6e.jpg',
        title: 'Top 100 Nhạc Thiếu Nhi Hay...',
        subtitle: 'Ngọc Khánh Chi, Bé Thanh Ngân, Chân...',
      },
      {
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/8/0/8/6/8086cd6c56e5d1dc94c6fe054bc641ad.jpg',
        title: 'Top 100 Nhạc Quê Hương...',
        subtitle: 'Dương Hồng Loan, Hà Vân, Phi Nhung...',
      },
      {
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/f/2/6/4/f26467e87075a96bf974a8c49450bad5.jpg',
        title: 'Top 100 Nhạc Cách Mạng',
        subtitle: 'Trường Kha, Quang Hà, Tình Ca Việt...',
      },
      {
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/5/6/0/b/560b0755f9a7bcbaffa37ac758ae2776.jpg',
        title: 'Top 100 Nhạc Dance Việt...',
        subtitle: 'CUKAK, Phát Hồ, DINHLONG...',
      },
      {
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/1/6/0/7/16074373ed00c600a08c497837519c92.jpg',
        title: 'Top 100 Nhạc Rap Việt Nam...',
        subtitle: 'HIEUTHUHAI, Pháo, B Ray...',
      },
      {
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/6/9/a/d/69adc20d10b93758ae077afc03608e02.jpg',
        title: 'Top 100 Nhạc Rock Việt Nam...',
        subtitle: '7UPPERCUTS, The Cassette, ĐÁ SỐ TỚI...',
      },
      {
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/1/3/c/4/13c4e8fa862946ac84f98237ea30c576.jpg',
        title: 'Top 100 Nhạc Trữ Tình Hay...',
        subtitle: 'Như Quỳnh, Mạnh Quỳnh, Lưu Ánh Loan...',
      },
      {
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/d/d/9/c/dd9c7ff99fdd1d19cb4010e3bb327bf8.jpg',
        title: 'Top 100 Nhạc Trẻ Hay...',
        subtitle: 'MONO, Jack-J97, Phát Huy T4...',
      },
    ],
  },
  nhacchaua: {
    title: 'Nhạc Châu Á',
    playlists: [
      {
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/1/0/2/b/102b88eaa17035b6c1247910d24a0054.jpg',
        title: 'Top 100 Nhạc Phim Hoa Ngữ...',
        subtitle: 'Trình Tiêu / 程潇, Xu Kai, Angela Zhang...',
      },
      {
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/1/d/1/9/1d19047de6252c181c11970ca8a91a86.jpg',
        title: 'Top 100 Nhạc Phim Hàn Quốc...',
        subtitle: 'Jo Jung Suk, Gaho, DaviChi...',
      },
      {
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/8/d/8/2/8d8245973d9a7e009928ef150000c8aa.jpg',
        title: 'Top 100 Nhạc Hoa Hay Nhất',
        subtitle: 'Mộng Nhiên / 梦然, Danh Quyết, Tỉnh Lung / 井朧...',
      },
      {
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/a/2/0/2/a202beeb7558f2e67f1bb7cf6514975c.jpg',
        title: 'Top 100 Nhạc Nhật Bản Hay...',
        subtitle: 'Kenshi Yonezu, YOASOBI, FLOW...',
      },
      {
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/c/a/b/6/cab65e28a76f71d816e60825273d56e9.jpg',
        title: 'Top 100 Nhạc Hàn Quốc Hay...',
        subtitle: 'Jung Kook, JISOO, NewJeans...',
      },
    ],
  },
  nhacaumy: {
    title: 'Nhạc Âu Mỹ',
    playlists: [
      {
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/d/6/0/3d60491e7407321dbce823a2e8588b92.jpg',
        title: 'Top 100 Nhạc Audiophile Âu...',
        subtitle: `Bobby Vinton, Herman's Hermits, Matt Monro...`,
      },
      {
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/4/8/d/5/48d556485a84f1100b561623075538b8.jpg',
        title: 'Top 100 Nhạc Folk Âu Mỹ Hay...',
        subtitle: `Lydia Cole, The Paper Kites, Aoife O'Donovan...`,
      },
      {
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/f/7/1/4/f714adb9de227923806c7076b99dd6c0.jpg',
        title: 'Top 100 Nhạc Blue/Jazz Âu...',
        subtitle: 'Eartha Kitt, Pablo Cepeda, Lynn Blessing...',
      },
      {
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/f/a/5/9/fa59f41bb360d16b5089f5d26a7a761c.jpg',
        title: 'Top 100 Nhạc...',
        subtitle: 'Alan Walker, K-391, Emelie Hollow...',
      },
      {
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/5/3/c/9/53c9af558231a416cfac50e8c6e29d04.jpg',
        title: 'Top 100 Nhạc Indie Âu Mỹ...',
        subtitle: 'Au/Ra, Luke Hemmings, Declan McKenna...',
      },
      {
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/4/a/3/5/4a352cf9e92b9cc794c5d9cc8b35fa30.jpg',
        title: 'Top 100 Nhạc Christian &...',
        subtitle: 'Rhett Walker, Pentatonix, Justin Bieber...',
      },
      {
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/a/b/3/8/ab389ff054099f722894413871b08644.jpg',
        title: 'Top 100 Nhạc Phim Âu Mỹ...',
        subtitle: 'Lionel Richie, Ariana Grande, Low Roar...',
      },
      {
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/7/4/1/0/741036fd1d05b8eba68423fa4f1c32db.jpg',
        title: 'Top 100 Nhạc R&B Âu Mỹ Hay...',
        subtitle: 'SZA, The Weeknd, Doja Cat...',
      },
      {
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/4/0/a/a/40aac032ac1e897a0541eb69b0a34b68.jpg',
        title: 'Top 100 Nhạc...',
        subtitle: 'Alan Walker, K-391, Emelie Hollow...',
      },
      {
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/c/9/5/f/c95f003407295b1f41afe47598454a8f.jpg',
        title: 'Top 100 Nhạc Country Âu Mỹ...',
        subtitle: 'Taylor Swift, MitChell Tenpenny, Walker Hayes...',
      },
      {
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/7/3/5/d/735d5728b6953d863b5f1ad74c354b1b.jpg',
        title: 'Top 100 Nhạc Rap/Hip Hop...',
        subtitle: 'Post Malone, 24KGoldn, Lil Nas X...',
      },
      {
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/1/b/3/3/1b3302fe84ae4a7536b5d2b34df1cf95.jpg',
        title: 'Top 100 Nhạc Rock Âu Mỹ...',
        subtitle: 'Simple Plan, Foo Fighters, The Script...',
      },
      {
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/d/c/9/3/dc93131661063ebb86e66883a0a31503.jpg',
        title: 'Top 100 Pop Âu Mỹ Hay Nhất',
        subtitle: 'Adele, Mikey Cyrus, Olivia Rodrigo...',
      },
    ],
  },
  nhachoatau: {
    title: 'Nhạc Hòa Tấu',
    playlists: [
      {
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/8/a/7/1/8a71492d5462e5e483bbfd0583b1cd79.jpg',
        title: 'Top 100 Nhạc Hòa Tấu Nhạc...',
        subtitle: 'Relax Lab, Igor Krutoy, Toshiro Masuda',
      },
      {
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/0/b/e/a/0bea9640db8658c10c84942f29e154fa.jpg',
        title: 'Top 100 Hòa Tấu New Age /...',
        subtitle: 'Louie Ocampo, Bandari, Richard Clayderman...',
      },
      {
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/c/d/a/c/cdac8327fb8587f45498475d4a4d9181.jpg',
        title: 'Top 100 Nhạc Hòa Tấu Nhạc...',
        subtitle: 'Đinh Quang Minh, Đông Hòa, Kenny G...',
      },
      {
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/1/5/1/6/15162a468d83af00be73a34ef264dc68.jpg',
        title: 'Top 100 Nhạc Hòa Tấu Nhạc...',
        subtitle: 'David Darling, The Piano Guys, Yo-Yo Ma...',
      },
      {
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/a/3/1/a/a31a173df19d1c24b8552aaeb6276b1e.jpg',
        title: 'Top 100 Nhạc Hòa Tấu Nhạc...',
        subtitle: 'Hiền Lê, Yanni, Jmi...',
      },
      {
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/9/4/a/1/94a126893b5df438653bf3120bde4431.jpg',
        title: 'Top 100 Nhạc Hòa Tấu Nhạc...',
        subtitle: 'Đinh Quang Minh, Đông Hòa, Francis Goya...',
      },
      {
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/f/5/a/6/f5a65ea8930721c78c50756bdcfb496f.jpg',
        title: 'Top 100 Nhạc Hòa Tấu Nhạc...',
        subtitle: 'Vũ Đặng Quốc Việt, Relax Lab, Yiruma...',
      },
      {
        img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/9/2/4/6/9246709f7064753b77869a8792a99c1e.jpg',
        title: 'Top 100 Nhạc Hòa Tấu Cổ...',
        subtitle: 'Contempo-Divo, 한규원, Hawa...',
      },
    ],
  },
};
