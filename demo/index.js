import React from 'react';
import { render} from 'react-dom';
import Goban from '../src';

let [w, b] = ['W', 'B'];

let data = [
  [null,null,null,w],
  [null,b,null,null],
  [null,null,w,null],
  [null,b,null,w],
];

const App = () => (
  <Goban height='400px' rows={4} cols={4} data={data}/>
);

render(<App />, document.getElementById('root'));
