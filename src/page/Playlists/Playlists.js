import styles from './Playlists.module.scss';
import classNames from 'classnames/bind';
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  TabIndicator,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

import PlaylistItem from '../ThuVien/components/PlaylistItem/PlaylistItem';
import ModalAddPlaylist from '~/layouts/components/Sidebar/component/ModalAddPlaylist';

const cx = classNames.bind(styles);

function Playlists() {
  const { playlists } = useSelector((state) => state.user);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className={cx('wrapper')}>
      <Tabs variant="enclosed" sx={css.tabs}>
        <TabList borderBottomColor={'hsla(0, 0%, 100%, 0.1)'} padding={' 0 59px'} h={'48px'}>
          <Box display={'flex'} alignItems={'center'} fontSize={'24px'} fontWeight={'700'}>
            <Box sx={css.box1}>Playlist</Box>
          </Box>
          <Tab ml={'20px'} sx={css.tab1}>
            TẤT CẢ
          </Tab>
          <Tab sx={css.tab1}>CỦA TÔI</Tab>
        </TabList>
        <TabIndicator height="1px" bg="#9b4de0" borderRadius="1px" />

        <TabPanels p={'20px 48px'}>
          <TabPanel
            display={'grid'}
            gridTemplateColumns={{ base: '25% 25% 25% 25%', xl: '20% 20% 20% 20% 20% ' }}
            rowGap={'30px'}
            m={'0 -14px'}
          >
            <VStack onClick={onOpen} sx={css.vstack}>
              <FontAwesomeIcon icon={faPlusCircle} />
              <span>Tạo playlist mới</span>
            </VStack>
            <ModalAddPlaylist isOpen={isOpen} onClose={onClose} />

            {playlists?.map((playlist, index) => {
              return (
                <div
                  key={playlist.id}
                  className={cx('playlist_item', index === 3 ? 'hideplaylist' : '')}
                >
                  <PlaylistItem playlist={playlist} />
                </div>
              );
            })}
          </TabPanel>
          <TabPanel>Chả khác gì tất cả, quay cm lại kia mà xem</TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default Playlists;

const css = {
  tabs: {
    position: 'relative',
    w: '100%',
    pb: '35px',
  },
  tab1: {
    fontSize: '14px',
    p: '15px 0 17px',
    mr: '40px',
    colo: '#dadada',
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
  vstack: {
    w: 'calc(100% - 28px)',
    minW: '114px',
    border: '1px solid hsla(0,0%,100%,0.1)',
    fontSize: '15px',
    borderRadius: '4px',
    justifyContent: 'center',
    cursor: 'pointer',
    ml: '14px',
  },
};
