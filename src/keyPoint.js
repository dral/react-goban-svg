// Determine if a position is a key point (tengen or hoshi)

const isKeyPoint = (i, j, rows, cols) => {
  if (rows !== cols || rows % 2 === 0) return false; // custom size
  let tengenLine = (rows - 1) / 2;
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
};

export default isKeyPoint;
