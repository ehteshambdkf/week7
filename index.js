import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HookControlledButtonState from './Counter';
import EmojeeCounter from './EmojeeCounters';

ReactDOM.render(
  <React.StrictMode>
    <HookControlledButtonState />
    <EmojeeCounter pic='Love' />
    <EmojeeCounter pic='Sad' />
    <EmojeeCounter pic='Like' />
  </React.StrictMode>,
  document.getElementById('root')
);
