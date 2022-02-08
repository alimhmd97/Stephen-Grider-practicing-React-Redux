import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { SelectSong } from "../actions";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'></div>
      </BrowserRouter>
    );
  }
}

export default App;
