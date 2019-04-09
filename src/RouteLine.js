import React from 'react';
import { Polyline } from 'react-yandex-maps';

export default function GeoMap({ data }) {
  if (data.pList.length < 2) return null;

  const lineGeometry = data.pList.map(pnt => pnt.coords);

  return (
    <Polyline
      geometry={lineGeometry}
      options={{
        balloonCloseButton: false,
        strokeColor: '#000',
        strokeWidth: 3,
        strokeOpacity: 0.7,
      }}
    />
  );
}
