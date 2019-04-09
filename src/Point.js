import React from 'react';

export default function Point({ data, handleDeletePoint }) {
  return (
    <div className="point">
      <p style={{ margin: '0px', padding: '0px' }}>
        {data.i + 1}. {data.name}
        <button onClick={handleDeletePoint} data-i={data.i} className="del-button">
          [x]
        </button>
      </p>
      {data.addr ? (
        <p style={{ margin: '0px', padding: '0px', fontSize: '10px' }}>{data.addr}</p>
      ) : null}
    </div>
  );
}
