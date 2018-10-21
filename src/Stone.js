import React from 'react';
import './symbols.css';
/**
  List of graphical Symbols. To be included in the svg definition.
  All units are considered in a 50x50 box centered in the middle point (-25x-25 to 25x25).
*/

const size = 50;
const stoneRadio = .9; // 90%
const viewBox = `${-size/2} ${-size/2} ${size} ${size}`;

/**
  offsetX and offsetY sets how off-center a stone is placed. This is expressed in percentage of the free space for a stone (1 is 100%). Negative values are used for left/top positive for right/bottom
*/
export const White = ({
  side = 1,
  offsetX = 0,
  offsetY = 0,
}) => (
  <svg viewBox={viewBox}
    width={side}
    height={side}
  >
    <circle className="whiteStone"
      cx={`${offsetX*(1 - stoneRadio)*size/2}`}
      cy={`${offsetY*(1 - stoneRadio)*size/2}`}
      r={`${stoneRadio*size/2}`}
    />
  </svg>
);

export const Black = ({
  side = 1,
  offsetX = 0,
  offsetY = 0,
}) => (
  <svg viewBox={viewBox}
    width={side}
    height={side}
  >
    <circle className="blackStone"
      cx={`${offsetX*(1 - stoneRadio)*size/2}`}
      cy={`${offsetY*(1 - stoneRadio)*size/2}`}
      r={`${stoneRadio*size/2}`}
    />
  </svg>
);

export const Stone = ({colour, ...props}) => (
  colour === 'W' ?
    <White {...props}/>:
    <Black {...props}/>
);
