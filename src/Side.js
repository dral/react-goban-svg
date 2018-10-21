import React from 'react';
import dimensions from './dimensions';
import {line} from './styles';

let {
  cellWidht,
  cellLength,
} = dimensions;

let viewBox = `${-cellWidht/2} ${-cellLength/2} ${cellWidht} ${cellLength}`;
const annotationBlank = .8; // 80%

const PlainSide = ({
  right,
  left,
  bottom,
}) => {
  let [width, length] = [cellWidht, cellLength];
  if (right || left) {
    [width, length] = [cellLength, cellWidht];
  }

  let transform=''; // top
  if (right)
    transform='rotate(90)';
  else if (bottom)
    transform='rotate(180)';
  else if (left)
    transform='rotate(270)';
  return (
    <svg viewBox={viewBox}
      width={cellWidht}
      height={cellLength}
    >
      <g transform={transform}>
        <line className='line' {...line} x1="0" y1="0" x2="0" y2={`${length/2}`}/>
        <line className='line' {...line} x1={`${-width/2}`} y1="0" x2={`${width/2}`} y2="0"/>
      </g>
    </svg>
  );
};

const EmptySide = ({
  right,
  left,
  bottom,
}) => {
  let [width, length] = [cellWidht, cellLength];
  if (right || left) {
    [width, length] = [cellLength, cellWidht];
  }
  let transform=''; // top
  if (right)
    transform='rotate(90)';
  else if (bottom)
    transform='rotate(180)';
  else if (left)
    transform='rotate(270)';

  return (
    <svg viewBox={viewBox}
      width={cellWidht}
      height={cellLength}
    >
      <g transform={transform}>
        <line className='line' {...line} x1={`${annotationBlank*width/2}`} y1="0" x2={`${width/2}`} y2="0"/>
        <line className='line' {...line} x1="0" y1={`${annotationBlank*length/2}`} x2="0" y2={`${length/2}`}/>
        <line className='line' {...line} x1={`${-width/2}`} y1="0" x2={`${-annotationBlank*width/2}`} y2="0"/>
      </g>
    </svg>
  );
};

const Side = ({
  isLabeled,
  ...params
}) => {
  return (isLabeled ?
    <EmptySide {...params} />:
    <PlainSide {...params} />
  );
};

export default Side;
