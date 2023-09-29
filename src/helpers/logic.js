const handleGetRemainingSongs = (queue, allSongs) => {
  const remainingSongs = allSongs.filter((song1) => {
    let isExited = false;
    queue.forEach((song2) => {
      if (song1.id === song2.id) {
        isExited = true;
      }
    });
    return !isExited;
  });
  return remainingSongs;
};

export default handleGetRemainingSongs;
