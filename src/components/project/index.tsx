import React, { FC } from 'react';
import { ProjectProperties } from '../../redux/appState';
import Summary from '../summary';
import cn from 'classnames';
import styles from './project.module.css';
import Language from '../language';
import Divider from '../divider';
import Card from '../card';
import { StringLiteral } from 'typescript';
import { RootState } from '../../redux/reducers';
import { connect } from 'react-redux';
import { isExpanded, projectTexts } from '../../redux/app/selectors';
import Button from '../button';

export interface ProjectOwnProps {
    className: string;
    project: ProjectProperties;
}

export interface ProjectStateProps {
    isExpanded: boolean;
    addLanguageText: string;
}

export interface ProjectDispatchProps {
}

export type ProjectProps = ProjectOwnProps & ProjectStateProps & ProjectDispatchProps;

const Project: FC<ProjectProps> = ({ className, isExpanded, addLanguageText, project }) => {
    const { translationSections } = project;
    const isTranslationEmpty = translationSections.length === 0;
    return (
        <div className={cn(className, styles.container, {
            [styles.collapsed]: !isExpanded
        })}>
            <Summary project={project} />
            {isExpanded && (
                <>
                    <Divider className={styles.divider} />
                    <div className={styles.cards}>
                        {!isTranslationEmpty && translationSections.map(translation => <Card key={`translation_${translation.id}`} className={styles.card} translation={translation} />)}
                        <Button className={styles.addcard} text={addLanguageText} type={'secondary'} onClick={() => console.log('add new language')} />
                    </div>
                </>)
            }
        </div >
    );
};


const mapStateToProps = (state: RootState): ProjectStateProps => ({
    addLanguageText: projectTexts(state).addLanguageText,
    isExpanded: isExpanded(state),
});

export default connect<ProjectStateProps>(
    mapStateToProps,
)(Project);