import React, { useCallback } from 'react';
import logo from '../../logo.svg';
import './styles.css';
import Menu from '../menu';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  expand,
  collapse,
  selectAppTitle
} from '../../slice/appSlice';

export default function App() {
  const title = useAppSelector(selectAppTitle);
  const handleClick = useCallback(() => {
    console.log('Clicked!');
  }, []);
  // const dispatch = useAppDispatch();
  return (
    <div className="App">
      <h1>{title}</h1>
      <Menu />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
