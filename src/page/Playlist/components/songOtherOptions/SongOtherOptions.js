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
  faPlusCircle,
  faShare,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFileAudio,
  faHandPointRight,
  faListAlt,
  faTrashAlt,
} from '@fortawesome/free-regular-svg-icons';
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

import { handleRemoveSongToPlaylist } from '~/page/Auth/UserSlice';
import OptionAddToPlaylist from './OptionAddToPlaylist/OptionAddToPlaylist';

const cx = classNames.bind(styles);

function SongOtherOptions({ attrs, song, hide, playlistId }) {
  const dispatch = useDispatch();
  const [onDelete, setOnDelete] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
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
      <li>
        <i>
          <FontAwesomeIcon icon={faBroadcastTower} />
        </i>
        Phát nội dung tương tự
      </li>
      <li>
        <i>
          <FontAwesomeIcon icon={faFileAudio} />
        </i>
        Cài đặt nhạc chờ
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
      <li
        onClick={() => {
          onOpen();
          hide();
        }}
      >
        <i>
          <FontAwesomeIcon icon={faTrashAlt} />
        </i>
        Xóa khỏi playlist này
      </li>
      <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
        <AlertDialogOverlay>
          <AlertDialogContent sx={css.AlertDialogContent}>
            <AlertDialogHeader w={'500px'} h={'27px'} fontSize={'18px'} mb={5} fontWeight="bold">
              Xóa Bài Hát
            </AlertDialogHeader>

            {!onDelete && (
              <>
                <AlertDialogBody>
                  Bài hát của bạn sẽ bị xóa khỏi playlist này, bạn có muốn xóa ?
                </AlertDialogBody>

                <AlertDialogFooter>
                  <Button ref={cancelRef} onClick={onClose} sx={css.button1}>
                    KHÔNG
                  </Button>
                  <Button
                    colorScheme="red"
                    sx={css.button2}
                    onClick={async () => {
                      setOnDelete(true);
                      await dispatch(
                        handleRemoveSongToPlaylist({
                          playlistId: `${playlistId}`,
                          songId: `${song.id}`,
                        }),
                      ).unwrap();
                      setOnDelete(false);

                      onClose();
                      toast({
                        position: 'bottom-left',
                        render: () => (
                          <Box
                            color="white"
                            p={5}
                            bg="#34224f"
                            borderRadius={'5px'}
                            marginBottom={'90px'}
                          >
                            Xóa bài hát khỏi playlist thành công !
                          </Box>
                        ),
                      });
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
    ml: 3,
    fontSize: '12px',
    fontWeight: '400',
    marginLeft: '15px',
    w: '56px',
    h: '28.8px',
    bgColor: '#9b4de0',
    borderRadius: '999px',
    _hover: { bgColor: 'tranparent', opacity: 0.9 },
  },
};
