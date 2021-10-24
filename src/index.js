import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@nurvus/ui';
import Data from './data/data.json';

const App = () => {
  return <Button>I am Button</Button>;
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);