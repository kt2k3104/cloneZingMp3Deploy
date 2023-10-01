import styles from './Timkiem.module.scss';
import classNames from 'classnames/bind';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, TabIndicator } from '@chakra-ui/react';

import OutstandingItem from './components/outstandingItem';
import SongItem from '../Playlist/components/songItem/SongItem';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

function Timkiem() {
  const { allSongs } = useSelector((state) => state.listen);
  const { songId } = useParams();
  let song = null;
  allSongs.forEach((item) => {
    if (item.id === Number(songId)) song = item;
  });

  return (
    <div className={cx('wrapper')}>
      <Tabs w={'100%'} h={'100%'} minW={'768px'} variant="enclosed" sx={css.tabs}>
        <TabList
          borderBottomColor={'hsla(0, 0%, 100%, 0.1)'}
          padding={'0 59px'}
          h={'48px'}
          minW={'768px'}
        >
          <Box
            display={{ base: 'none', xl: 'flex' }}
            alignItems={'center'}
            fontSize={'24px'}
            fontWeight={'700'}
          >
            <Box sx={css.box1}>Kết Quả Tìm Kiếm</Box>
          </Box>
          <Tab ml={'19px'} sx={css.tab1}>
            TẤT CẢ
          </Tab>
          <Tab sx={css.tab1}>BÀI HÁT</Tab>
          <Tab sx={css.tab1}>PLAYLIST/ALBUM</Tab>
          <Tab sx={css.tab1}>NGHỆ SĨ/OA</Tab>
          <Tab sx={css.tab1}>MV</Tab>
        </TabList>
        <TabIndicator height="1px" bg="#9b4de0" borderRadius="1px" />

        <TabPanels w={'100%'} h={'100%'} minW={'768px'} p={{ base: '28px 29px', lg: '28px 59px' }}>
          <TabPanel minW={'768px'} w={'100%'} h={'100%'} p={'0'}>
            <div className={cx('section_1')}>
              <h3 className={cx('section-title')}>Nổi Bật</h3>
              <div className={cx('section_1_content')}>
                <OutstandingItem song={song} type={'SONG'} />
                <OutstandingItem song={song} type={'ALBUM'} />
                <OutstandingItem song={song} type={'ARTIST'} />
              </div>
            </div>
            <div className={cx('section_2')}>
              <h3 className={cx('section-title')}>Nổi Bật</h3>
              <SongItem song={song} />
            </div>
          </TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default Timkiem;

const css = {
  tabs: {
    position: 'relative',
    w: '100%',
    pb: '35px',
  },
  tab1: {
    fontSize: '14px',
    p: '15px 0 16px',
    mr: '38px',
    color: '#dadada',
    fontWeight: '500',
    _selected: { color: 'white' },
  },
  box1: {
    display: 'flex',
    alignItems: 'center',
    height: '60%',
    p: '10px 20px 10px 0',
    borderRight: '1px solid hsla(0,0%,100%,0.1)',
  },
};
