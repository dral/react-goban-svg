import React from 'react';
import { render} from 'react-dom';
import Goban from '../src';

let [w, b] = ['W', 'B'];

let data = [
  [null,null,null,w,null,null,null,w,null,null,null,w,null,null,null,w, null,null,null,w],
  [null,b,null,null,null,b,null,null,null,b,null,null,null,b,null,null, null,b,null,null],
  [null,null,w,null,null,null,w,null,null,null,w,null,null,null,w,null, null,null,w,null],
  [null,b,null,w,null,b,null,w,null,b,null,w,null,b,null,w, null,b,null,w],
  [null,null,null,w,null,null,null,w,null,null,null,w,null,null,null,w, null,null,null,w],
  [null,b,null,null,null,b,null,null,null,b,null,null,null,b,null,null, null,b,null,null],
  [null,null,w,null,null,null,w,null,null,null,w,null,null,null,w,null, null,null,w,null],
  [null,b,null,w,null,b,null,w,null,b,null,w,null,b,null,w, null,b,null,w],
  [null,null,null,w,null,null,null,w,null,null,null,w,null,null,null,w, null,null,null,w],
  [null,b,null,null,null,b,null,null,null,b,null,null,null,b,null,null, null,b,null,null],
  [null,null,w,null,null,null,w,null,null,null,w,null,null,null,w,null, null,null,w,null],
  [null,b,null,w,null,b,null,w,null,b,null,w,null,b,null,w, null,b,null,w],
  [null,null,null,w,null,null,null,w,null,null,null,w,null,null,null,w, null,null,null,w],
  [null,b,null,null,null,b,null,null,null,b,null,null,null,b,null,null, null,b,null,null],
  [null,null,w,null,null,null,w,null,null,null,w,null,null,null,w,null, null,null,w,null],
  [null,b,null,w,null,b,null,w,null,b,null,w,null,b,null,w, null,b,null,w],
  [null,null,null,w,null,null,null,w,null,null,null,w,null,null,null,w, null,null,null,w],
  [null,b,null,null,null,b,null,null,null,b,null,null,null,b,null,null, null,b,null,null],
  [null,null,w,null,null,null,w,null,null,null,w,null,null,null,w,null, null,null,w,null],
];

let labels = [
  ['long',null,null,null,'long',null,null,null,'long',null,null,null,'long',null,null,null,],
  ['1',null,null,null,'1',null,null,null,'1',null,null,null,'1',null,null,null,],
  [null,null,'A',null,null,null,'A',null,null,null,'A',null,null,null,'A',null,],
  [null,'42','╳',null,null,'42','╳',null,null,'42','╳',null,null,'42','╳',null,],
  ['long',null,null,null,'long',null,null,null,'long',null,null,null,'long',null,null,null,],
  ['1',null,null,null,'1',null,null,null,'1',null,null,null,'1',null,null,null,],
  [null,null,'A',null,null,null,'A',null,null,null,'A',null,null,null,'A',null,],
  [null,'42','╳',null,null,'42','╳',null,null,'42','╳',null,null,'42','╳',null,],
  ['long',null,null,null,'long',null,null,null,'long',null,null,null,'long',null,null,null,],
  ['1',null,null,null,'1',null,null,null,'1',null,null,null,'1',null,null,null,],
  [null,null,'A',null,null,null,'A',null,null,null,'A',null,null,null,'A',null,],
  [null,'42','╳',null,null,'42','╳',null,null,'42','╳',null,null,'42','╳',null,],
  ['long',null,null,null,'long',null,null,null,'long',null,null,null,'long',null,null,null,],
  ['1',null,null,null,'1',null,null,null,'1',null,null,null,'1',null,null,null,],
  [null,null,'A',null,null,null,'A',null,null,null,'A',null,null,null,'A',null,],
  [null,'42','╳',null,null,'42','╳',null,null,'42','╳',null,null,'42','╳',null,],
  ['long',null,null,null,'long',null,null,null,'long',null,null,null,'long',null,null,null,],
  ['1',null,null,null,'1',null,null,null,'1',null,null,null,'1',null,null,null,],
  [null,null,'A',null,null,null,'A',null,null,null,'A',null,null,null,'A',null,],
];

const App = () => (
  <Goban height='400px' rows={19} cols={19} data={data} labels={labels}/>
);

render(<App />, document.getElementById('root'));
