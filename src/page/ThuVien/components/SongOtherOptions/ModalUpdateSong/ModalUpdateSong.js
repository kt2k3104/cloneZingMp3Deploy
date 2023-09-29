import { useForm } from 'react-hook-form';
import styles from './modalupdatesong.module.scss';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Img,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useToast,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { Select } from '@chakra-ui/react';

import { changePlaylistNavigatePath, getUser } from '~/page/Auth/UserSlice';
import { memo, useEffect } from 'react';
import { editSong } from '~/layouts/components/PlayerControls/ListenSlice';

const cx = classNames.bind(styles);

function ModalAddPlaylist({ isOpen, onClose, song }) {
  const { afterAddPlaylistNavigatePath, user } = useSelector((state) => state.user);
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
  const onSubmitUpdateSong = async (data) => {
    try {
      await dispatch(editSong({ songId: song.id, data: { name: data.songName } })).unwrap();
      await dispatch(getUser(user.id)).unwrap();
      reset();
      toast({
        position: 'bottom-left',
        render: () => (
          <Box color="white" p={5} bg="#34224f" borderRadius={'5px'} marginBottom={'90px'}>
            Cập nhật bài hát "{data.songName}" thành công !
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
        <ModalHeader sx={css.modalheader}>Chỉnh sửa </ModalHeader>

        <ModalCloseButton />
        <ModalBody p={'0'} display={'flex'} gap={'15px'}>
          <Img w={'130px'} h={'130px'} src={song.artwork} alt="img" />
          <form onSubmit={handleSubmit(onSubmitUpdateSong)} className={cx('form')}>
            <input
              type="text"
              name="songName"
              id="songName"
              {...register('songName', { required: true })}
              defaultValue={song.name}
            />
            <div className={cx('div')}>
              <input
                type="text"
                name="songArtist"
                id="songArtist"
                {...register('songArtist', { required: true })}
                defaultValue={song.artist}
              />
              <Select
                border={'1px solid hsla(0, 0%, 100%, 0.1)'}
                h={'30px'}
                p={'10px 0px'}
                fontSize={'12px'}
                _hover={{ outline: 'none' }}
                _
                placeholder="Khác"
              >
                <option value="option1">Việt Nam</option>
                <option value="option2">Âu Mỹ</option>
                <option value="option3">Hàn Quốc</option>
                <option value="option3">Nhật Bản</option>
                <option value="option3">Hoa Ngữ</option>
                <option value="option3">Hòa Tấu</option>
                <option value="option3">Khác</option>
              </Select>
            </div>
            <div className={cx('button')}>
              <div className={cx('btn', 'btnClose')} onClick={onClose}>
                ĐÓNG
              </div>
              <button
                type="submit"
                className={errors.playlist?.type === 'required' ? cx('no-select') : cx('btn')}
              >
                LƯU
              </button>
            </div>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default memo(ModalAddPlaylist);

const css = {
  modalcontent: {
    maxW: '680px',
    w: '680px',
    maxH: '207px',
    h: '207px',
    bgColor: '#34224f',
    borderRadius: '8px',
    p: '20px',
    mt: '30vh',
  },
  modalheader: {
    fontSize: '18px',
    fontWeight: '700',
    mb: '10px',
    p: '0',
  },
};
