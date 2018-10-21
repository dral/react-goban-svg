# react-goban

React goban (go game board) component.

```js
import React from 'react';
import { render} from 'react-dom';
import Goban from 'react-goban';

let white = 'W';
let black = 'B';

// initialize empty board
let data = [];
let labels = [];
for (let i = 0; i < 19; i++){
  data[i] = [];
  labels[i] = [];
}

// play some moves
data[3][3] = black;
data[3][15] = white;
data[16][3] = black;
data[15][15] = white;
data[2][13] = black;

// annotate
labels[2][11] = 'A';
labels[5][16] = 'B';

const App = () => (
  <Goban
    rows={19}
    cols={19}
    data={data}
    labels={labels}
    click={console.log}/> // accepts: (i, j) => { do something }
);

render(<App />, document.getElementById('root'));
```
![Sample board](./demo/board.svg)
