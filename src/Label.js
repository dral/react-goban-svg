import React from 'react';
import './symbols.css';
/**
  List of graphical Symbols. To be included in the svg definition.
  All units are considered in a 50x50 box centered in the middle point (-25x-25 to 25x25).
*/

const size = 50;
const viewBox = `${-size/2} ${-size/2} ${size} ${size}`;

export const Label = ({
  label,
  side = 1,
  colour,
}) => {
  // let longLabel = label.length > 5;
  return (
    <svg
      viewBox={viewBox}
      width={side}
      height={side}
    >
      <text
        x="0"
        y="0"
        textAnchor='middle'
        alignmentBaseline='central'
        className={colour === 'B' ? 'annotation light': 'annotation'}
      >{label}</text>
    </svg>
  );
};


// lengthAdjust={longLabel && 'spacingAndGlyphs'}
// textLength={longLabel && size*annotationBlank}
