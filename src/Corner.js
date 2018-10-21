import React from 'react';
import dimensions from './dimensions';

let {
  lineSize,
  cellWidht,
  cellLength,
} = dimensions;

const annotationBlank = .8; // 80%
const viewBox = `${-cellWidht/2} ${-cellLength/2} ${cellWidht} ${cellLength}`;

const PlainCorner = ({
  top, right, left, bottom
}) => {
  let [width, length] = [cellWidht, cellLength];
  if (top && right || bottom && left) {
    [width, length] = [cellLength, cellWidht];
  }
  let transform=''; // top
  if (top && right)
    transform='rotate(90)';
  else if (bottom && right)
    transform='rotate(180)';
  else if (bottom && left)
    transform='rotate(270)';

  return (
    <svg viewBox={viewBox}
      width={cellWidht}
      height={cellLength}
    >
      <g transform={transform}>
        <line className='line' strokeWidth={lineSize} x1="0" y1="0" x2={`${width/2}`} y2="0"/>
        <line className='line' strokeWidth={lineSize} x1="0" y1="0" x2="0" y2={`${length/2}`}/>
      </g>
    </svg>
  );
};

const EmptyCorner = ({
  top, right, left, bottom
}) => {
  let [width, length] = [cellWidht, cellLength];
  if (top && right || bottom && left) {
    [width, length] = [cellLength, cellWidht];
  }
  let transform=''; // top
  if (top && right)
    transform='rotate(90)';
  else if (bottom && right)
    transform='rotate(180)';
  else if (bottom && left)
    transform='rotate(270)';

  return (
    <svg viewBox={viewBox}
      width={cellWidht}
      height={cellLength}
    >
      <g transform={transform}>
        <line className='line' strokeWidth={lineSize} x1={`${annotationBlank*width/2}`} y1="0" x2={`${width/2}`} y2="0"/>
        <line className='line' strokeWidth={lineSize} x1="0" y1={`${annotationBlank*length/2}`} x2="0" y2={`${length/2}`}/>
      </g>
    </svg>
  );
};

const Corner = ({
  isLabeled,
  ...props
}) => {
  return (isLabeled ?
    <EmptyCorner {...props}/>:
    <PlainCorner {...props}/>
  );
};

export default Corner;
