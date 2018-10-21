import React from 'react';
import Corner from './Corner';
import Side from './Side';
import Cross from './Cross';

const Intesection = (props) => {
  let {
    top,
    bottom,
    right,
    left,
  } = props;

  let cell;
  if ((top && left) || (top && right) || (bottom && left) || (bottom && right)) {
    cell = <Corner {...props}/>;
  } else if (top || bottom || right || left){
    cell = <Side {...props}/>;
  } else {
    cell = <Cross {...props}/>;
  }
  return cell;
};

export default Intesection;
