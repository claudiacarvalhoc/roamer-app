import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { ProjectProperties } from '../../redux/appState';
import styles from './app.module.css';
import Menu from '../menu';
import Project from '../project';
import { AppDispatch } from '../../redux/store';
import { RootState } from '../../redux/reducers';
import { isExpanded, projects } from '../../redux/app/selectors';

export interface AppOwnProps {

}

export interface AppStateProps {
  expand: boolean;
  projects: ProjectProperties[];
}

export type AppProps = AppOwnProps & AppStateProps;

const App: FC<AppProps> = ({ projects }) => {
  console.log('render app');
  const isEmpty = projects.length === 0;
  console.log({ isEmpty, projects });

  return (
    <div className={styles.app}>
      <Menu />
      {!isEmpty && projects.map(project => <Project project={project} />)}
    </div>
  );
};

const mapStateToProps = (state: RootState): AppStateProps => ({
  expand: isExpanded(state),
  projects: projects(state),
});

export default connect<AppStateProps>(
  mapStateToProps,
)(App);