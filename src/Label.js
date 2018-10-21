import React from 'react';
import dimensions from './dimensions';
import {annotation, light} from './styles';

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
  let style = color === 'B' ? {...annotation, ...light}: annotation;
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
        {...style}
      >{label}</text>
    </svg>
  );
};

export default Label;
// lengthAdjust={longLabel && 'spacingAndGlyphs'}
// textLength={longLabel && size*annotationBlank}
