import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import Listen from '../components/PlayerControls';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { setLocationKey } from '../components/PlayerControls/ListenSlice';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(setLocationKey(location.key));
  }, [dispatch, location]);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <Sidebar />
        <div className={cx('container')}>
          <Navbar />
          <div className={cx('content')}>{children}</div>
        </div>
      </div>
      <div className={cx('listen')}>
        <Listen />
      </div>
    </div>
  );
}

export default DefaultLayout;
