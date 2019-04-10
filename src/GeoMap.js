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
        onLoad={props.returnYmaps}
        modules={['geocode']}
      >
        <PointsList
          data={props.data}
          handleAddPoint={props.handleAddPoint}
          handleDeletePoint={props.handleDeletePoint}
          onSortStart={(_, event) => event.preventDefault()}
          onSortEnd={props.onSortEnd}
        />
        {props.data.pList.map((pnt, i) => {
          return (
            <Placemark
              geometry={pnt.coords}
              properties={{ balloonContent: pnt.name, ident: i }}
              options={{ draggable: true }}
              onDragEnd={props.onDragEnd}
              modules={['geoObject.addon.balloon']}
              key={i}
            />
          );
        })}
        <RouteLine data={props.data} />
      </Map>
    </YMaps>
  );
}
// onSortStart is for turn off selection of the text under the moving pressed mouse when drag-n-drop points in list
