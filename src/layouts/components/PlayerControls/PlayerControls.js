import styles from './PlayerControls.module.scss';
import classNames from 'classnames/bind';

import { useEffect, useRef, useState } from 'react';

import PlaylistsSidebar from './components/PlaylistsSidebar';
import PlayerControlLeft from './components/PlayerControlLeft';
import PlayerControlCenter from './components/PlayerControlCenter';
import PlayerControlRight from './components/PlayerControlRight';
import { useDispatch, useSelector } from 'react-redux';
import { nextSong, pauseSong, setCurrentSong } from './ListenSlice';

const cx = classNames.bind(styles);

function PlayerControls() {
  const [isOpenPlaylists, setIsOpenPlaylists] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isChange, setIsChange] = useState(false);

  const { isPlaying, isRepeat, isRandom, currentSong, queue } = useSelector(
    (state) => state.listen,
  );
  const dispatch = useDispatch();
  const audioRef = useRef();
  const arr = useRef([]);

  const handleClickBtnPlaylists = (e) => {
    if (isOpenPlaylists === true) setIsOpenPlaylists(false);
    else setIsOpenPlaylists(true);
  };

  const handleOnTimeUpdate = function (e) {
    if (!duration) {
      setDuration(audioRef.current.duration);
    }
    if (!isChange) {
      setProgress(e.target.currentTime);
    }
  };

  const handleEndedAudio = () => {
    if (isRepeat === 3) {
      audioRef.current.play();
    }
    if (!isRandom && isRepeat !== 3) {
      if (currentSong.id !== queue[queue.length - 1].id) {
        dispatch(nextSong());
      }
      if (isRepeat === 1 && currentSong.id === queue[queue.length - 1].id) {
        setProgress(0);
        dispatch(pauseSong());
      }
      if (isRepeat === 2 && currentSong.id === queue[queue.length - 1].id) {
        if (queue.length === 1) audioRef.current.play();
        dispatch(nextSong());
      }
    }
    if (isRandom && isRepeat !== 3) {
      arr.current.push(currentSong);
      let newSongIndex = Math.floor(Math.random() * queue.length);
      while (currentSong.id === queue[newSongIndex].id) {
        newSongIndex = Math.floor(Math.random() * queue.length);
        if (currentSong.id !== newSongIndex) break;
      }
      if (arr.current.length < queue.length) {
        while (arr.current.includes(queue[newSongIndex])) {
          newSongIndex = Math.floor(Math.random() * queue.length);
          if (!arr.current.includes(queue[newSongIndex])) break;
        }
        dispatch(setCurrentSong(queue[newSongIndex]));
      }
      if (isRepeat === 1 && arr.current.length === queue.length) {
        setProgress(0);
        dispatch(pauseSong());
        arr.current = [];
      }
      if (isRepeat === 2 && arr.current.length === queue.length) {
        arr.current = [];
        dispatch(setCurrentSong(queue[newSongIndex]));
      }
    }
  };

  useEffect(() => {
    arr.current = [];
  }, [isRandom, isRepeat]);

  useEffect(() => {
    setDuration(audioRef.current.duration);
  }, [currentSong]);

  useEffect(() => {
    if (isPlaying) audioRef.current.play();
    else audioRef.current.pause();
  }, [isPlaying, currentSong]);

  return (
    <div className={cx('player-controls')}>
      <PlayerControlLeft />
      <PlayerControlCenter
        progress={progress}
        duration={duration}
        setProgress={setProgress}
        setDuration={setDuration}
        setIsChange={setIsChange}
        audioRef={audioRef}
      />
      <PlayerControlRight
        handleClickBtnPlaylists={handleClickBtnPlaylists}
        isOpenPlaylists={isOpenPlaylists}
        audioRef={audioRef}
      />
      <PlaylistsSidebar showPlaylists={isOpenPlaylists} />
      <audio
        onTimeUpdate={handleOnTimeUpdate}
        onEnded={handleEndedAudio}
        id="audio"
        src={currentSong?.url}
        ref={audioRef}
      ></audio>
    </div>
  );
}

export default PlayerControls;
