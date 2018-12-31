import React, { Component } from 'react';
import './styles/App.css';
import 'bulma/css/bulma.css'
import Sections from "./components/selector/Sections";
import Schedule from './components/schedule/Schedule'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="columns">
          <div className="column is-one-fifth">
          </div>
          <div className="column is-one-fifth">
            <Sections />
          </div>
          <div id="InfoPanel" className="column">
            <div id="SchedGraph" className="box">
              <div id="Schedule" style={{position: 'relative'}}>
                <Schedule />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
