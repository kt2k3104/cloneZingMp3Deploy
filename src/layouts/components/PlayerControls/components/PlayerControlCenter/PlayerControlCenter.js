import styles from './PlayerControlCenter.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBackwardStep,
  faForwardStep,
  faRepeat,
  faShuffle,
} from '@fortawesome/free-solid-svg-icons';
import { faCirclePause, faCirclePlay } from '@fortawesome/free-regular-svg-icons';
import { Slider, SliderTrack, SliderFilledTrack, SliderThumb } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';

import {
  nextSong,
  noRepeat,
  pauseSong,
  playSong,
  prevSong,
  randomOff,
  randomOn,
  repeatAll,
  repeatOne,
} from '../../ListenSlice';
import { memo } from 'react';

const cx = classNames.bind(styles);

function PlayerControlCenter({
  audioRef,
  progress,
  duration,
  setDuration,
  setProgress,
  setIsChange,
}) {
  const dispatch = useDispatch();
  const { isRepeat, isRandom, isPlaying } = useSelector((state) => state.listen);

  const handleOnChange = function (value) {
    if (!duration) {
      setDuration(audioRef.current.duration);
    }
    const currentTime = (value * duration) / 100;
    setProgress(currentTime);
  };

  const handleOnChangeStart = function (value) {
    setIsChange(true);
  };

  const handleOnChangeEnd = function (value) {
    const currentTime = (value * duration) / 100;
    audioRef.current.currentTime = currentTime;
    setIsChange(false);
  };

  const convertTime = (time) => {
    if (!time) return '00:00';
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time - minutes * 60);
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    return `${minutes}:${seconds}`;
  };

  return (
    <div className={cx('center')}>
      <div className={cx('actions')}>
        {isRandom && (
          <button
            onClick={() => {
              dispatch(randomOff());
            }}
            className={cx('action-btn')}
          >
            <FontAwesomeIcon className={cx('random-on')} icon={faShuffle} />
          </button>
        )}
        {!isRandom && (
          <button
            onClick={() => {
              dispatch(randomOn());
            }}
            className={cx('action-btn')}
          >
            <FontAwesomeIcon className={cx('random-off')} icon={faShuffle} />
          </button>
        )}

        <button
          className={cx('action-btn', 'tohonxiu')}
          onClick={() => {
            dispatch(prevSong());
            dispatch(playSong());
          }}
        >
          <FontAwesomeIcon icon={faBackwardStep} />
        </button>
        {isPlaying && (
          <FontAwesomeIcon
            className={cx('play-pause')}
            onClick={() => {
              dispatch(pauseSong());
            }}
            icon={faCirclePause}
          />
        )}
        {!isPlaying && (
          <FontAwesomeIcon
            className={cx('play-pause')}
            onClick={() => {
              dispatch(playSong());
            }}
            icon={faCirclePlay}
          />
        )}
        <button
          className={cx('action-btn', 'tohonxiu')}
          onClick={() => {
            dispatch(nextSong());
            dispatch(playSong());
          }}
        >
          <FontAwesomeIcon icon={faForwardStep} />
        </button>
        {isRepeat === 1 ? (
          <button
            onClick={() => {
              dispatch(repeatAll());
            }}
            className={cx('action-btn')}
          >
            <FontAwesomeIcon icon={faRepeat} />
          </button>
        ) : isRepeat === 2 ? (
          <button
            onClick={() => {
              dispatch(repeatOne());
            }}
            className={cx('action-btn')}
          >
            <FontAwesomeIcon className={cx('repeatAll-on')} icon={faRepeat} />
          </button>
        ) : (
          <button
            onClick={() => {
              dispatch(noRepeat());
            }}
            className={cx('action-btn', 'repeatOne-on')}
          >
            <FontAwesomeIcon icon={faRepeat} />
            <p>1</p>
          </button>
        )}
      </div>
      <div className={cx('duration-item')}>
        <span className={cx('time-left')}>{convertTime(progress)}</span>
        <Slider
          aria-label="slider-ex-1"
          defaultValue={0}
          h={'10px'}
          p={'2px'}
          role="group"
          value={(progress / duration) * 100 || 0}
          onChange={handleOnChange}
          onChangeEnd={handleOnChangeEnd}
          onChangeStart={handleOnChangeStart}
        >
          <SliderTrack
            h={'3px'}
            bg={'hsla(0, 0%, 100%, 0.3)'}
            _groupHover={{ h: '5px', borderRadius: '3px' }}
            _groupActive={{ h: '5px', borderRadius: '3px' }}
          >
            <SliderFilledTrack bg={'#fff'} />
          </SliderTrack>
          <SliderThumb
            w={'12px'}
            h={'12px'}
            display={'none'}
            _focus={{ boxShadow: 'none' }}
            _groupHover={{ display: 'block' }}
            _groupActive={{ display: 'block' }}
          />
        </Slider>
        <span className={cx('time-right')}>{convertTime(duration)}</span>
      </div>
    </div>
  );
}

export default memo(PlayerControlCenter);
