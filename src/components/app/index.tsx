import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { ProjectProperties } from '../../redux/appState';
import styles from './app.module.css';
import Menu from '../menu';
import Project from '../project';
import { AppDispatch } from '../../redux/store';
import { RootState } from '../../redux/reducers';
import { isExpanded, projects } from '../../redux/app/selectors';
import cn from 'classnames';

export interface AppOwnProps {

}

export interface AppStateProps {
  isExpanded: boolean;
  projects: ProjectProperties[];
}

export type AppProps = AppOwnProps & AppStateProps;

const App: FC<AppProps> = ({ isExpanded, projects }) => {
  const isEmpty = projects.length === 0;
  return (
    <div className={styles.app}>
      <Menu />
      {!isEmpty && (
        <div className={cn({
          [styles.collapsed]: !isExpanded
        })}>
          {projects.map(project => <Project className={styles.project} project={project} />)}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state: RootState): AppStateProps => ({
  isExpanded: isExpanded(state),
  projects: projects(state),
});

export default connect<AppStateProps>(
  mapStateToProps,
)(App);