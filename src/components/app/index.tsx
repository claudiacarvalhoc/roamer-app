import React, { FC } from 'react';
import { connect } from 'react-redux';
import { ProjectState } from '../../redux/appState';
import styles from './app.module.css';
import Menu from '../menu';
import Project from '../project';
import { RootState } from '../../redux/reducers';
import { isExpanded, projects } from '../../redux/app/selectors';
import cn from 'classnames';

export interface AppProps {
  isExpanded: boolean;
  projects: ProjectState[];
}


const App: FC<AppProps> = ({ isExpanded, projects = [] }) => {
  const isEmpty = !!projects && projects.length === 0;
  return (
    <div className={styles.app}>
      <Menu />
      {!isEmpty && (
        <div
          data-test="app-projects"
          className={cn({
          [styles.collapsed]: !isExpanded
        })}>
          {projects.map(project => <Project key={`project-${project.id}`} className={styles.project} project={project} />)}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state: RootState): AppProps => ({
  isExpanded: isExpanded(state),
  projects: projects(state),
});

export default connect<AppProps>(
  mapStateToProps,
)(App);