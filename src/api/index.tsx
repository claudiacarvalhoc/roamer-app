import { ProjectProperties } from "../slice/projectSlice";
import { addProject, getProjects, resetStorage } from "../storage";
import { projectStub } from "../stubs/project";

export const initialSetup = (): void => {
    resetStorage();
    addProject(projectStub);
};

export const fetchProjects = (): ProjectProperties[] => {
    return getProjects();
};

