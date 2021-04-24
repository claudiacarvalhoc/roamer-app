import { MenuTexts, ProjectProperties, ProjectTextsProperties } from "../appState";
import { RootState } from "../reducers";

export const isExpanded = (state: RootState): boolean => state.app.expand;
export const projects = (state: RootState): ProjectProperties[] => state.app.projects;
export const menuTexts = (state: RootState): MenuTexts => state.app.menuTexts;
export const projectTexts = (state: RootState): ProjectTextsProperties => state.app.projectTexts;