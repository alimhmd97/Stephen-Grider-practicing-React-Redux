//reducer creator
import { combineReducers } from "redux";
const songsReducer = () => {
  return [
    { title: "culling voices", duration: "7:50" },
    { title: "part of me", duration: "3:45" },
    { title: "the pot", duration: "5:30" },
    { title: "the sparrow", duration: "4:35" },
  ];
};
const selectedSongsReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};
const countReducer = (count = 0, action) => {
  if (action.type === "INCREAMENT") {
    return ++count;
  }
  {
    if (action.type === "DECREAMENT") {
      return --count;
    }

    return count;
  }
};
export default combineReducers({
  songs: songsReducer,
  selectedSongs: selectedSongsReducer,
  countReducer: countReducer,
});
