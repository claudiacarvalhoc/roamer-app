import { ProjectProperties } from "../slice/projectSlice";
const projectKey = 'projects';

export const resetStorage = (): void => {
    clean(projectKey);
    add(projectKey, []);
};

export const addProject = (project: ProjectProperties): void => {
    const projects: ProjectProperties[] = get(projectKey);
    projects.push(project);
    add(projectKey, projects);
};

export const getProjects = (): ProjectProperties[] => {
    return get(projectKey);
};

const get = (key: string): any => {
    return JSON.parse(localStorage.get(key));
};

const add = (key: string, value: any): void => {
    localStorage.setItem(key, JSON.stringify(value));
};

const clean = (key: string) => {
    localStorage.removeItem(key);
}