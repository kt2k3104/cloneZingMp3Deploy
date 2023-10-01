import { Box, Button, Image } from '@chakra-ui/react';
import { faEllipsis, faHeart, faPlay } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import Tippy from '@tippyjs/react';
import Tippyy from '@tippyjs/react/headless';
import { useState } from 'react';

import images from '~/assets/images';
import { handleChangeFavoriteSong } from '~/page/Auth/UserSlice';
import SongOtherOptions from '~/page/ThuVien/components/SongOtherOptions/SongOtherOptions';

function OutstandingItem({ song, type }) {
  const { currentSong, isPlaying } = useSelector((state) => state.listen);
  const { favoriteId } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);
  const show = () => setIsVisible(true);
  const hide = () => setIsVisible(false);
  return (
    <Box sx={css.boxWrapper} role="group">
      <Box sx={css.boxLeft}>
        <Box sx={css.boxSongThumb}>
          <Image w={'100%'} borderRadius={'4px'} alt="img" src={song?.artwork} />
          {currentSong.id === song?.id && (
            <Box sx={css.songThumbActive}>
              {isPlaying ? (
                <Image src={images.playingImage} alt="img" w={'40%'} h={'40%'} />
              ) : (
                <FontAwesomeIcon style={{ _hover: { opacity: '0.8' } }} icon={faPlay} />
              )}
            </Box>
          )}
          {currentSong.id !== song?.id && (
            <Box sx={css.songThumbActive}>
              <FontAwesomeIcon style={{ _hover: { opacity: '0.9=8' } }} icon={faPlay} />
            </Box>
          )}
        </Box>
        {type === 'SONG' && (
          <Box sx={css.cardInfo}>
            <Box sx={css.cartTitle}>Bài hát</Box>
            <Box sx={css.songName}>{song?.name}</Box>
            <Box sx={css.songArtist}>{song?.artist}</Box>
          </Box>
        )}
        {type === 'ALBUM' && (
          <Box sx={css.cardInfo} cursor={'pointer'}>
            <Box sx={css.cartTitle}>Album</Box>
            <Box sx={css.songName}>{song?.name} (Single)</Box>
            <Box sx={css.songArtist}>{song?.artist}</Box>
          </Box>
        )}
        {type === 'ARTIST' && (
          <Box sx={css.cardInfo} cursor={'pointer'}>
            <Box sx={css.cartTitle}>Nghệ sĩ</Box>
            <Box sx={css.songName} _hover={{ color: '#3560f5', textDecoration: 'underLine' }}>
              {song?.artist}
            </Box>
            <Box sx={css.songArtist} _hover={{ color: 'dadada', textDecoration: 'none' }}>
              29K quan tâm
            </Box>
          </Box>
        )}
      </Box>
      <Box sx={css.boxRight}>
        {favoriteId.includes(song?.id) ? (
          <Button
            sx={css.button}
            onClick={() => {
              dispatch(handleChangeFavoriteSong(song?.id));
            }}
          >
            <FontAwesomeIcon icon={faHeart} />
          </Button>
        ) : (
          <Button
            sx={css.button}
            onClick={() => {
              dispatch(handleChangeFavoriteSong(song?.id));
            }}
          >
            <FontAwesomeIcon icon={faHeartt} />
          </Button>
        )}
        <Tippyy
          interactive
          placement="left"
          visible={isVisible}
          onClickOutside={hide}
          offset={[0, 0]}
          render={(attrs) => <SongOtherOptions hide={hide} song={song} attrs={attrs} />}
        >
          <Tippy content="Khác">
            <Button sx={css.button} onClick={isVisible ? hide : show}>
              <FontAwesomeIcon icon={faEllipsis} />
            </Button>
          </Tippy>
        </Tippyy>
      </Box>
    </Box>
  );
}

export default OutstandingItem;

const css = {
  boxWrapper: {
    w: '31%',
    h: '104px',
    bgColor: '#feffff0d',
    borderRadius: '5px',
    p: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    mr: '28px',
    _hover: {
      bgColor: 'hsla(0, 0%, 100%, 0.1)',
    },
  },
  boxLeft: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '16px',
    flexGrow: '1',
    flexShrink: '1',
  },
  boxSongThumb: {
    w: '84px',
    h: '84px',
    position: 'relative',
    flexShrink: '0',
  },
  songThumbActive: {
    display: 'none',
    _groupHover: {
      display: 'flex',
      position: 'absolute',
      top: '0',
      left: '0',
      w: '84px',
      h: '84px',
      bgColor: '#333333a1',
      fontSize: '22px',
      cursor: 'pointer',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  cardInfo: {},
  cartTitle: {
    fontSize: '12px',
    fontWeight: '400',
    lineHeight: '18px',
    color: 'hsla(0, 0%, 100%, 0.5)',
    mb: '6px',
  },
  songName: {
    fontSize: '14px',
    fontWeight: '600',
    lineHeight: '20px',
  },
  songArtist: {
    fontSize: '12px',
    fontWeight: '400',
    lineHeight: '18px',
    color: 'hsla(0, 0%, 100%, 0.5)',
    cursor: 'pointer',
    _hover: {
      color: '#3560f5',
      textDecoration: 'underline',
    },
  },
  boxRight: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    w: '38px',
    h: '38px',
    borderRadius: '50%',
    border: 'none',
    bgColor: 'transparent',
    opacity: '0',
    fontSize: '16px',
    color: 'dadada',
    display: 'flex',
    _hover: {
      bgColor: 'hsla(0, 0%, 100%, 0.1)',
      filter: 'brightness(0.9)',
    },
    _groupHover: {
      opacity: '1',
    },
  },
};
