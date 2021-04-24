import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { ProjectProperties } from '../../redux/appState';
import './styles.css';
import Menu from '../menu';
import Project from '../project';
import { fecthProjects } from '../../redux/fetch';
import { AppDispatch } from '../../redux/store';
import { RootState } from '../../redux/reducers';
import { isExpanded, projects } from '../../redux/app/selectors';

export interface AppOwnProps {

}

export interface AppStateProps {
  expand: boolean;
  projects: ProjectProperties[];
}

export interface AppDispatchProps {
  fetchProjects: () => void;
}

export type AppProps = AppOwnProps & AppStateProps & AppDispatchProps;

const App: FC<AppProps> = ({ fetchProjects }) => {
  useEffect(() => {
    fetchProjects();
  }, []);


  return (
    <div className="App">
      <Menu />
      <Project />
    </div>
  );
};

const mapStateToProps = (state: RootState): AppStateProps => ({
  expand: isExpanded(state),
  projects: projects(state),
});

const mapDispatchToProps = (
  dispatch: AppDispatch
): AppDispatchProps => ({
  fetchProjects: () => dispatch(fecthProjects())
});

export default connect<AppStateProps, AppDispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(App);