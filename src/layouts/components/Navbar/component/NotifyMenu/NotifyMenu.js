import axios from 'axios';
import styles from './NotifyMenu.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { initSocket } from '~/socket';
import { useSelector } from 'react-redux';
import Highlighter from 'react-highlight-words';

const socket = initSocket();

const cx = classNames.bind(styles);

function NotifyMenu(attrs) {
  const { isLogined } = useSelector((state) => state.user);
  const [listNotify, setListNotify] = useState([]);
  useEffect(() => {
    const handleSetNotify = (data) => {
      setListNotify((prev) => {
        return [data, ...prev];
      });
    };
    const handleUnlike = (data) => {
      setListNotify((prev) => {
        prev.shift();
        return [...prev];
      });
    };
    socket.on('like', handleSetNotify);
    socket.on('unlike', handleUnlike);

    return () => {
      socket.off('like', handleSetNotify);
      socket.off('unlike', handleUnlike);
    };
  }, []);

  useEffect(() => {
    if (isLogined) {
      axios
        .get('http://localhost:9000/notifications', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          },
        })
        .then((res) => {
          setListNotify(res.data.result);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isLogined]);

  const convertTime = (created_at) => {
    const createdAtDate = new Date(created_at);
    const currentTime = new Date();
    const timeDifference = currentTime - createdAtDate - 7 * 60 * 60 * 1000;
    const secondsDifference = Math.floor(timeDifference / 1000);
    const minutesDifference = Math.floor(secondsDifference / 60);
    const hoursDifference = Math.floor(minutesDifference / 60);
    const daysDifference = Math.floor(hoursDifference / 24);

    if (secondsDifference < 60) return `${secondsDifference} giây trước`;
    if (minutesDifference < 60) return `${minutesDifference} phút trước`;
    if (hoursDifference < 24) return `${hoursDifference} giờ trước`;
    if (daysDifference >= 1) return `${daysDifference} ngày trước`;
  };

  return (
    <div className={cx('noti-menu')} tabIndex="-1" {...attrs}>
      <h1>Thông báo</h1>
      {listNotify?.length === 0 && <h3>Không có thông báo</h3>}
      {listNotify?.map((item, index) => {
        return (
          <div key={index} className={cx('item_noti')}>
            <Highlighter
              highlightStyle={{
                fontWeight: 'bold',
                color: '#dadada',
                backgroundColor: 'transparent',
              }}
              searchWords={[
                item.content.split('đã thêm bài')[0],
                item.content.split('đã thêm bài')[1].split('vào danh sách yêu thích')[0],
              ]}
              autoEscape={true}
              textToHighlight={item.content}
            />
            <span className={cx('time')}>{convertTime(item.created_at)}</span>
          </div>
        );
      })}
    </div>
  );
}

export default NotifyMenu;
