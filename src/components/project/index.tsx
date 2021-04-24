import React, { FC } from 'react';
import { ProjectProperties } from '../../redux/appState';
import Summary from '../summary';
// import cn from 'classnames';
// import styles from './project.module.css';


export interface ProjectOwnProps {
    project: ProjectProperties;
}

export interface ProjectStateProps {
}

export interface ProjectDispatchProps {
}

const Project: FC<ProjectOwnProps> = ({ project }) => {

    return (
        <Summary project={project} />
    );
};

export default Project;