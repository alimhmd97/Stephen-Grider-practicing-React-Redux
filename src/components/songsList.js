import { connect } from "react-redux";
import { Song } from "./song";
import { SelectSong } from "../actions";
function SongsList({ songs, SelectSong }) {
  return (
    <div>
      {songs.map((song) => {
        return (
          <Song
            key={song.title}
            songTitle={song.title}
            songDuration={song.duration}
            selectSong={() => {
              SelectSong(song);
            }}
          />
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return { songs: state.songs };
};
export default connect(mapStateToProps, { SelectSong })(SongsList);
