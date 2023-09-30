import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './SongOtherOptions.module.scss';
import classNames from 'classnames/bind';
import {
  faBan,
  faBroadcastTower,
  faChevronRight,
  faCode,
  faDownload,
  faLink,
  faListOl,
  faPencil,
  faPlusCircle,
  faShare,
} from '@fortawesome/free-solid-svg-icons';
import { faHandPointRight, faListAlt, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { useDispatch, useSelector } from 'react-redux';
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

import { deleteSong, getSongs } from '~/layouts/components/PlayerControls/ListenSlice';
import { getUser } from '~/page/Auth/UserSlice';
import OptionAddToPlaylist from './OptionAddToPlaylist/OptionAddToPlaylist';
import ModalUpdateSong from './ModalUpdateSong/ModalUpdateSong';
import customIcon from '~/components/UI/Icons/Icons';

const cx = classNames.bind(styles);

function SongOtherOptions({ attrs, song, hide, type }) {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [onDelete, setOnDelete] = useState(false);
  const {
    isOpen: isOpenModalDelete,
    onOpen: onOpenModalDelete,
    onClose: onCloseModaDelete,
  } = useDisclosure();
  const {
    isOpen: isOpenModalUpdate,
    onOpen: onOpenModalUpdate,
    onClose: onCloseModaUpdate,
  } = useDisclosure();
  const cancelRef = useRef();
  const toast = useToast();

  return (
    <div className={cx('song_other_option')} tabIndex="-1" {...attrs}>
      <div className={cx('song-info')}>
        <div className={cx('song-thumb')}>
          <img src={song.artwork} alt="img" />
        </div>
        <div className={cx('card-info')}>
          <span>{song.name}</span>
          <h3>{song.artist}</h3>
        </div>
      </div>
      <div className={cx('list_btn')}>
        <li>
          <FontAwesomeIcon icon={faDownload} />
          <span>Tải xuống</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faListOl} />
          <span>Lời bài hát</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faBan} />
          <span>Chặn</span>
        </li>
      </div>
      {type === 'UPLOAD_SONG' || type === 'FAVORITE_ITEM' ? (
        <>
          <li>
            <i>
              <FontAwesomeIcon icon={faListAlt} />
            </i>
            Thêm vào danh sách phát
          </li>
          <li>
            <i>
              <FontAwesomeIcon icon={faHandPointRight} />
            </i>
            Phát tiếp theo
          </li>
        </>
      ) : (
        <></>
      )}
      <li>
        <i>
          <FontAwesomeIcon icon={faBroadcastTower} />
        </i>
        Phát nội dung tương tự
      </li>
      <Tippy
        interactive
        placement="left"
        trigger="mouseenter"
        offset={[-40, -10]}
        delay={[0, 300]}
        render={(attrs) => <OptionAddToPlaylist attrs={attrs} song={song} hide={hide} />}
      >
        <li>
          <i>
            <FontAwesomeIcon icon={faPlusCircle} />
          </i>
          Thêm vào playlist <FontAwesomeIcon icon={faChevronRight} />
        </li>
      </Tippy>
      {type === 'UPLOAD_SONG' && (
        <>
          <li
            onClick={() => {
              onOpenModalUpdate();
              hide();
            }}
          >
            <i>
              <FontAwesomeIcon icon={faPencil} />
            </i>
            Chỉnh sửa
          </li>
          <ModalUpdateSong song={song} isOpen={isOpenModalUpdate} onClose={onCloseModaUpdate} />
          <li
            onClick={() => {
              onOpenModalDelete();
              hide();
            }}
          >
            <i>
              <FontAwesomeIcon icon={faTrashAlt} />
            </i>
            Xóa
          </li>
        </>
      )}
      {type === 'FAVORITE_ITEM' && (
        <>
          <li>
            <i>
              <FontAwesomeIcon icon={faLink} />
            </i>
            Sao chép link
          </li>
          <Tippy
            interactive
            placement="left"
            trigger="mouseenter"
            offset={[-110, 220]}
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
              <i>
                <FontAwesomeIcon icon={faShare} />
              </i>
              Chia sẻ <FontAwesomeIcon icon={faChevronRight} />
            </li>
          </Tippy>
        </>
      )}
      {type === 'QUEUE_SONG' && (
        <>
          <li>
            <i>
              <customIcon.IconKaraoke />
            </i>
            Phát cùng lời bài hát
          </li>
          <li>
            <i>
              <FontAwesomeIcon icon={faLink} />
            </i>
            Sao chép link
          </li>
          <Tippy
            interactive
            placement="left"
            trigger="mouseenter"
            offset={[-110, 220]}
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
              <i>
                <FontAwesomeIcon icon={faShare} />
              </i>
              Chia sẻ <FontAwesomeIcon icon={faChevronRight} />
            </li>
          </Tippy>
          <li onClick={() => {}}>
            <i>
              <FontAwesomeIcon icon={faTrashAlt} />
            </i>
            Xóa
          </li>
        </>
      )}
      <AlertDialog
        isOpen={isOpenModalDelete}
        leastDestructiveRef={cancelRef}
        onClose={onCloseModaDelete}
      >
        <AlertDialogOverlay>
          <AlertDialogContent sx={css.AlertDialogContent}>
            <AlertDialogHeader w={'500px'} h={'27px'} fontSize={'18px'} mb={5} fontWeight="bold">
              Xóa Bài Hát
            </AlertDialogHeader>

            {!onDelete && (
              <>
                <AlertDialogBody>
                  Bài hát của bạn sẽ bị xóa khỏi hệ thống, bạn có muốn xóa ?
                </AlertDialogBody>

                <AlertDialogFooter>
                  <Button ref={cancelRef} onClick={onCloseModaDelete} sx={css.button1}>
                    KHÔNG
                  </Button>
                  <Button
                    colorScheme="red"
                    sx={css.button2}
                    onClick={async () => {
                      setOnDelete(true);
                      await dispatch(deleteSong(song.id)).unwrap();
                      setOnDelete(false);
                      onCloseModaDelete();
                      toast({
                        position: 'bottom-left',
                        render: () => <Box sx={css.box}>Xóa bài hát thành công !</Box>,
                      });
                      dispatch(getUser(user.id));
                      dispatch(getSongs());
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
      {type === 'UPLOAD_SONG' && <p>Tải lên bởi {user.first_name + ' ' + user.last_name}</p>}
    </div>
  );
}

export default SongOtherOptions;

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
