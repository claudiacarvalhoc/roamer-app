import React, { useCallback, useEffect } from 'react';
import './styles.css';
import Menu from '../menu';
import Project from '../project';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  expand,
  collapse,
  getProjectsAsync,
} from '../../slice/appSlice';

export default function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    console.log('invoke getProjectsAsync');
    dispatch(getProjectsAsync);
  }, []);

  const handleClick = useCallback(() => {
    console.log('Clicked!');
  }, []);
  return (
    <div className="App">
      <Menu />
      <Project />
    </div>
  );
}
