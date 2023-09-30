import styles from './PartnerSection.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function PartnerSection() {
  return (
    <div className={cx('wrapper')}>
      <h3 className={cx('title')}>ĐỐI TÁC ÂM NHẠC</h3>
      <div className={cx('content')}>
        <div>
          <img src="https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/sony.png" alt="img" />
        </div>
        <div>
          <img src="https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/genie.png" alt="img" />
        </div>
        <div>
          <img src="https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/FUGA.png" alt="img" />
        </div>
        <div>
          <img src="https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/believe.png" alt="img" />
        </div>
        <div>
          <img src="https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/yg.png" alt="img" />
        </div>
        <div>
          <img src="https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/beggers.png" alt="img" />
        </div>
        <div>
          <img src="https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/taihe.png" alt="img" />
        </div>
        <div>
          <img src="https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/orcahrd.png" alt="img" />
        </div>
        <div>
          <img src="https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/universal-1.png" alt="img" />
        </div>
        <div>
          <img src="https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/ingrooves.png" alt="img" />
        </div>
        <div>
          <img src="https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/route-note.png" alt="img" />
        </div>
        <div>
          <img src="https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/monstercat.png" alt="img" />
        </div>
        <div>
          <img src="https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/stone-music.png" alt="img" />
        </div>
        <div>
          <img src="https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/hikoon.png" alt="img" />
        </div>
        <div>
          <img src="https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/danal.png" alt="img" />
        </div>
        <div>
          <img src="https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/empire.png" alt="img" />
        </div>
      </div>
    </div>
  );
}

export default PartnerSection;
