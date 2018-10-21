import React from 'react';
import Intersection from './Intersection';

const isKeyPoint = (i, j, rows, cols) => {
  if (rows !== cols) return false; // custom size

  let tengenLine = (rows - 1)/2;
  let hoshiLine = (rows < 13) ? 2: 3;
  let itengen = (i === tengenLine);
  let jtengen = (j === tengenLine);
  let ihoshi = (i === hoshiLine || i === rows - 1 - hoshiLine);
  let jhoshi = (j === hoshiLine || j === rows - 1 - hoshiLine);

  // tengen
  if (itengen && jtengen) return true;
  // corner hoshi
  if (ihoshi && jhoshi) return true;
  // side hoshi
  if (rows > 13 && ((ihoshi && jtengen) || (jhoshi && itengen))) return true;
  return false;
}

const Goban = ({
  cols = 19,
  rows = 19,
  click = (i,j) => { console.log(i+1,j+1)},
  width,
  height,
  data,
}) => {
  if (!data) {
    data = [];
    for (let i=0;i<rows;i++){
      data[i] = [];
    }
  }
  let rowArray = [];
  let side = 1;
  for (let i=0; i < rows; i++) {
    let cellArray = [ ];
    for (let j=0; j < cols; j++){
      cellArray.push(
        <g
          id={`point_${i+1}_${j+1}`}
          transform={`translate(${j*side},${i*side})`}
          key={`${i}:${j}`}
          >
          <Intersection
            top={i === 0}
            bottom={i === (rows-1)}
            left={j === 0}
            right={j === (cols-1)}
            keypoint={isKeyPoint(i,j, rows, cols)}
            onClick={() => click(i, j)}
            side={side}
            colour={data[i][j]}
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
  const margin = side/2;
  return (
    <svg
      viewBox={`-${margin} -${margin} ${cols*side + 2*margin} ${rows*side + 2*margin }`}
      width={width}
      height={height}
      >
      <rect className="board"
        x={-margin} y={-margin}
        width={cols*side + 2*margin}
        height={rows*side + 2*margin}
        />
      { rowArray }
    </svg>
  );
}

export default Goban;
