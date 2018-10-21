import React from 'react';
import { render} from 'react-dom';
import Goban from '../src';
import { values } from '../src/Stone';

let {white, black} = values;
let data = [];
let labels = [];

for (let i = 0; i < 19; i++){
  data[i] = [];
  labels[i] = [];
}

data[3][3] = black;
data[3][15] = white;
data[16][3] = black;
data[15][15] = white;
data[2][13] = black;

labels[2][11] = 'A';
labels[5][16] = 'B';

const App = () => (
  <Goban rows={19} cols={19} data={data} labels={labels} click={console.log}/>
);

render(<App />, document.getElementById('root'));
