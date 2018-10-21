import React from 'react';
import dimensions from './dimensions';
import {whiteStone, blackStone} from './styles';
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

const Stone = ({color}) => {
  let style = color === values.white ? whiteStone: blackStone;
  return (
    <svg viewBox={viewBox}
      width={cellWidht}
      height={cellLength}
    >
      <circle
        className={color === values.white ? 'whiteStone': 'blackStone'}
        {...style}
        cx={0}
        cy={0}
        r={`${(color === values.white ? whiteStoneDiameter: blackStoneDiameter)/ 2}`}
      />
    </svg>
  );
};

export default Stone;
