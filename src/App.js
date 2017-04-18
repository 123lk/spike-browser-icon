import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactTooltip from 'react-tooltip';

class App extends Component {
  render() {
    return (
      <div>
        <a data-tip="and you're fake news"><img src="http://blogs.edf.org/energyexchange/files/2012/12/RedFlag.jpg" className="flagImage"/></a>
        <ReactTooltip place="top" type="dark" effect="float"/>
      </div>
    );
  }
}

export default App;
