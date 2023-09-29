import Tippy from '@tippyjs/react';
import Tippyy from '@tippyjs/react/headless';
import styles from './PlaylistItem.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

import PlaylistOptions from '../PlaylistOptions';
import { useDispatch, useSelector } from 'react-redux';
import { changePlaylistNavigatePath } from '~/page/Auth/UserSlice';

const cx = classNames.bind(styles);

function PlaylistItem({ playlist, children, scroll }) {
  const { afterAddPlaylistNavigatePath } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  // const show = () => setIsVisible(true);
  const hide = () => setIsVisible(false);
  const handleShowPlaylistOption = (e) => {
    setIsVisible((isVisible) => !isVisible);
  };
  useEffect(() => {
    if (afterAddPlaylistNavigatePath) {
      navigate(afterAddPlaylistNavigatePath);
      dispatch(changePlaylistNavigatePath(''));
    }
  }, [navigate, afterAddPlaylistNavigatePath, dispatch]);

  useEffect(() => {
    if (isVisible) {
      hide();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scroll]);

  return (
    <li
      onClick={() => {
        dispatch(changePlaylistNavigatePath(`/playlist/${playlist.id}`));
      }}
      className={cx('playlist-item')}
    >
      <span>{children}</span>
      <Tippyy
        interactive
        placement="right"
        visible={isVisible}
        onClickOutside={hide}
        offset={[-130, 0]}
        render={(attrs) => <PlaylistOptions hide={hide} playlist={playlist} attrs={attrs} />}
      >
        <Tippy content={'Khác'}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleShowPlaylistOption();
            }}
          >
            <FontAwesomeIcon icon={faEllipsis} />
          </button>
        </Tippy>
      </Tippyy>
    </li>
  );
}

export default PlaylistItem;
