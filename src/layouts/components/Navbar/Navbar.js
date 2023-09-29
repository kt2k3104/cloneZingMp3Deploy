import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faArrowRight,
  faBell,
  faClose,
  faGear,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Tippyy from '@tippyjs/react/headless';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDebounce } from 'use-debounce';
import axios from 'axios';

import customIcon from '../../../components/UI/Icons/Icons';
import SearchResult from './component/SearchResult';
import MenuSetting from './component/MenuSetting';
import UserOption from './component/UserOption';
import NotifyMenu from './component/NotifyMenu';

const cx = classNames.bind(styles);

function Navbar() {
  const [isFocus, setIsFocus] = useState(false);
  const { locationKey } = useSelector((state) => state.listen);
  const { isLogined, user } = useSelector((state) => state.user);
  const inputElement = useRef();
  const [countPage, setCountPage] = useState(0);
  const [keyword, setKeyword] = useState('');
  const [value] = useDebounce(keyword, 500);
  const [searchResults, setSearchResults] = useState(null);

  const [visible, setVisible] = useState(false);
  const show = () => setVisible(true);
  const hide = () => setVisible(false);
  const [visiblee, setVisiblee] = useState(false);
  const showw = () => setVisiblee(true);
  const hidee = () => setVisiblee(false);
  const [visibleee, setVisibleee] = useState(false);
  const showww = () => setVisibleee(true);
  const hideee = () => setVisibleee(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleInputBlur = (e) => {
    setIsFocus(false);
  };
  const handleInputFocus = (e) => {
    setIsFocus(true);
  };

  useEffect(() => {
    if (value.trim()) {
      console.log('search');
      const handleSearchSongs = async () => {
        const result = await axios.get(`http://localhost:9000/songs/search?keyword=${value}`);
        console.log(result);
        setSearchResults(result.data.result);
      };
      handleSearchSongs();
    } else {
      setSearchResults(null);
    }
  }, [value]);

  return (
    <header className={cx('header')}>
      <div className={cx('wrapper')}>
        <div className={cx('left')}>
          <button
            onClick={() => {
              if (location.pathname.includes('/playlist/')) {
                navigate('/mymusic/index');
              } else if (locationKey !== 'default') {
                setCountPage((prev) => prev + 1);
                navigate(-1);
              }
            }}
            className={cx('btn-back', locationKey !== 'default' ? 'btn-back-active' : '')}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button
            className={cx('btn-forward', countPage !== 0 ? 'btn-forward-active' : '')}
            onClick={() => {
              console.log(location.key);
              console.log(locationKey);

              setCountPage((prev) => {
                if (prev > 0) return prev - 1;
                else return prev;
              });
              if (countPage !== 0) navigate(1);
            }}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
          <form>
            <Tippyy
              interactive={true}
              visible={visibleee}
              onClickOutside={() => {
                hideee();
                setIsFocus(false);
              }}
              render={(attrs) => (
                <SearchResult
                  keyword={keyword}
                  value={value}
                  searchResults={searchResults}
                  setKeyword={setKeyword}
                  attrs={attrs}
                  hide={hideee}
                  setIsFocus={setIsFocus}
                />
              )}
            >
              <div
                onFocus={() => {
                  handleInputFocus();
                  setTimeout(() => {
                    showww();
                  });
                }}
                onBlur={() => {
                  if (!visibleee) handleInputBlur();
                }}
                className={cx(isFocus ? 'search-is-active' : 'searchh')}
              >
                <button className={cx('btn-search')}>
                  <FontAwesomeIcon icon={faSearch} />
                </button>
                <div className={cx('input-wrapper')}>
                  <input
                    onFocus={handleInputFocus}
                    onBlur={() => {
                      if (!visibleee) handleInputBlur();
                    }}
                    ref={inputElement}
                    type="text"
                    className={cx('input-placehoder')}
                    placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
                    value={keyword}
                    onChange={(e) => {
                      setKeyword(e.target.value);
                    }}
                  />
                  {isFocus && keyword && (
                    <button
                      onClick={() => {
                        setKeyword('');
                        setSearchResults(null);
                      }}
                    >
                      <FontAwesomeIcon icon={faClose} />
                    </button>
                  )}
                </div>
              </div>
            </Tippyy>
          </form>
        </div>
        <div className={cx('right')}>
          <div className={cx('download-desktop-app')}>
            <a
              className={cx('download-desktop-icon')}
              target="_blank"
              rel="noreferrer"
              href="https://zingmp3.vn/"
            >
              <customIcon.DownloadIcon />
              <span>Tải bản Windows</span>
            </a>
            <div></div>
          </div>
          <Tippyy interactive trigger="click" render={(attrs) => <MenuSetting {...attrs} />}>
            <div className={cx('setting-item')}>
              <Tippy content="Cài đặt">
                <button>
                  <FontAwesomeIcon icon={faGear} />
                </button>
              </Tippy>
            </div>
          </Tippyy>

          {isLogined && (
            <Tippyy
              interactive
              visible={visiblee}
              onClickOutside={hidee}
              offset={[-105, 10]}
              render={(attrs) => <NotifyMenu {...attrs} />}
            >
              <div className={cx('setting-item')}>
                <Tippy content="Thông báo">
                  <button onClick={visiblee ? hidee : showw}>
                    <FontAwesomeIcon icon={faBell} />
                  </button>
                </Tippy>
                <div className={cx('hihi')}></div>
              </div>
            </Tippyy>
          )}

          <Tippyy
            interactive
            visible={visible}
            onClickOutside={hide}
            render={(attrs) => (
              <div className={cx('user-setting-menu')} tabIndex="-1" {...attrs}>
                <UserOption hide={hide} />
              </div>
            )}
          >
            <div onClick={visible ? hide : show} className={cx('user-setting')}>
              {!isLogined && (
                <img
                  src="https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.9.71/static/media/user-default.3ff115bb.png"
                  alt="img"
                />
              )}
              {isLogined && user?.avatar !== null && <img src={user?.avatar} alt="img" />}
              {isLogined && user?.avatar === null && (
                <img src="/assets/img/no-image.png" alt="img" />
              )}
            </div>
          </Tippyy>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
