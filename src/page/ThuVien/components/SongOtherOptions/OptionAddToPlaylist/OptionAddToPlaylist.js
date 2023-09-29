import { useDispatch, useSelector } from 'react-redux';
import styles from './OptionAddToPlaylist.module.scss';
import classNames from 'classnames/bind';
import { handleAddSongToPlaylist } from '~/page/Auth/UserSlice';
import { Box, useDisclosure, useToast } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListOl } from '@fortawesome/free-solid-svg-icons';
import ModalAddPlaylist from '~/layouts/components/Sidebar/component/ModalAddPlaylist';

const cx = classNames.bind(styles);

function OptionAddToPlaylist({ attrs, song, hide }) {
  const { playlists } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className={cx('option_add_to_playlist')} tabIndex="-1" {...attrs}>
      <input placeholder="Tìm playlist" />
      <li
        onClick={() => {
          onOpen();
          hide();
        }}
      >
        <i></i>
        Tạo playlist mới
      </li>
      <ModalAddPlaylist isOpen={isOpen} onClose={onClose} />
      <div className={cx('playlists')}>
        {playlists?.map((playlist) => (
          <div
            onClick={() => {
              try {
                dispatch(
                  handleAddSongToPlaylist({
                    playlistId: playlist.id.toString(),
                    songId: song.id.toString(),
                  }),
                );
                hide();
                toast({
                  position: 'bottom-left',
                  render: () => (
                    <Box
                      color="white"
                      p={5}
                      bg="#34224f"
                      borderRadius={'5px'}
                      marginBottom={'90px'}
                    >
                      Đã thêm bài hát "{song.name}" vào playlist thành công !
                    </Box>
                  ),
                  duration: 1000,
                });
              } catch (error) {
                console.log(error);
              }
            }}
            key={playlist.id}
            className={cx('playlist_item')}
          >
            <FontAwesomeIcon icon={faListOl} />
            {playlist.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default OptionAddToPlaylist;
