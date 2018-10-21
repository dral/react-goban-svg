import dimensions from './dimensions';

let {
  lineSize,
} = dimensions;

export const line = {
  fill: 'none',
  stroke: '#000000',
  strokeWidth: lineSize,
};

export const keypointDot = {
  fill: '#000000',
  stroke: 'none',
};

export const board = {
  fill: '#F2F2F2',
  stroke: 'none',
};

export const whiteStone = {
  fill: '#FAFAFA',
  stroke: '#888888',
  strokeWidth: '0.3',
};

export const blackStone = {
  fill: '#303030',
  stroke: '#000000',
  strokeWidth: '0.3',
};

export const annotation = {
  fontFamily: '\'Roboto\', sans-serif',
  fontWeight: '100',
  fontSize: '12px',
  cursor: 'default',
};

export const light = {
  fill: '#FAFAFA',
};
