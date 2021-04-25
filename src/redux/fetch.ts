import { AppDispatch } from './store';
import { addProjectAction, addLanguagesAction } from './app/actions';
import { newProjectInitialState } from './initialState';
import { LanguageState, ProjectState, TranslationState } from './appState';

/**
 * This function can be used in the future to create a project on the api
 * Then, according with result of http request, the data can be
 * stored as sucessfully or failed.
 * In this context, there's no failer flow, therefore, this function
 * trigger the action addProjectAction to add a new project
 */
export const createProject = (): ((dispatch: AppDispatch) => Promise<void>) => {
    return dispatch => {
        dispatch(addProjectAction(newProjectInitialState));
        return Promise.resolve();
    };
};

/**
 * This function can be used in the future to save the data on api
 * Then, according with result of http request, the data can be
 * stored as sucessfully or failed.
 * In this context, there's no failer flow, therefore, this function
 * trigger the action addLanguagesAction to add the languages to a
 * specific project id
 * @param projectId
 * @param languages
 */
export const addLanguages = (project: ProjectState, languages: LanguageState[]): ((dispatch: AppDispatch) => Promise<void>) => {
    return dispatch => {
        const translationSections = project.translationSections.slice();
        let lastId = translationSections[translationSections.length - 1].id;
        translationSections.push(...languages.map(language => {
            return {
                id: ++lastId,
                country: language.value,
                language: language.label,
                done: 0,
                wordsToDo: 40000,
                unverified: 0,
            }
        }));
        dispatch(addLanguagesAction(project.id, translationSections));
        return Promise.resolve();
    };
};