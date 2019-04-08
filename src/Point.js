import React from 'react';

export default function Point({ data }) {
  return (
    <p className="point">
      {data.i}. {data.name}
    </p>
  );
}
