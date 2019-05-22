import React from 'react';
import ReactDOM from 'react-dom';
import Static from './Static';

it('Static renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Static />, div);
});