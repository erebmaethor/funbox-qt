import React from 'react';

export default function Point({ data, handleDeletePoint }) {
  return (
    <p className="point">
      {data.i + 1}. {data.name}
      <button onClick={handleDeletePoint} data-i={data.i} className="del-button">
        [x]
      </button>
    </p>
  );
}
