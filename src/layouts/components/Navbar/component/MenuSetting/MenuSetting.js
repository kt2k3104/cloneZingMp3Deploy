import styles from './MenuSetting.module.scss';
import classNames from 'classnames/bind';
import Tippyy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAd,
  faChevronRight,
  faCircleInfo,
  faFileLines,
  faPhone,
  faShieldAlt,
} from '@fortawesome/free-solid-svg-icons';

import customIcon from '~/components/UI/Icons/Icons';

const cx = classNames.bind(styles);

function MenuSetting(attrs) {
  return (
    <div className={cx('menu-setting')} tabIndex="-1" {...attrs}>
      <ul className={cx('menu-list')}>
        <Tippyy
          delay={[300, 300]}
          interactive
          placement="left"
          render={(attrs) => (
            <ul className={cx('tpn-menu')} tabIndex="-1" {...attrs}>
              <div className={cx('song-transition-setting')}>
                <h3>
                  Chuyển bài{' '}
                  <i className={cx('icon-plus')}>
                    <customIcon.PlusIcon />
                  </i>
                </h3>
                <li className={cx('crossfade-setting')}>
                  <button>Chuyển bài mượt mà (Crossfade) </button>
                  <div className={cx('duration-bar')}>
                    <div></div>
                  </div>
                  <p className={cx('time-crossfade')}>8 giây</p>
                </li>
                <li className={cx('gapless-setting')}>
                  <button>Bỏ qua khoảng lặng (Gapless) </button>
                  <h3>Loại bỏ đoạn im lặng khi chuyển bài hát</h3>
                </li>
              </div>
              <div className={cx('ditmemay')}></div>
              <li className={cx('quality-setting')}>
                <h3>Chất lượng nhạc</h3>
                <div className={cx('buttons')}>
                  <button>
                    <span>Thường (128 kbps)</span>
                    <i>
                      <customIcon.RadioIcon />
                    </i>
                  </button>
                  <button>
                    <span>Cao (320 kbps)</span>
                    <i className={cx('hehe')}>
                      <customIcon.RadioIcon />
                    </i>
                  </button>
                  <button>
                    <span>
                      Lossless{' '}
                      <i className={cx('icon-plus')}>
                        <customIcon.PlusIcon />
                      </i>
                    </span>
                    <i>
                      <customIcon.RadioIcon />
                    </i>
                  </button>
                </div>
              </li>
              <div className={cx('line-separator')}></div>
              <li className={cx('more-setting')}>
                <h3 className={cx('featured-title')}>Phát nhạc</h3>
                <button className={cx('last-btn')}>Luôn phát nhạc toàn màn hình</button>
              </li>
            </ul>
          )}
        >
          <li className={cx('header-dropdown-setting')}>
            <button tabIndex={0}>
              <i className={cx('icon-play')}>
                <customIcon.PlayIcon />
              </i>
              <span>Trình phát nhạc</span>
              <FontAwesomeIcon className={cx('icon-right')} icon={faChevronRight} />
            </button>
          </li>
        </Tippyy>
        <Tippyy
          delay={[300, 300]}
          interactive
          placement="left"
          render={(attrs) => (
            <ul className={cx('gd-menu')} tabIndex="-1" {...attrs}>
              <li className={cx('theme-setting')}>
                <div>
                  <div className={cx('top-theme')}>
                    <span>Chủ đề</span>
                    <FontAwesomeIcon icon={faChevronRight} />
                  </div>
                  <div className={cx('content-theme')}>
                    <figure className="image is-48x48">
                      <img
                        src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/purple.jpg"
                        alt="theme"
                      />
                    </figure>
                    <h3>Tím</h3>
                  </div>
                </div>
              </li>
              <div className={cx('line-separator')}></div>
              <li className={cx('theme-footer')}>
                <button>Hiệu ứng chuyển động</button>
              </li>
            </ul>
          )}
        >
          <li className={cx('header-dropdown-setting')}>
            <button tabIndex={0}>
              <i>
                <customIcon.IcreamIcon />
              </i>
              <span>Giao diện</span>
              <FontAwesomeIcon className={cx('icon-right')} icon={faChevronRight} />
            </button>
          </li>
        </Tippyy>
      </ul>
      <div className={cx('line-separator')}></div>
      <footer className={cx('footer')}>
        <ul className={cx('menu-list-footer')}>
          <li>
            <a href="hihi">
              <FontAwesomeIcon className={cx('icon-footer-left')} icon={faCircleInfo} />
              <div>Giới thiệu</div>
            </a>
          </li>
          <li>
            <a href="https://mp3.zing.vn/huong-dan/contact">
              <FontAwesomeIcon className={cx('icon-footer-left')} icon={faPhone} />
              <div>Liên hệ</div>
              <i className={cx('icon-footer-right')}>
                <customIcon.GrowIcon />
              </i>
            </a>
          </li>
          <li>
            <a href="https://adtima.vn/lien-he?utm_source=zingmp3&utm_medium=footer">
              <FontAwesomeIcon className={cx('icon-footer-left')} icon={faAd} />
              <div>Quảng cáo</div>
              <i className={cx('icon-footer-right')}>
                <customIcon.GrowIcon />
              </i>
            </a>
          </li>
          <li>
            <a href="https://mp3.zing.vn/tnc">
              <FontAwesomeIcon className={cx('icon-footer-left')} icon={faFileLines} />
              <div>Thỏa Thuận Sử dụng</div>
              <i className={cx('icon-footer-right')}>
                <customIcon.GrowIcon />
              </i>
            </a>
          </li>
          <li>
            <a href="https://zingmp3.vn/privacy.html">
              <FontAwesomeIcon className={cx('icon-footer-left')} icon={faShieldAlt} />
              <div>Chính sách bảo mật</div>
              <i className={cx('icon-footer-right')}>
                <customIcon.GrowIcon />
              </i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default MenuSetting;
