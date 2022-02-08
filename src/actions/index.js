//Action creator

const SelectSong = (song) => {
  return {
    type: "SONG_SELECTED",
    payload: song,
  };
};

export { SelectSong };
