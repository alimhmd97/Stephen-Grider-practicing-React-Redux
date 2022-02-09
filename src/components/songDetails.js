import { connect } from "react-redux";

function SongDetails() {
  return <div></div>;
}
export { SongDetails };
const mapToStateProps = (state) => {
  return { song: state.selectedSongs };
};

export default connect(mapToStateProps)(SongDetails);
