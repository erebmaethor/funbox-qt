import React, { Component } from 'react';
import GeoMap from './GeoMap';

import sha256 from 'js-sha256';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pList: [], // points list, { name,  coords: [lat, lon], uniqId, addr}
    };
  }

  returnMap = map => {
    // put map instanse to state for access to it's methods
    this.setState({ map });
  };

  returnYmaps = ymaps => {
    // put ymaps object to state for straight access to it's methods
    this.setState({ ymaps });
  };

  _geocoder = async (uniqId, coords) => {
    try {
      // obtain an address by geocoder
      const addrObj = await this.state.ymaps.geocode(coords, { results: 1 });
      const addr = addrObj.geoObjects.get(0).getAddressLine();

      // insert the address into pList, if this point wasn't deleted while geocoder works
      const newPList = this.state.pList.map(pnt => {
        if (pnt.uniqId === uniqId) {
          pnt.addr = addr;
        }
        return pnt;
      });
      this.setState({ pList: newPList });
    } catch (e) {
      // ideally there should be an action for logging and monitoring errors
      // but now we simply do nothing and don't show the address
    }
  };

  handleAddPoint = async event => {
    event.preventDefault();

    // check the name
    let name = event.target.point.value;
    if (name.search(/^[a-zA-Zа-яА-ЯёЁ0-9 '-_]+$/) === -1) return;

    // obtain coordinates of the center of the map
    const coords = this.state.map.getCenter();

    // generate a unique id of point
    const uniqId = sha256(name + Math.round(Math.random() * 100000));

    // add new point
    let newPList = this.state.pList.slice();
    newPList.push({ name: name, coords: coords, uniqId: uniqId });
    this.setState({ pList: newPList });

    // asynchronously get an address and put it into state
    await this._geocoder(uniqId, coords);
  };

  handleDeletePoint = event => {
    let newPList = this.state.pList.slice();
    newPList.splice(event.target.dataset.i, 1);
    this.setState({ pList: newPList });
  };

  // handle pointslist drag-n-drop
  onSortEnd = ({ oldIndex, newIndex }) => {
    let newPList = this.state.pList.slice();
    const removed = newPList.splice(oldIndex, 1);
    newPList.splice(newIndex, 0, removed[0]);
    this.setState({ pList: newPList });
  };

  // handle Placemark drag-n-drop
  onDragEnd = async event => {
    const placeMark = event.originalEvent.target;
    const i = placeMark.properties.get('ident');

    let newPList = this.state.pList.slice();
    newPList[i].coords = placeMark.geometry.getCoordinates(); // get new coords
    this.setState({ pList: newPList });
    // update the address
    await this._geocoder(newPList[i].uniqId, newPList[i].coords);
  };

  render() {
    return (
      <GeoMap
        data={this.state}
        handleAddPoint={this.handleAddPoint}
        returnMap={this.returnMap}
        returnYmaps={this.returnYmaps}
        handleDeletePoint={this.handleDeletePoint}
        onSortEnd={this.onSortEnd}
        onDragEnd={this.onDragEnd}
      />
    );
  }
}

export default App;
