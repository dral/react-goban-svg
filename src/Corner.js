import React from 'react';
import './symbols.css';
/**
  List of graphical Symbols. To be included in the svg definition.
  All units are considered in a 50x50 box centered in the middle point (-25x-25 to 25x25).
*/

const size = 50;
const annotationBlank = .8; // 80%
const viewBox = `${-size/2} ${-size/2} ${size} ${size}`;

const PlainCorner = (props) => (
  <svg viewBox={viewBox}
    {...props}
  >
    <line className="line" strokeWidth={`${size/50}`} x1="0" y1="0" x2={`${size/2}`} y2="0"/>
    <line className="line" x1="0" y1="0" x2="0" y2={`${size/2}`}/>
  </svg>
);

const EmptyCorner = (props) => (
  <svg viewBox={viewBox}
    {...props}
  >
    <line className="line" x1={`${annotationBlank*size/2}`} y1="0" x2={`${size/2}`} y2="0"/>
    <line className="line" x1="0" y1={`${annotationBlank*size/2}`} x2="0" y2={`${size/2}`}/>
  </svg>
);

export const Corner = ({
  side = 1,
  top,
  bottom,
  right,
  left,
  isLabeled
}) => {
  let transform=''; // top left
  if (top && right)
    transform=`rotate(90 ${side/2} ${side/2})`;
  else if (bottom && right)
    transform=`rotate(180 ${side/2} ${side/2})`;
  else if (bottom && left)
    transform=`rotate(270 ${side/2} ${side/2})`;

  return (
    <g transform={transform}>
      {
        isLabeled ?
          <EmptyCorner width={side} height={side}/>:
          <PlainCorner width={side} height={side}/>
      }
    </g>
  );
};
