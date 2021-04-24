import React, { FC } from 'react';
import { ProjectProperties, ProjectTextsProperties } from '../../redux/appState';
import { RootState } from '../../redux/reducers';
// import cn from 'classnames';
import styles from './summary.module.css';
import { projectTexts } from '../../redux/app/selectors';
import { connect } from 'react-redux';
import ProgressBar from '../progressbar';


export interface SummaryOwnProps {
    project: ProjectProperties;
}

export interface SummaryStateProps {
    texts: ProjectTextsProperties;
}

type SummaryProps = SummaryOwnProps & SummaryStateProps;

const Summary: FC<SummaryProps> = ({ project, texts }) => {
    return (
        <>
            <h1 className={styles.summaryTitle}>{project.name}</h1>
            <ProgressBar percentage={project.done} size={'small'} />

        </>
    );
};

const mapStateToProps = (state: RootState): SummaryStateProps => ({
    texts: projectTexts(state),
});

export default connect<SummaryStateProps>(
    mapStateToProps,
)(Summary);
