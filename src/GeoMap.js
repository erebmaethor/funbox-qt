import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

import PointsList from './PointsList';
import RouteLine from './RouteLine';

export default function GeoMap(props) {
  return (
    <YMaps>
      <Map
        defaultState={{ center: [56.64, 47.87], zoom: 12 }}
        className="ymap-class"
        instanceRef={props.returnMap}
      >
        <PointsList data={props.data} handleAddPoint={props.handleAddPoint} />
        {props.data.pList.map((pnt, i) => {
          return <Placemark geometry={pnt.coords} key={i} />;
        })}
        <RouteLine data={props.data} />
      </Map>
    </YMaps>
  );
}
