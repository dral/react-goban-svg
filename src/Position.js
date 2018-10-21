import React from 'react';
import Intersection from './Intersection';
import Stone from './Stone';
import Label from './Label';
import dimensions from './dimensions';

let {
  cellWidht,
  cellLength,
} = dimensions;

const Position = (props) => {
  let {
    color,
    onClick,
    isLabeled,
  } = props;

  // Note: `fill: none` will not capture clicks arround the intersection
  return (
    <g onClick={onClick}>
      <rect
        fill='#000'
        opacity='0'
        stroke='none'
        x='0'
        y='0'
        width={cellWidht}
        height={cellLength}
      />
      <Intersection {...props} />
      {color && <Stone {...props}/>}
      {isLabeled && <Label {...props}/>}
    </g>
  );
};

export default Position;
