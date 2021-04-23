import { AppDispatch } from './store';
import { initialSetup, fetchProjects } from '../api';
import { projectsLoadSuccess } from './app/actions';
import { ProjectProperties } from './appState';


export const getProjects = (): ((dispatch: AppDispatch) => Promise<void>) => {
    return dispatch => {
        initialSetup();
        const projects: ProjectProperties[] = fetchProjects();

        dispatch(projectsLoadSuccess(projects));

        return Promise.resolve();
    };
};