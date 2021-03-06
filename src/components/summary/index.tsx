import React, { FC } from 'react';
import { ProjectState, ProjectTextsState } from '../../redux/appState';
import { RootState } from '../../redux/reducers';
import styles from './summary.module.css';
import { projectTexts } from '../../redux/app/selectors';
import { connect } from 'react-redux';
import ProgressBar from '../progressbar';
import Label from '../label';
import Icons from '../icons';
import Badge from '../badge';

interface SummaryOwnProps {
    project: ProjectState;
}

interface SummaryStateProps {
    texts: ProjectTextsState;
}

type SummaryProps = SummaryOwnProps & SummaryStateProps;

const Summary: FC<SummaryProps> = ({ project, texts }) => {
    const hasBadges = project.badges.length > 0;
    return (
        <div className={styles.container}>
            <h1 className={styles.summaryTitle}>{project.name}</h1>
            <ProgressBar className={styles.progressBar} percentage={project.done} />
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
            <div className={styles.iconsLines}>
                <Icons className={styles.icons} types={project.icons} />
            </div>
            {hasBadges && (
                <div data-test="summary-badges" className={styles.badgesLine}>
                    {project.badges.map(badge => <Badge key={`badge-${badge.name}`} className={styles.badge} name={badge.name} type={badge.type} />)}
                </div>
            )}
        </div>
    );
};

const mapStateToProps = (state: RootState): SummaryStateProps => ({
    texts: projectTexts(state),
});

export default connect<SummaryStateProps>(
    mapStateToProps,
)(Summary);
