import config from '~/config';

// Layouts
import { OAuthLayout } from '~/layouts';

// Pages
import KhamPha from '~/page/KhamPha';
import Zingchart from '~/page/zingchart';
import Radio from '~/page/Radio';
import ThuVien from '~/page/ThuVien';
import BXHNhacMoi from '~/page/BXHNhacMoi';
import ChuDeVaTheLoai from '~/page/ChuDe&TheLoai';
import Top100 from '~/page/Top100';
import NgheGanDay from '~/page/NgheGanDay';
import Playlist from '~/page/Playlist';
import Playlists from '~/page/Playlists';
import Timkiem from '~/page/Timkiem';
import Auth from '~/page/Auth';
import OAuth from '~/page/OAuth';

// Public routes
const publicRoutes = [
  { path: config.routes.home, component: KhamPha },
  { path: config.routes.zingchart, component: Zingchart },
  { path: config.routes.radio, component: Radio },
  { path: config.routes.thuvien, component: ThuVien },
  { path: config.routes.bxhnhacmoi, component: BXHNhacMoi },
  { path: config.routes.chudevatheloai, component: ChuDeVaTheLoai },
  { path: config.routes.top100, component: Top100 },
  { path: config.routes.ngheganday, component: NgheGanDay },
  { path: config.routes.playlists, component: Playlists },
  { path: config.routes.playlist, component: Playlist },
  { path: config.routes.timkiem, component: Timkiem },
  { path: config.routes.auth, component: Auth },
  { path: config.routes.oauth, component: OAuth, layout: OAuthLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
