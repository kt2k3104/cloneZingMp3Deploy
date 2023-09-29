import { memo, useEffect, useState } from 'react';
import styles from './EditName.module.scss';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { getUser, handleEditName } from '~/page/Auth/UserSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function EditName({ setIsEditName, first_name, last_name }) {
  const [errInputHo, setErrInputHo] = useState(false);
  const [errInputTen, setErrInputTen] = useState(false);

  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();
  useEffect(() => {
    reset();

    setValue('first_name', first_name);
    setValue('last_name', last_name);
  }, [reset, setValue, first_name, last_name]);

  const onSubmitEditName = async (data) => {
    console.log(data);
    try {
      await dispatch(
        handleEditName({
          body: {
            first_name: data.first_name,
            last_name: data.last_name,
          },
          userId: user.id,
        }),
      ).unwrap();
      reset();
      dispatch(getUser(user.id));
      setIsEditName(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmitEditName)} className={cx('form_edit_name')}>
      <div className={cx('edit_name')}>
        <div>
          <label htmlFor="email">Họ: </label>
          <input
            type="text"
            name="last_name"
            className={cx(errInputHo ? 'err_input' : '')}
            id="last_name"
            placeholder="Your last name"
            {...register('last_name', {
              required: true,
            })}
            onBlur={() => {
              if (errors.last_name?.type === 'required') setErrInputHo(true);
              else setErrInputHo(false);
            }}
          />
        </div>
        <div>
          <label htmlFor="name">Tên: </label>
          <input
            type="text"
            name="first_name"
            className={cx(errInputTen ? 'err_input' : '')}
            id="first_name"
            placeholder="Your first name"
            {...register('first_name', { required: true })}
            onBlur={() => {
              if (errors.first_name?.type === 'required') setErrInputTen(true);
              else setErrInputTen(false);
            }}
          />
        </div>
      </div>
      <button type="submit">Lưu</button>

      <div
        onClick={() => {
          setIsEditName(false);
        }}
        className={cx('btn_close')}
      >
        <FontAwesomeIcon icon={faClose} />
      </div>
    </form>
  );
}

export default memo(EditName);
