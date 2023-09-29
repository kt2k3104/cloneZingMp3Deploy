import styles from './LivestreamSection.module.scss';
import classNames from 'classnames/bind';
import RadioItem from './RadioItem/RadioItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function LivestreamSection({ data, noheader }) {
  return (
    <div className={cx('wrapper')}>
      <h3 className={cx('title', noheader ? 'noheader' : '')}>
        Radio Nổi Bật
        <span>
          TẤT CẢ <FontAwesomeIcon icon={faChevronRight} />
        </span>
      </h3>
      <div className={cx('content')}>
        {data?.map((item, index) => {
          return <RadioItem item={item} key={index} index={index} />;
        })}
      </div>
    </div>
  );
}

export default LivestreamSection;
