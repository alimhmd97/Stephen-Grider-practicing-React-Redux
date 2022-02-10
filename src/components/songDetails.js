import { connect } from "react-redux";

function SongDetails({ song }) {
  return (
    <div>
      <h3>Selected Song</h3>
      {song && (
        <span>
          {song.title} : {song.duration}
        </span>
      )}
    </div>
  );
}
export { SongDetails };
const mapToStateProps = (state) => {
  return { song: state.selectedSongs };
};

export default connect(mapToStateProps)(SongDetails);
