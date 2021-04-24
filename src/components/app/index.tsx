import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { ProjectProperties } from '../../redux/appState';
import styles from './app.module.css';
import Menu from '../menu';
import Project from '../project';
import { AppDispatch } from '../../redux/store';
import { RootState } from '../../redux/reducers';
import { projects } from '../../redux/app/selectors';

export interface AppOwnProps {

}

export interface AppStateProps {
  projects: ProjectProperties[];
}

export type AppProps = AppOwnProps & AppStateProps;

const App: FC<AppProps> = ({ projects }) => {
  const isEmpty = projects.length === 0;
  return (
    <div className={styles.app}>
      <Menu />
      {!isEmpty && projects.map(project => <Project project={project} />)}
    </div>
  );
};

const mapStateToProps = (state: RootState): AppStateProps => ({
  projects: projects(state),
});

export default connect<AppStateProps>(
  mapStateToProps,
)(App);