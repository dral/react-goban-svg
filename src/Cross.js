import React from 'react';
import dimensions from './dimensions';
import {line} from './styles';

let {
  cellWidht,
  cellLength,
  keyPointDiameter,
} = dimensions;

const annotationBlank = .8; // 80%
const viewBox = `${-cellWidht/2} ${-cellLength/2} ${cellWidht} ${cellLength}`;

const PlainCross = (props) => (
  <svg viewBox={viewBox}
    {...props}
  >
    <line className='line' {...line} x1='0' y1={`${-cellLength/2}`} x2='0' y2={`${cellLength/2}`}/>
    <line className='line' {...line} x1={`${-cellWidht/2}`} y1='0' x2={`${cellWidht/2}`} y2='0'/>
  </svg>
);

const EmptyCross = (props) => (
  <svg viewBox={viewBox}
    {...props}
  >
    <line className='line' {...line} x1={`${annotationBlank*cellWidht/2}`} y1='0' x2={`${cellWidht/2}`} y2='0'/>
    <line className='line' {...line} x1='0' y1={`${annotationBlank*cellLength/2}`} x2='0' y2={`${cellLength/2}`}/>
    <line className='line' {...line} x1={`${-cellWidht/2}`} y1='0' x2={`${-annotationBlank*cellWidht/2}`} y2='0'/>
    <line className='line' {...line} x1='0' y1={`${-cellLength/2}`} x2='0' y2={`${-annotationBlank*cellLength/2}`}/>
  </svg>
);

const DottedCross = (props) => (
  <svg viewBox={viewBox}
    {...props}
  >
    <line className='line' {...line} x1='0' y1={`${-cellLength/2}`} x2='0' y2={`${cellLength/2}`}/>
    <line className='line' {...line} x1={`${-cellWidht/2}`} y1='0' x2={`${cellWidht/2}`} y2='0'/>
    <circle className='keypointDot' cx='0' cy='0' r={keyPointDiameter / 2}/>
  </svg>
);

const Cross = ({
  isLabeled,
  keypoint,
}) => {
  if (isLabeled) {
    return <EmptyCross width={cellWidht} height={cellLength}/>;
  } else if (keypoint) {
    return <DottedCross width={cellWidht} height={cellLength}/>;
  } else {
    return <PlainCross width={cellWidht} height={cellLength}/>;
  }
};

export default Cross;
