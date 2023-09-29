import styles from './PlaylistOptions.module.scss';
import classNames from 'classnames/bind';
import {
  faAngleRight,
  faCode,
  faDownload,
  faFileCirclePlus,
  faLink,
  faShare,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import { useDispatch } from 'react-redux';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
  Button,
  useToast,
  Box,
} from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { Spinner } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import { handleDeletePlaylist } from '~/page/Auth/UserSlice';
import ModalAddPlaylist from '../ModalAddPlaylist';

const cx = classNames.bind(styles);

function PlaylistOptions({ attrs, playlist, hide, x, y }) {
  const dispatch = useDispatch();
  const {
    isOpen: isOpenModalDelete,
    onOpen: onOpenModalDelete,
    onClose: onCloseModalDelete,
  } = useDisclosure();
  const {
    isOpen: isOpenModalUpdate,
    onOpen: onOpenModalUpdate,
    onClose: onCloseModalUpdate,
  } = useDisclosure();
  const [onDelete, setOnDelete] = useState(false);
  const cancelRef = useRef();
  const toast = useToast();
  const navigate = useNavigate();

  return (
    <ul
      onClick={(e) => {
        e.stopPropagation();
      }}
      className={cx('playlist-option')}
      tabIndex="-1"
      {...attrs}
    >
      <li>
        <FontAwesomeIcon icon={faFileCirclePlus} />
        <span>Thêm vào danh sách phát</span>
      </li>
      <li>
        <FontAwesomeIcon icon={faDownload} />
        <span>Tải xuống</span>
      </li>
      <li>
        <FontAwesomeIcon icon={faLink} />
        <span>Sao chép link</span>
      </li>
      <Tippy
        interactive
        placement="right"
        offset={x && y ? [x, y] : [-113, -230]}
        render={(attrs) => (
          <ul className={cx('share-option')} tabIndex="-1" {...attrs}>
            <li>
              <img
                className={cx('icon-fb')}
                src="https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.9.57/static/media/facebook.d62c237b.svg"
                alt="fb"
              />
              <span>Facebook</span>
            </li>
            <li>
              <img
                className={cx('icon-zalo')}
                src="https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.9.57/static/media/zalo.d94c16f4.svg"
                alt="zalo"
              />
              <span>Zalo</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faCode} />
              <span>Mã nhúng</span>
            </li>
          </ul>
        )}
      >
        <li>
          <FontAwesomeIcon icon={faShare} />
          <span>Chia sẻ</span>
          <FontAwesomeIcon className={cx('icon-angleright')} icon={faAngleRight} />
        </li>
      </Tippy>
      <li
        onClick={() => {
          onOpenModalUpdate();
          hide();
        }}
      >
        <FontAwesomeIcon icon={faPenToSquare} />
        <span>Chỉnh sửa playlist</span>
      </li>
      <ModalAddPlaylist
        playlist={playlist}
        isOpen={isOpenModalUpdate}
        onClose={onCloseModalUpdate}
      />
      <li
        onClick={(e) => {
          onOpenModalDelete();
          hide();
        }}
      >
        <FontAwesomeIcon icon={faTrashAlt} />
        <span>Xóa playlist</span>
      </li>
      <AlertDialog
        isOpen={isOpenModalDelete}
        leastDestructiveRef={cancelRef}
        onClose={onCloseModalDelete}
      >
        <AlertDialogOverlay>
          <AlertDialogContent sx={css.AlertDialogContent}>
            <AlertDialogHeader sx={css.AlertDialogHeader}>Xóa Bài Hát</AlertDialogHeader>

            {!onDelete && (
              <>
                <AlertDialogBody>
                  Playlist của bạn sẽ bị xóa khỏi hệ thống, bạn có muốn xóa ?
                </AlertDialogBody>

                <AlertDialogFooter>
                  <Button onClick={onCloseModalDelete} ref={cancelRef} sx={css.button1}>
                    KHÔNG
                  </Button>
                  <Button
                    colorScheme="red"
                    sx={css.button2}
                    onClick={async () => {
                      setOnDelete(true);
                      dispatch(handleDeletePlaylist(playlist.id));
                      setOnDelete(false);
                      onCloseModalDelete();
                      toast({
                        duration: 1000,
                        position: 'bottom-left',
                        render: () => <Box sx={css.box}>Xóa playlist thành công !</Box>,
                      });
                      navigate('/mymusic/library/playlist');
                    }}
                  >
                    XÓA
                  </Button>
                </AlertDialogFooter>
              </>
            )}
            {onDelete && (
              <AlertDialogBody>
                <Spinner />
              </AlertDialogBody>
            )}
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </ul>
  );
}

export default PlaylistOptions;

const css = {
  AlertDialogContent: {
    maxW: '540px',
    w: '540px',
    maxH: '33vh',
    h: '141.8px',
    bgColor: '#34224f',
    borderRadius: '8px',
    p: '10px',
    mt: '33vh',
  },
  AlertDialogHeader: {
    w: '500px',
    h: '27px',
    fontSize: '18px',
    mb: '5',
    fontWeight: 'bold',
  },
  button1: {
    w: '75.4px',
    h: '28.8px',
    bgColor: 'hsla(0,0%,100%,0.1)',
    borderRadius: '999px',
    fontSize: '12px',
    color: '#fff',
    fontWeight: '400',
    borderColor: 'hsla(0,0%,100%,0.1)',
    _hover: { bgColor: 'tranparent', opacity: 0.9 },
  },
  button2: {
    w: '56px',
    h: '28.8px',
    bgColor: '#9b4de0',
    borderRadius: '999px',
    _hover: { bgColor: 'tranparent', opacity: 0.9 },
    ml: 3,
    fontSize: '12px',
    fontWeight: '400',
    marginLeft: '15px',
  },
  box: {
    color: 'white',
    p: '5',
    bg: '#34224f',
    borderRadius: '5px',
    marginBottom: '90px',
  },
};
