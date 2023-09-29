import styles from './PlaylistItem.module.scss';
import classNames from 'classnames/bind';
import { Box, Button, HStack, Img } from '@chakra-ui/react';
import { faEllipsis, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartt, faPlayCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const cx = classNames.bind(styles);

function PlaylistItem({ playlist, index }) {
  const [isFavoritePlaylist, setIsFavoritePlaylist] = useState(false);

  return (
    <div className={cx('wrapper', index === 4 ? 'hideplaylist' : '')}>
      <Box sx={css.box2} role="group">
        <Img sx={css.img} src={playlist.img} alt="img" />
        <HStack sx={css.hstack}>
          {isFavoritePlaylist && (
            <Button
              sx={css.button1}
              onClick={() => {
                setIsFavoritePlaylist(false);
              }}
            >
              <FontAwesomeIcon icon={faHeart} />
            </Button>
          )}{' '}
          {!isFavoritePlaylist && (
            <Button
              sx={css.button2}
              onClick={() => {
                setIsFavoritePlaylist(true);
              }}
            >
              <FontAwesomeIcon icon={faHeartt} />
            </Button>
          )}{' '}
          <FontAwesomeIcon className={cx('btn_play')} icon={faPlayCircle} />
          <Button sx={css.button3}>
            <FontAwesomeIcon icon={faEllipsis} />
          </Button>
        </HStack>
      </Box>
      <Box sx={css.box3}>{playlist.title}</Box>
      <Box sx={css.box4}>{playlist.subtitle}</Box>
    </div>
  );
}

export default PlaylistItem;

const css = {
  box2: {
    overflow: 'hidden',
    cursor: 'pointer',
    position: 'relative',
    borderRadius: '5px',
  },
  img: {
    transition: 'transform 0.4s linear',
    _groupHover: {
      filter: 'brightness(55%)',
      transform: 'scale(1.07)',
    },
  },
  hstack: {
    position: 'absolute',
    top: '0',
    left: '0',
    w: '100%',
    h: '100%',
    justifyContent: 'space-evenly',
    opacity: '0',
    _groupHover: {
      opacity: '1',
    },
  },
  button1: {
    w: '30px',
    h: '30px',
    borderRadius: '50%',
    bgColor: 'transparent',
    border: 'none',
    _hover: {
      bgColor: 'hsla(0, 0%, 100%, 0.3)',
    },
    color: '#9b4de0',
    fontSize: '20px',
  },
  button2: {
    w: '30px',
    h: '30px',
    borderRadius: '50%',
    bgColor: 'transparent',
    color: '#fff',
    border: 'none',
    _hover: {
      bgColor: 'hsla(0, 0%, 100%, 0.3)',
    },
    fontSize: '20px',
  },
  button3: {
    w: '30px',
    h: '30px',
    borderRadius: '50%',
    color: '#fff',
    bgColor: 'transparent',
    border: 'none',
    _hover: {
      bgColor: 'hsla(0, 0%, 100%, 0.3)',
    },
    fontSize: '20px',
  },
  box3: {
    mt: '12px',
    fontSize: '14px',
    fontWeight: '700',
    _hover: {
      color: '#9b4de0',
    },
    cursor: 'pointer',
  },
  box4: {
    fontSize: '14px',
    fontWeight: '400',
    cursor: 'pointer',
    color: 'hsla(0,0%,100%,0.5)',
  },
};
