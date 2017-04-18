import React, { Component } from 'react';
import './App.css';
import ReactTooltip from 'react-tooltip';

class App extends Component {
  render() {
    return (
      <div>
        <a data-tip data-for='global'><img src="http://blogs.edf.org/energyexchange/files/2012/12/RedFlag.jpg" className="flagImage" /></a>
        <ReactTooltip id='global' aria-haspopup='true' role='example' place="bottom">
          <p>This is a global react component tooltip</p>
          <p>You can put every thing here</p>
          <ul>
            <img src="http://clipartix.com/wp-content/uploads/2016/05/Happy-face-clip-art-smiley-face-clipart-3-clipartcow.jpg" className="face"/>
            <li>Chart</li>
            <li>Else</li>
          </ul>
        </ReactTooltip>
      </div>
    );
  }
}

export default App;
