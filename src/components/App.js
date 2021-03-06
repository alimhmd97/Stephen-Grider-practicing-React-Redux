import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import SongDetails from "./songDetails";
import SongsList from "./songsList";
import "./app.css";
import Counter from "./counter";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <SongsList />

          <SongDetails />
        </div>
        <hr />
        <div>
          <Counter />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
