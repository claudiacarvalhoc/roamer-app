import { ProjectProperties } from "../appState";
import { RootState } from "../reducers";

export const isExpanded = (state: RootState): boolean => state.app.expand;
export const projects = (state: RootState): ProjectProperties[] => state.app.projects;