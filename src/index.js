import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

repeatFlag(4);

function repeatFlag(numberOfInstances) {
  for(var i = 0; i < numberOfInstances; i++){
    ReactDOM.render(
      <App />,
      document.getElementsByClassName('flag')[i]
    );
  }
}