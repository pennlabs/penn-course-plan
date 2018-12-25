import React, { Component } from 'react';
import './styles/App.css';
import Sections from "./components/selector/Sections";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sections/>
      </div>
    );
  }
}

export default App;
