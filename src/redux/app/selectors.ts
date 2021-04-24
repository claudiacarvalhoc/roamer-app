import { MenuTextsState, ProjectState, ProjectTextsState } from "../appState";
import { RootState } from "../reducers";

export const isExpanded = (state: RootState): boolean => state.app.expand;
export const projects = (state: RootState): ProjectState[] => state.app.projects;
export const menuTexts = (state: RootState): MenuTextsState => state.app.MenuTextsState;
export const projectTexts = (state: RootState): ProjectTextsState => state.app.projectTexts;