import styles from './radioSchedule.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function RadioSchedule() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('left')}>
        <div className={cx('header')}>Kênh</div>
        <div className={cx('body')}>
          <div className={cx('card')}>
            <img
              src="https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/8/3/0/e/830e49ef302bbe4fdfb04c9e26d42fbd.jpg"
              alt="img"
            />
          </div>
          <div className={cx('card')}>
            <img
              src="https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/6/8/0/3/6803b42e5444830b57a02d3f4d427301.jpg"
              alt="img"
            />
          </div>
        </div>
      </div>
      <div className={cx('content')}>
        <div className={cx('media')}>
          <img
            src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/2/b/7/9/2b790c51ba537f96f6d96a2ecbf04821.jpg"
            alt="img"
          />
          <div className={cx('media-content')}>
            <h3 className={cx('title')}>V-POP CỰC SUNG</h3>
            <h3 className={cx('subtitle')}>21:00 - 00:00</h3>
          </div>
        </div>
        <div className={cx('media')}>
          <img
            src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/b/a/d/1/bad1c64348821766253e18efd41c79dd.jpg"
            alt="img"
          />
          <div className={cx('media-content')}>
            <h3 className={cx('title')}>Nửa Kia Ngoại Quốc</h3>
            <h3 className={cx('subtitle')}>21:01 - 21:55</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RadioSchedule;
