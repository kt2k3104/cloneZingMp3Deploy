import styles from './UserOption.module.scss';
import classNames from 'classnames/bind';

import customIcon from '~/components/UI/Icons/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan, faSignOut, faUpload } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, setLogout } from '~/page/Auth/UserSlice';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Box,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { faEdit, faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import Tippy from '@tippyjs/react';
import { useState } from 'react';
import { Spinner, useToast } from '@chakra-ui/react';

import { getSongs, handleUploadSong } from '../../../PlayerControls/ListenSlice';
import requestApi from '~/helpers/api';
import EditName from '../EditName/EditName';

const cx = classNames.bind(styles);

function UserOption({ hide }) {
  const { isLogined, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isEditName, setIsEditName] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingAvt, setIsLoadingAvt] = useState(false);
  const toast = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmitUploadSong = async (data) => {
    try {
      setIsLoading(true);
      console.log('cbi tai nhac');

      const formDataUrl = new FormData();
      formDataUrl.append('song', data.fileSong[0]);
      const { data: resDataSong } = await requestApi('songs/upload-audio', 'POST', formDataUrl);

      console.log('tai nhac xong, cbi tai anh');

      const formDataArtwork = new FormData();
      formDataArtwork.append('artwork', data.fileImg[0]);
      const { data: resDataArtwork } = await requestApi(
        '/songs/upload-art',
        'POST',
        formDataArtwork,
      );

      console.log('xong');

      await dispatch(
        handleUploadSong({
          name: data.name,
          artwork: resDataArtwork.result,
          artist: data.artist,
          url: resDataSong.result.url,
          duration: Math.round(resDataSong.result.duration),
        }),
      ).unwrap();
      reset();
      setIsLoading(false);
      toast({
        position: 'bottom-left',
        render: () => (
          <Box color="white" p={5} bg="#34224f" borderRadius={'5px'} marginBottom={'90px'}>
            Thêm bài hát thành công !
          </Box>
        ),
      });
      dispatch(getSongs());
      dispatch(getUser(user.id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditAvt = async (e) => {
    try {
      const formDataAvt = new FormData();
      formDataAvt.append('avatar', e.target.files[0]);
      setIsLoadingAvt(true);
      const response = await requestApi('users/upload-avt', 'POST', formDataAvt);
      if (response.data.success) await dispatch(getUser(user.id)).unwrap();
      setIsLoadingAvt(false);
    } catch (error) {
      console.log(error);
      setIsLoadingAvt(false);
    }
  };

  return (
    <ul className={cx('menu-list')}>
      {isLogined && (
        <div>
          <li className={cx('user-setting-account')}>
            <div className={cx('info')}>
              <div className={cx('avt-frame')}>
                {!isLogined && !isLoadingAvt && (
                  <img
                    src="https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.9.71/static/media/user-default.3ff115bb.png"
                    alt="img"
                  />
                )}
                {isLogined && !isLoadingAvt && user?.avatar !== null && (
                  <img src={user?.avatar} alt="img" />
                )}
                {isLogined && !isLoadingAvt && user?.avatar === null && (
                  <img src="/assets/img/no-image.png" alt="img" />
                )}

                {isLoadingAvt && <img src="/assets/img/giphy.gif" alt="img" />}
                {user.account_type === 'local' && !isLoadingAvt && (
                  <div className={cx('avt_hover')}>
                    <form>
                      <label htmlFor="avatar">
                        <FontAwesomeIcon className={cx('btn_edit')} icon={faEdit} />
                      </label>
                      <input
                        type="file"
                        name="avatar"
                        id="avatar"
                        style={{ display: 'none' }}
                        accept=".jpg, .png"
                        onChange={handleEditAvt}
                      />
                    </form>
                  </div>
                )}
              </div>
              <div className={cx('name')}>
                {!isEditName && (
                  <div className={cx('name_title')}>
                    <p>{user.last_name + ' ' + user.first_name}</p>
                    <Tippy placement="left" content="Sửa tên">
                      <i
                        onClick={() => {
                          setIsEditName(true);
                        }}
                      >
                        <FontAwesomeIcon icon={faPenToSquare} />
                      </i>
                    </Tippy>
                  </div>
                )}
                {isEditName && (
                  <EditName
                    first_name={user.first_name}
                    last_name={user.last_name}
                    setIsEditName={setIsEditName}
                  />
                )}

                {!isEditName && <customIcon.BasicIcon />}
              </div>
            </div>
            <a
              className={cx('account-management-link')}
              target="_blank"
              rel="noreferrer"
              href="https://zingmp3.vn/vip?utm_source=desktop&utm_campaign=VIP&utm_medium=%s"
            >
              Nâng cấp tài khoản
            </a>
          </li>
          <div className={cx('user-setting-subscription')}>
            <h3>Nâng cấp gói</h3>
            <div className={cx('package-container', 'plus')}>
              <h2>
                Zing MP3 <customIcon.PlusIcon />
              </h2>
              <h3>Chỉ từ 11,000 đ/tháng</h3>
              <p>Trải nghiệm nghe nhạc với chất lượng cao nhất, không quảng cáo</p>
              <a
                target="blank"
                href="https://zingmp3.vn/vip/upgrade/plus?utm_source=desktop&utm_campaign=VIP&utm_medium=menu-header"
              >
                Tìm hiểu thêm
              </a>
            </div>
            <div className={cx('package-container', 'premium')}>
              <h2>
                Zing MP3 <customIcon.PremiumIcon />
              </h2>
              <h3>Chỉ từ 37,000 đ/tháng</h3>
              <p>Toàn bộ đặc quyền Plus cùng kho nhạc độc quyền</p>
              <a
                target="blank"
                href="https://zingmp3.vn/vip/upgrade/premium?utm_source=desktop&utm_campaign=VIP&utm_medium=menu-header"
              >
                Tìm hiểu thêm
              </a>
            </div>
          </div>
          <div className={cx('line-separator')}></div>
          <div className={cx('user-setting-individual')}>
            <h3>Cá nhân</h3>
            <li>
              <FontAwesomeIcon icon={faBan} />
              <span>Danh sách chặn</span>
            </li>
            <li
              onClick={() => {
                hide();
                onOpen();
              }}
            >
              <FontAwesomeIcon icon={faUpload} />
              <span>Tải lên</span>
            </li>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent
                p={'20px 20px 40px'}
                maxWidth={'700px'}
                bgColor={'#34224f'}
                boxShadow={'0 0 5px 0 rgba(0,0,0,.2)'}
                borderRadius={'15px'}
                mt={'12vh'}
              >
                <ModalHeader fontSize={'20px'}>Tải nhạc lên</ModalHeader>
                <ModalCloseButton mt={'30px'} mr={'30px'} fontSize={'10px'} />
                <ModalBody w={'100%'}>
                  {!isLoading && (
                    <form onSubmit={handleSubmit(onSubmitUploadSong)} className={cx('form')}>
                      <label htmlFor="fileSong">File nhạc</label>

                      <input
                        type="file"
                        name="fileSong"
                        className={cx('fileSong_input')}
                        id="fileSong"
                        placeholder="URL"
                        {...register('fileSong', { required: true })}
                      />
                      {errors.fileSong?.type === 'required' && <li>Vui lòng chọn file nhạc</li>}
                      <label htmlFor="fileImg">Hình ảnh</label>
                      <input
                        type="file"
                        name="fileImg"
                        className={cx('fileImg_input')}
                        id="fileImg"
                        placeholder="URL"
                        {...register('fileImg', { required: true })}
                      />
                      {errors.fileImg?.type === 'required' && <li>Vui lòng chọn file ảnh</li>}
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Tên bài hát"
                        {...register('name', { required: true })}
                      />
                      {errors.name?.type === 'required' && <li>Vui lòng nhập tên bài hát</li>}
                      <label htmlFor="name">Artist</label>
                      <input
                        type="text"
                        name="artist"
                        id="artist"
                        placeholder="Tên ca sĩ"
                        {...register('artist', { required: true })}
                      />
                      {errors.artist?.type === 'required' && <li>Vui lòng nhập tên ca sĩ</li>}
                      <button type="submit">Tải lên</button>
                    </form>
                  )}
                  {isLoading && (
                    <Spinner
                      thickness="4px"
                      speed="0.65s"
                      emptyColor="gray.200"
                      color="blue.500"
                      size="xl"
                    />
                  )}
                </ModalBody>
              </ModalContent>
            </Modal>
          </div>
          <div className={cx('line-separator')}></div>
          <li
            onClick={() => {
              dispatch(setLogout());
              navigate('/');
              hide();
            }}
            className={cx('logout')}
          >
            <FontAwesomeIcon icon={faSignOut} />
            <span>Đăng xuất</span>
          </li>
        </div>
      )}
      {!isLogined && (
        <div>
          <NavLink to={'/auth'}>
            <button
              onClick={() => {
                hide();
              }}
              className={cx('btn-login')}
            >
              Đăng nhập
            </button>
          </NavLink>
          <div className={cx('user-setting-subscription')}>
            <h3>Đăng ký gói</h3>
            <div className={cx('package-container', 'plus')}>
              <h2>
                Zing MP3 <customIcon.PlusIcon />
              </h2>
              <h3>Chỉ từ 11,000 đ/tháng</h3>
              <p>Trải nghiệm nghe nhạc với chất lượng cao nhất, không quảng cáo</p>
              <a
                target="blank"
                href="https://zingmp3.vn/vip/upgrade/plus?utm_source=desktop&utm_campaign=VIP&utm_medium=menu-header"
              >
                Tìm hiểu thêm
              </a>
            </div>
            <div className={cx('package-container', 'premium')}>
              <h2>
                Zing MP3 <customIcon.PremiumIcon />
              </h2>
              <h3>Chỉ từ 37,000 đ/tháng</h3>
              <p>Toàn bộ đặc quyền Plus cùng kho nhạc độc quyền</p>
              <a
                target="blank"
                href="https://zingmp3.vn/vip/upgrade/premium?utm_source=desktop&utm_campaign=VIP&utm_medium=menu-header"
              >
                Tìm hiểu thêm
              </a>
            </div>
          </div>
        </div>
      )}
    </ul>
  );
}

export default UserOption;
