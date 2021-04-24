import React, { FC } from 'react';
import { ProjectProperties } from '../../redux/appState';
import Summary from '../summary';
// import cn from 'classnames';
import styles from './project.module.css';
import Language from '../language';
import Divider from '../divider';

export interface ProjectOwnProps {
    project: ProjectProperties;
}

export interface ProjectStateProps {
}

export interface ProjectDispatchProps {
}

const Project: FC<ProjectOwnProps> = ({ project }) => {

    return (
        <div className={styles.container}>
            <div className={styles.summary}>
                <Summary project={project} />
            </div>
            <Divider className={styles.divider} />
            <div className={styles.cards}>
                <Language name={'English'} flag={'uk'} />
                <Language name={'Italian'} flag={'it'} />
                <Language name={'Russian'} flag={'ru'} />
                <Language name={'Macedonian'} flag={'mk'} />
            </div>
        </div>
    );
};

export default Project;