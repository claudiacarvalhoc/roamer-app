import React, { FC } from 'react';
import { ProjectProperties, ProjectTextsProperties } from '../../redux/appState';
import { RootState } from '../../redux/reducers';
// import cn from 'classnames';
import styles from './summary.module.css';
import { projectTexts } from '../../redux/app/selectors';
import { connect } from 'react-redux';
import ProgressBar from '../progressbar';
import Label from '../label';
import Icons from '../icons';


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
            <ProgressBar className={styles.progressBar} percentage={project.done} size={'small'} />
            <div className={styles.line}>
                <Label name={texts.doneText} value={`${project.done}%`} highlighted={false} />
                <Label name={texts.baseWordsText} value={`${project.baseWords}`} highlighted={false} />
            </div>
            <div className={styles.line}>
                <Label name={texts.teamText} value={`${project.team}`} highlighted={true} />
                <Label name={texts.keysText} value={`${project.keys}`} highlighted={false} />
            </div>
            <div className={styles.line}>
                <Label name={texts.qaIssuesText} value={`${project.issues}`} highlighted={true} />
            </div>
            <Icons className={styles.icons} />
        </>
    );
};

const mapStateToProps = (state: RootState): SummaryStateProps => ({
    texts: projectTexts(state),
});

export default connect<SummaryStateProps>(
    mapStateToProps,
)(Summary);
