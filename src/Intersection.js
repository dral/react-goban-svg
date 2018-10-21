import React from 'react';
import { Corner, Side, Cross, KeyPoint, Stone } from './Symbols';

const Intersection = (props) => {
  let {top, bottom, right, left, keypoint, colour, onClick, side = 1} = props;

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

  return (
    <g onClick={onClick}>
      <rect fill="#000000" opacity="0" stroke="none" x="0" y="0" width={side} height={side}/>
      {cell}
      {colour && <Stone {...props}/>}
    </g>
  );
};

export default Intersection;
