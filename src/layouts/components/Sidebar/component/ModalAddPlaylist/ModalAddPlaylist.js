import { useForm } from 'react-hook-form';
import styles from './ModalAddPlaylist.module.scss';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Switch,
  useToast,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import {
  changePlaylistNavigatePath,
  handleAddPlaylist,
  handleUpdatePlaylist,
} from '~/page/Auth/UserSlice';
import { memo, useEffect } from 'react';

const cx = classNames.bind(styles);

function ModalAddPlaylist({ isOpen, onClose, playlist }) {
  const { afterAddPlaylistNavigatePath } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    if (afterAddPlaylistNavigatePath) {
      navigate(afterAddPlaylistNavigatePath);
      dispatch(changePlaylistNavigatePath(''));
    }
  }, [navigate, afterAddPlaylistNavigatePath, dispatch]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmitAddPlaylist = async (data) => {
    try {
      await dispatch(handleAddPlaylist({ name: data.playlist })).unwrap();
      // setTimeout(() => {
      //   navigate(`/playlist`, { state: { playlistId: playlists[playlists.length - 1].id } });
      // }, 500);
      reset();
      toast({
        position: 'bottom-left',
        render: () => (
          <Box color="white" p={5} bg="#34224f" borderRadius={'5px'} marginBottom={'90px'}>
            Tạo playlist "{data.playlist}" thành công !
          </Box>
        ),
        duration: 1000,
      });
      onClose();
    } catch (error) {
      console.log(error);
    }
  };
  const onSubmitUpdatePlaylist = async (data) => {
    try {
      await dispatch(
        handleUpdatePlaylist({ data: { name: data.playlist }, playlistId: playlist.id }),
      ).unwrap();
      reset();
      toast({
        position: 'bottom-left',
        render: () => (
          <Box color="white" p={5} bg="#34224f" borderRadius={'5px'} marginBottom={'90px'}>
            Sửa playlist "{data.playlist}" thành công !
          </Box>
        ),
        duration: 1000,
      });
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent sx={css.modalcontent}>
        {playlist ? (
          <ModalHeader sx={css.modalheader}>Chỉnh sửa playlist</ModalHeader>
        ) : (
          <ModalHeader sx={css.modalheader}>Tạo playlist mới</ModalHeader>
        )}
        <ModalCloseButton />
        <ModalBody>
          <form
            onSubmit={handleSubmit(playlist ? onSubmitUpdatePlaylist : onSubmitAddPlaylist)}
            className={cx('form')}
          >
            <input
              type="text"
              name="playlist"
              id="playlist"
              placeholder="Nhập tên playlist"
              autoFocus
              {...register('playlist', { required: true })}
              defaultValue={playlist ? playlist.name : ''}
            />
            <div className={cx('option')}>
              <div>
                <h3 className={cx('title')}>Công khai</h3>
                <h3 className={cx('subtitle')}>Mọi người có thể thấy playlist này</h3>
              </div>
              <Switch colorScheme="purple" defaultChecked />
            </div>
            <div className={cx('option')}>
              <div>
                <h3 className={cx('title')}>Phát ngẫu nhiên</h3>
                <h3 className={cx('subtitle')}>Luôn phát ngẫu nhiên tất cả bài hát</h3>
              </div>
              <Switch colorScheme="purple" defaultChecked />
            </div>
            <button
              type="submit"
              className={errors.playlist?.type === 'required' ? cx('no-select') : ''}
            >
              {!playlist ? 'TẠO MỚI' : 'LƯU'}
            </button>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default memo(ModalAddPlaylist);

const css = {
  modalcontent: {
    maxW: '330px',
    w: '330px',
    maxH: '300vh',
    h: '300px',
    bgColor: '#34224f',
    borderRadius: '8px',
    p: '10px',
    mt: '30vh',
  },
  modalheader: {
    fontSize: '18px',
    fontWeight: '700',
    textAlign: 'center',
  },
};
