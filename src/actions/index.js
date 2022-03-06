//Action creator

const SelectSong = (song) => {
  return {
    type: "SONG_SELECTED",
    payload: song,
  };
};

const increament = () => {
  return {
    type: "INCREAMENT",
  };
};
const decreament = () => {
  return {
    type: "DECREAMENT",
  };
};
export { SelectSong, decreament, increament };
