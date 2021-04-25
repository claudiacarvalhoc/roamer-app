import React, { FC } from 'react';
import cn from 'classnames';
import styles from './card.module.css';
import { projectTexts } from '../../redux/app/selectors';
import { ProjectTextsState, TranslationState } from '../../redux/appState';
import { RootState } from '../../redux/reducers';
import { connect } from 'react-redux';
import Language from '../language';
import ProgressBar from '../progressbar';
import Label from '../label';
import Icons from '../icons';

export interface CardOwnProps {
    className: string;
    translation: TranslationState;
    onDeleteClick: (translationId: number) => void;
}

export interface CardStateProps {
    texts: ProjectTextsState;
}

export type CardProps = CardOwnProps & CardStateProps;

const Card: FC<CardProps> = ({ className, translation, texts, onDeleteClick }) => {
    return (<div className={cn(className, styles.container)}>
        <Language name={translation.language} flag={translation.country} />
        <div onClick={() => onDeleteClick(translation.id)}>
            <Icons className={styles.trash} types={['trash']} />
        </div>
        <ProgressBar className={styles.progressBar} percentage={translation.done} />
        <div className={styles.labels}>
            <Label name={texts.doneText} value={`${translation.done}%`} highlighted={false} />
            <Label name={texts.wordsToDoText} value={`${translation.wordsToDo}`} highlighted={true} />
            <Label name={texts.unverifiedText} value={`${translation.unverified}`} highlighted={true} />
        </div>

    </div>);
};

const mapStateToProps = (state: RootState): CardStateProps => ({
    texts: projectTexts(state),
});

export default connect<CardStateProps>(
    mapStateToProps,
)(Card);