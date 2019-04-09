import React from 'react';
import { SortableContainer } from 'react-sortable-hoc';

import Point from './Point';

const PointsList = SortableContainer(({ data, handleAddPoint, handleDeletePoint }) => {
  return (
    <div className="pointslist">
      <form name="newPoint" onSubmit={handleAddPoint}>
        <input type="text" name="point" size="30" style={{ borderRadius: '2px' }} />{' '}
        <button style={{ borderRadius: '2px' }}>New point</button>
      </form>
      {data.pList.map((pnt, i) => {
        pnt.i = i;
        return <Point data={pnt} key={i} index={i} handleDeletePoint={handleDeletePoint} />;
      })}
    </div>
  );
});

export default PointsList;
