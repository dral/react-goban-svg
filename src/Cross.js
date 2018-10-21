import React from 'react';
import './symbols.css';
/**
  List of graphical Symbols. To be included in the svg definition.
  All units are considered in a 50x50 box centered in the middle point (-25x-25 to 25x25).
*/

const size = 50;
const annotationBlank = .8; // 80%
const viewBox = `${-size/2} ${-size/2} ${size} ${size}`;

const PlainCross = (props) => (
  <svg viewBox={viewBox}
    {...props}
  >
    <line className="line" x1="0" y1={`${-size/2}`} x2="0" y2={`${size/2}`}/>
    <line className="line" x1={`${-size/2}`} y1="0" x2={`${size/2}`} y2="0"/>
  </svg>
);

const EmptyCross = (props) => (
  <svg viewBox={viewBox}
    {...props}
  >
    <line className="line" x1={`${annotationBlank*size/2}`} y1="0" x2={`${size/2}`} y2="0"/>
    <line className="line" x1="0" y1={`${annotationBlank*size/2}`} x2="0" y2={`${size/2}`}/>
    <line className="line" x1={`${-size/2}`} y1="0" x2={`${-annotationBlank*size/2}`} y2="0"/>
    <line className="line" x1="0" y1={`${-size/2}`} x2="0" y2={`${-annotationBlank*size/2}`}/>
  </svg>
);

const DottedCross = (props) => (
  <svg viewBox={viewBox}
    {...props}
  >
    <line className="line" x1="0" y1={`${-size/2}`} x2="0" y2={`${size/2}`}/>
    <line className="line" x1={`${-size/2}`} y1="0" x2={`${size/2}`} y2="0"/>
    <circle className="keypointDot" cx="0" cy="0" r="4"/>
  </svg>
);

export const Cross = ({
  side = 1,
  isLabeled
}) => {
  return isLabeled ?
    <EmptyCross width={side} height={side}/>:
    <PlainCross width={side} height={side}/>;
};

export const KeyPoint = ({
  side = 1,
  isLabeled
}) => {
  return isLabeled ?
    <EmptyCross width={side} height={side}/>:
    <DottedCross width={side} height={side}/>;
};
