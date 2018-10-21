import React from 'react';
import dimensions from './dimensions';

let {
  cellWidht,
  cellLength,
} = dimensions;

const viewBox = `${-cellWidht/2} ${-cellLength/2} ${cellWidht} ${cellLength}`;

const Label = ({
  label,
  color,
}) => {
  // let longLabel = label.length > 5;
  return (
    <svg
      viewBox={viewBox}
      width={cellWidht}
      height={cellLength}
    >
      <text
        x="0"
        y="0"
        textAnchor='middle'
        alignmentBaseline='central'
        className={color === 'B' ? 'annotation light': 'annotation'}
      >{label}</text>
    </svg>
  );
};

export default Label;
// lengthAdjust={longLabel && 'spacingAndGlyphs'}
// textLength={longLabel && size*annotationBlank}
