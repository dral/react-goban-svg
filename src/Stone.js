import React from 'react';
import dimensions from './dimensions';

export const values = {
  black: 'B',
  white: 'W',
  empty: null,
};

let {
  cellWidht,
  cellLength,
  blackStoneDiameter,
  whiteStoneDiameter,
} = dimensions;

const viewBox = `${-cellWidht/2} ${-cellLength/2} ${cellWidht} ${cellLength}`;

const Stone = ({color}) => (
  <svg viewBox={viewBox}
    width={cellWidht}
    height={cellLength}
  >
    <circle
      className={color === values.white ? 'whiteStone': 'blackStone'}
      cx={0}
      cy={0}
      r={`${(color === values.white ? whiteStoneDiameter: blackStoneDiameter)/ 2}`}
    />
  </svg>
);

export default Stone;
