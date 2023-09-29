import styles from './PartnerSection.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function PartnerSection() {
  return (
    <div className={cx('wrapper')}>
      <h3 className={cx('title')}>ĐỐI TÁC ÂM NHẠC</h3>
      <div className={cx('content')}>
        <img src="/assets/img/khampha/doitacamnhac/1.png" alt="img" />
        <img src="/assets/img/khampha/doitacamnhac/2.png" alt="img" />
        <img src="/assets/img/khampha/doitacamnhac/3.png" alt="img" />
        <img src="/assets/img/khampha/doitacamnhac/4.png" alt="img" />
        <img src="/assets/img/khampha/doitacamnhac/5.png" alt="img" />
        <img src="/assets/img/khampha/doitacamnhac/6.png" alt="img" />
        <img src="/assets/img/khampha/doitacamnhac/7.png" alt="img" />
        <img src="/assets/img/khampha/doitacamnhac/8.png" alt="img" />
        <img src="/assets/img/khampha/doitacamnhac/9.png" alt="img" />
        <img src="/assets/img/khampha/doitacamnhac/10.png" alt="img" />
        <img src="/assets/img/khampha/doitacamnhac/11.png" alt="img" />
        <img src="/assets/img/khampha/doitacamnhac/12.png" alt="img" />
        <img src="/assets/img/khampha/doitacamnhac/13.png" alt="img" />
        <img src="/assets/img/khampha/doitacamnhac/14.png" alt="img" />
        <img src="/assets/img/khampha/doitacamnhac/15.png" alt="img" />
        <img src="/assets/img/khampha/doitacamnhac/16.png" alt="img" />
      </div>
    </div>
  );
}

export default PartnerSection;
