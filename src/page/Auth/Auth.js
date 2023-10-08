import styles from './Auth.module.scss';
import classNames from 'classnames/bind';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { handleInitLogin, handleLogin } from './UserSlice';
import { useNavigate } from 'react-router-dom';
import customIcon from '~/components/UI/Icons/Icons';
import { REACT_APP_API_URL } from '~/const';
import { Box, useToast } from '@chakra-ui/react';

const cx = classNames.bind(styles);

function Auth() {
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
    clearErrors,
  } = useForm();

  const toast = useToast();

  const onSubmitLogin = async (data) => {
    try {
      const response = await dispatch(
        handleLogin({ email: data.email, password: data.password }),
      ).unwrap();
      if (response) {
        navigate('/mymusic/index');
      }
    } catch (error) {
      console.log(error);
      if (error.message.includes('ER_EMAIL_NOTF')) {
        setError('ER_EMAIL_NOTF', {
          type: 'ER_EMAIL_NOTF',
        });
      }
      if (error.message.includes('ER_PASS_IN_COR')) {
        setError('ER_PASS_IN_COR', {
          type: 'saimatkhau',
        });
      }
    }
  };

  const onSubmitSignup = async (data) => {
    try {
      const response = await axios.post(`${REACT_APP_API_URL}auth/register`, {
        first_name: data.firstname,
        last_name: data.lastname,
        email: data.email,
        password: data.password,
        status: 0,
      });
      if (response.data.success) {
        setIsSignup(false);
      }
      reset();
      toast({
        position: 'top',
        render: () => (
          <Box color="white" p={5} bg="#4c7cff" borderRadius={'5px'} mt={'30px'}>
            Đăng ký thành công!
          </Box>
        ),
        duration: 1000,
      });
    } catch (error) {
      console.log(error);
      if (error.message.includes('ER_EMAIL_HAD_ACC')) {
        setError('ER_EMAIL_HAD_ACC', {
          type: 'emaildatontai',
        });
      }
    }
  };

  const onSubmitChangePassword = (data) => {
    if (data.confirmpassword !== data.password) {
      setError('UNDUPLICATE_PASSWORD', {
        type: 'unduplicatepassword',
      });
    }
    setIsForgotPassword(false);
  };

  const handleLoginWithGoogle = () => {
    let timer = null;
    const googleLoginURL = `${REACT_APP_API_URL}auth/google/login`;

    const newWindow = window.open(
      googleLoginURL,
      '_blank',
      'top=100,left=525,width=500,height=600',
    );

    if (newWindow) {
      timer = setInterval(() => {
        if (newWindow.closed) {
          dispatch(handleInitLogin());
          navigate('/mymusic/index');
          if (timer) clearInterval(timer);
        }
      }, 2000);
    }
  };

  return (
    <div className={cx('wrapper')}>
      {!isForgotPassword && !isSignup && (
        <form onSubmit={handleSubmit(onSubmitLogin)} className={cx('form')}>
          <h1>Đăng nhập</h1>
          <div className={cx('inner')}>
            <div className={cx('content')}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                {...register(
                  'email',
                  {
                    required: true,
                    pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$',
                  },
                  'ER_EMAIL_NOTF',
                )}
                onChange={() => {
                  if (errors.ER_EMAIL_NOTF) clearErrors('ER_EMAIL_NOTF');
                }}
              />
              {errors.email?.type === 'required' && <li>Vui lòng nhập email</li>}
              {errors.ER_EMAIL_NOTF?.type === 'ER_EMAIL_NOTF' && <li>Email không tồn tại</li>}

              <label htmlFor="name">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={password}
                {...register('password', { required: true, minLength: 6 }, 'ER_PASS_IN_COR')}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (errors.ER_PASS_IN_COR) clearErrors('ER_PASS_IN_COR');
                }}
              />
              {errors.password?.type === 'required' && <li>Vui lòng nhập password</li>}
              {errors.password?.type === 'minLength' && <li>Mật khẩu cần tối thiểu 6 ký tự</li>}
              {errors.ER_PASS_IN_COR?.type === 'saimatkhau' && <li>Sai mật khẩu</li>}

              <span
                onClick={() => {
                  setIsForgotPassword(true);
                }}
              >
                Quên mật khẩu ?
              </span>
              <button type="submit">Đăng nhập</button>
              <button
                type="button"
                onClick={() => {
                  setIsSignup(true);
                }}
              >
                Đăng ký
              </button>
            </div>
            <div onClick={handleLoginWithGoogle} className={cx('icon-gg')}>
              <customIcon.googleIcon />
              <span>Đăng nhập với Google</span>
            </div>
          </div>
        </form>
      )}
      {!isForgotPassword && isSignup && (
        <form onSubmit={handleSubmit(onSubmitSignup)} className={cx('form')}>
          <h1>Đăng ký</h1>
          <label htmlFor="name">First name</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="Your First name"
            {...register('firstname', { required: true })}
          />
          {errors.name?.type === 'required' && <li>Vui lòng nhập tên</li>}
          <label htmlFor="name">Last name</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Your Lastname"
            {...register('lastname', { required: true })}
          />
          {errors.name?.type === 'required' && <li>Vui lòng nhập tên</li>}

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            {...register(
              'email',
              {
                required: true,
                pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$',
              },
              'ER_EMAIL_HAD_ACC',
            )}
            onChange={() => {
              if (errors.ER_EMAIL_HAD_ACC) clearErrors('ER_EMAIL_HAD_ACC');
            }}
          />
          {errors.email?.type === 'required' && <li>Vui lòng nhập email</li>}
          {errors.ER_EMAIL_HAD_ACC?.type === 'emaildatontai' && <li>Email đã tồn tại</li>}

          <label htmlFor="name">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            {...register('password', { required: true, minLength: 6 })}
          />
          {errors.password?.type === 'required' && <li>Vui lòng nhập password</li>}
          {errors.password?.type === 'minLength' && <li>Mật khẩu cần tối thiểu 6 ký tự</li>}

          <button type="submit">Đăng ký</button>
          <span
            onClick={() => {
              setIsSignup(false);
            }}
          >
            Quay lại đăng nhập
          </span>
        </form>
      )}

      {isForgotPassword && (
        <form onSubmit={handleSubmit(onSubmitChangePassword)} className={cx('form')}>
          <h1>Quên mật khẩu</h1>

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            {...register('email', {
              required: true,
              pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$',
            })}
          />
          {errors.email?.type === 'required' && <li>Vui lòng nhập email</li>}

          <label htmlFor="password">New password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            {...register('password', { required: true, minLength: 6 })}
          />
          {errors.password?.type === 'required' && <li>Vui lòng nhập password</li>}
          {errors.password?.type === 'minLength' && <li>Mật khẩu cần tối thiểu 6 ký tự</li>}
          <label htmlFor="confirmpassword">Confirm password</label>
          <input
            type="password"
            name="confirmpassword"
            id="confirmpassword"
            placeholder="Confirm Password"
            {...register('confirmpassword', { required: true }, 'UNDUPLICATE_PASSWORD')}
            onChange={() => {
              if (errors.UNDUPLICATE_PASSWORD) clearErrors('UNDUPLICATE_PASSWORD');
            }}
          />
          {errors.password?.type === 'required' && <li>Vui lòng nhập lại password</li>}
          {errors.password?.type === 'unduplicatepassword' && (
            <li>Mật khẩu nhập lại không chính xác</li>
          )}

          <button type="submit">Xác nhận</button>
          <span
            onClick={() => {
              setIsForgotPassword(false);
            }}
          >
            Quay lại đăng nhập
          </span>
        </form>
      )}
    </div>
  );
}

export default Auth;
