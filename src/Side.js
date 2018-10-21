import React from 'react';
import './symbols.css';
/**
  List of graphical Symbols. To be included in the svg definition.
  All units are considered in a 50x50 box centered in the middle point (-25x-25 to 25x25).
*/

const size = 50;
const annotationBlank = .8; // 80%
const viewBox = `${-size/2} ${-size/2} ${size} ${size}`;

const PlainSide = (props) => (
  <svg viewBox={viewBox}
    {...props}
  >
    <line className="line" x1="0" y1="0" x2="0" y2={`${size/2}`}/>
    <line className="line" x1={`${-size/2}`} y1="0" x2={`${size/2}`} y2="0"/>
  </svg>
);

const EmptySide = (props) => (
  <svg viewBox={viewBox}
    {...props}
  >
    <line className="line" x1={`${annotationBlank*size/2}`} y1="0" x2={`${size/2}`} y2="0"/>
    <line className="line" x1="0" y1={`${annotationBlank*size/2}`} x2="0" y2={`${size/2}`}/>
    <line className="line" x1={`${-size/2}`} y1="0" x2={`${-annotationBlank*size/2}`} y2="0"/>
  </svg>
);

export const Side = ({
  side = 1,
  bottom,
  right,
  left,
  isLabeled
}) => {
  let transform=''; // top
  if (right)
    transform=`rotate(90 ${side/2} ${side/2})`;
  else if (bottom)
    transform=`rotate(180 ${side/2} ${side/2})`;
  else if (left)
    transform=`rotate(270 ${side/2} ${side/2})`;

  return (
    <g transform={transform}>
      {
        isLabeled ?
          <EmptySide width={side} height={side}/>:
          <PlainSide width={side} height={side}/>
      }
    </g>
  );
};
