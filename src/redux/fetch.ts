import { AppDispatch } from './store';
import { projectsLoadSuccess } from './app/actions';
import { ProjectProperties } from './appState';
import { addProject, getProjects, resetStorage } from "../storage";
import { projectStub } from "../stubs/project";


export const fecthProjects = (): ((dispatch: AppDispatch) => Promise<void>) => {
    return dispatch => {
        resetStorage();
        addProject(projectStub);
        const projects: ProjectProperties[] = getProjects();
        dispatch(projectsLoadSuccess(projects));
        return Promise.resolve();
    };
};

export const createProject = (): ((dispatch: AppDispatch) => Promise<void>) => {
    return dispatch => {
        addProject(projectStub);
        const projects: ProjectProperties[] = getProjects();
        dispatch(projectsLoadSuccess(projects));
        return Promise.resolve();
    };
};