import React, { Component } from 'react';
//import './App.css';
import { YMaps, Map } from 'react-yandex-maps';

class App extends Component {
  render() {
    return (
      <YMaps>
        <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} className="ymap-class">
          <div className="pointslist">
            First point <br /> Second point{' '}
          </div>
        </Map>
      </YMaps>
    );
  }
}

export default App;
