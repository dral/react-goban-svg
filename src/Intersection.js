import React from 'react';
import { Corner } from './Corner';
import { Side } from './Side';
import { Cross, KeyPoint } from './Cross';
import { Stone } from './Stone';

const Intersection = (props) => {
  let {
    top,
    bottom,
    right,
    left,
    keypoint,
    colour,
    onClick,
    side = 1
  } = props;

  let cell;
  if ((top && left) || (top && right) || (bottom && left) || (bottom && right)) {
    cell = <Corner {...props}/>;
  } else if (top || bottom || right || left){
    cell = <Side {...props}/>;
  } else if (keypoint) {
    cell = <KeyPoint {...props}/>;
  } else {
    cell = <Cross {...props}/>;
  }

  // Note: `fill: none` will not capture clicks arround the intersection
  return (
    <g onClick={onClick}>
      <rect
        fill="#000"
        opacity="0"
        stroke="none"
        x="0"
        y="0"
        width={side}
        height={side}
      />
      {cell}
      {colour && <Stone {...props}/>}
    </g>
  );
};

export default Intersection;
