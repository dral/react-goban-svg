import React from 'react';
import './symbols.css';
/**
  List of graphical Symbols. To be included in the svg definition.
  All units are considered in a 50x50 box centered in the middle point (-25x-25 to 25x25).
*/

const size = 50;
const annotationBlank = .8; // 80%
const stoneRadio = .9; // 90%
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

export const Corner = ({
  side = 1,
  top,
  bottom,
  right,
  left,
  isLabeled
}) => {
  let transform=""; // top left
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
  )
};

export const Side = ({
  side = 1,
  top,
  bottom,
  right,
  left,
  isLabeled
}) => {
  let transform=""; // top
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
  )
};

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
