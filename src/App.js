import React, { Component } from 'react';
import GeoMap from './GeoMap';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pList: [], // points list, { name,  coords: [lat, lon], }
    };
  }

  handleAddPoint = event => {
    event.preventDefault();

    // check the name
    let name = event.target.point.value;
    if (name.search(/^[a-zA-Zа-яА-ЯёЁ0-9 '-_]+$/) === -1) return;

    // add new point
    let newPList = this.state.pList.slice();
    newPList.push({ name: name, coords: this.state.map.getCenter() });
    this.setState({ pList: newPList });

    //console.log(this.state.map.getCenter());
  };

  handleDeletePoint = event => {
    let newPList = this.state.pList.slice();
    newPList.splice(event.target.dataset.i, 1);
    this.setState({ pList: newPList });
  };

  returnMap = map => {
    this.setState({ map });
  };

  render() {
    return (
      <GeoMap
        data={this.state}
        handleAddPoint={this.handleAddPoint}
        returnMap={this.returnMap}
        handleDeletePoint={this.handleDeletePoint}
      />
    );
  }
}

export default App;
