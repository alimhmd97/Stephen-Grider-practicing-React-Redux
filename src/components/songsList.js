import { connect } from "react-redux";
import { Song } from "./song";
import { SelectSong } from "../actions";
function SongsList({ songs, selectedSongs }) {
  return (
    <div>
      {songs.map((song) => {
        return (
          <Song
            key={song.title}
            songTitle={song.title}
            songDuration={song.duration}
            // selectSong={() => {
            //   console.log(selectedSongs);
            //   SelectSong(song);
            // }}
          />
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);

  return { songs: state.songs };
};
export default connect(mapStateToProps, { SelectSong })(SongsList);