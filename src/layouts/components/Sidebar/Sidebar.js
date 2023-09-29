import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useDisclosure } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import SidebarMain from './component/SidebarMain';
import SidebarOptions from './component/SidebarOptions';
import ModalAddPlaylist from './component/ModalAddPlaylist';
import config from '~/config';

const cx = classNames.bind(styles);

function Sidebar() {
  const { isLogined } = useSelector((state) => state.user);
  const [isScrollTop, setIsScrollTop] = useState(false);
  const [scroll, setScroll] = useState(0);
  const navigate = useNavigate();

  const handleScroll = (e) => {
    setScroll(e.target.scrollTop);
    if (scroll > 0) setIsScrollTop(true);
    else setIsScrollTop(false);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <aside className={cx('wrapper')}>
      <Link to={config.routes.home} className={cx('logo')}>
        <div className={cx('votri')}>
          <button className={cx('btn-logo')}>
            <div className={cx('zmp3-logo')}></div>
          </button>
        </div>
      </Link>
      <div className={cx('main')}>
        <SidebarMain />
      </div>
      <div className={cx('divide')}></div>
      <div onScroll={handleScroll} className={cx('option', isScrollTop ? 'is-mark' : '')}>
        <SidebarOptions scroll={scroll} isScrollTop={isScrollTop} />
      </div>
      <div
        onClick={() => {
          if (isLogined) {
            onOpen();
          } else {
            navigate('/auth');
          }
        }}
        className={cx('add-new-playlist')}
      >
        <FontAwesomeIcon icon={faPlus} />
        <span className={cx('title')}>Tạo playlist mới</span>
      </div>
      <ModalAddPlaylist isOpen={isOpen} onClose={onClose} />
    </aside>
  );
}

export default Sidebar;
