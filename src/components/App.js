import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { SelectSong } from "../actions";
import SongDetails from "./songDetails";
import SongsList from "./songsList";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <SongsList />
        </div>
        <div>
          <SongDetails />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
