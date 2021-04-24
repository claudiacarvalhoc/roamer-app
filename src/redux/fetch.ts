import { AppDispatch } from './store';
import { addProjectAction } from './app/actions';
import { newProjectInitialState } from './initialState';

export const createProject = (): ((dispatch: AppDispatch) => Promise<void>) => {
    return dispatch => {
        dispatch(addProjectAction(newProjectInitialState));
        return Promise.resolve();
    };
};