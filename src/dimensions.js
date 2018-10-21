// https://en.wikipedia.org/wiki/Go_equipment#Board

const dimensions = {
  whiteStoneDiameter: 22.5,
  blackStoneDiameter: 22.55, // slightly larger to compensate
  lineSize: 1,
  width: 22,
  length: 23.7,
  keyPointDiameter: 4,
};

dimensions.cellWidht = dimensions.width + dimensions.lineSize;
dimensions.cellLength = dimensions.length + dimensions.lineSize;

export default dimensions;
