import React from 'react';
import Position from './Position';
import isKeyPoint from './keyPoint';
import { board } from './styles';
import dimensions from './dimensions';
//import './symbols.css';

let {
  cellWidht,
  cellLength,
} = dimensions;

const Goban = ({
  cols = 19,
  rows = 19,
  click = () => {},
  data,
  labels,
  version='1.1',
  baseProfile='full',
  xmlns='http://www.w3.org/2000/svg',
  ...props
}) => {
  if (!data) {
    data = [];
    for (let i=0;i<rows;i++){
      data[i] = [];
    }
  }
  if (!labels) {
    labels = [];
    for (let i=0;i<rows;i++){
      labels[i] = [];
    }
  }
  props = {version, baseProfile, xmlns, ...props};
  let rowArray = [];
  for (let i=0; i < rows; i++) {
    let cellArray = [ ];
    for (let j=0; j < cols; j++){
      cellArray.push(
        <g
          id={`point_${i+1}_${j+1}`}
          transform={`translate(${j*cellWidht},${i*cellLength})`}
          key={`${i}:${j}`}
        >
          <Position
            top={i === 0}
            bottom={i === (rows-1)}
            left={j === 0}
            right={j === (cols-1)}
            keypoint={isKeyPoint(i,j, rows, cols)}
            onClick={() => click(i, j)}
            color={data[i][j]}
            isLabeled={labels[i][j]}
            label={labels[i][j]}
          />
        </g>
      );
    }

    rowArray.push(
      <g
        id={`line_${i+1}`}
        key={i} >
        { cellArray }
      </g>
    );
  }
  let marginX = cellWidht / 2;
  let marginY = cellLength / 2;
  let width = cols * cellWidht + 2 * marginX;
  let height = rows * cellLength + 2 * marginY;
  return (
    <svg
      {...props}
      viewBox={`-${marginX} -${marginY} ${width} ${height}`}
    >
      <rect className="board"
        {...board}
        x={-marginX} y={-marginY}
        width={cols * cellWidht + 2 * marginX}
        height={rows * cellLength + 2 * marginY}
      />
      { rowArray }
    </svg>
  );
};

export default Goban;
