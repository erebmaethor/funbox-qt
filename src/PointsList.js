import React from 'react';

import Point from './Point';

export default function PointsList({ data, handleAddPoint }) {
  // prepare list of points
  return (
    <div className="pointslist">
      <form name="newPoint" onSubmit={handleAddPoint}>
        <input type="text" name="point" size="30" style={{ borderRadius: '2px' }} />{' '}
        <button style={{ borderRadius: '2px' }}>New point</button>
      </form>
      {data.pList.map((pnt, i) => {
        pnt.i = ++i;
        return <Point data={pnt} key={i} />;
      })}
    </div>
  );
}
