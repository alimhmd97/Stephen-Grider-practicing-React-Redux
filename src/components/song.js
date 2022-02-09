function Song({ songTitle, songDuration, selectSong }) {
  return (
    <div>
      <div>
        {songTitle}:{songDuration}
      </div>
      <button onClick={selectSong}>select</button>
    </div>
  );
}

export { Song };
