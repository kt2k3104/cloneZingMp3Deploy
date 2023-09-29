import { Box } from '@chakra-ui/react';
import PlaylistItem from './PlaylistItem/PlaylistItem';

function PlaylistSection({ data }) {
  return (
    <Box sx={css.box1}>
      <Box sx={css.box2}>{data.title}</Box>
      <Box sx={css.box3}>
        {data.playlists.map((playlist, index) => {
          return <PlaylistItem playlist={playlist} key={index} index={index} />;
        })}
      </Box>
    </Box>
  );
}

export default PlaylistSection;

const css = {
  box1: {},
  box2: {
    mb: '20px',
    fontSize: '20px',
    fontWeight: '700',
  },
  box3: {
    display: 'grid',
    gridTemplateColumns: { base: ' 25% 25% 25% 25%', xl: '20% 20% 20% 20% 20%' },
    m: '0 -14px',
  },
};
