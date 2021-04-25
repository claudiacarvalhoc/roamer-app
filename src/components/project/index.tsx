import React, { FC, useState } from 'react';
import { ProjectState } from '../../redux/appState';
import Summary from '../summary';
import cn from 'classnames';
import styles from './project.module.css';
import Divider from '../divider';
import Card from '../card';
import { RootState } from '../../redux/reducers';
import { connect } from 'react-redux';
import { isExpanded, projectTexts } from '../../redux/app/selectors';
import Button from '../button';
import Modal from '../modal';

export interface ProjectOwnProps {
    className: string;
    project: ProjectState;
}

export interface ProjectStateProps {
    isExpanded: boolean;
    addLanguageText: string;
    modalTitleText: string;
    closeButtonText: string;
    addButtonText: string;
}

export interface ProjectDispatchProps {
}

export type ProjectProps = ProjectOwnProps & ProjectStateProps & ProjectDispatchProps;

const Project: FC<ProjectProps> = (props) => {
    const {
        className,
        isExpanded,
        addLanguageText,
        modalTitleText,
        closeButtonText,
        addButtonText,
        project
    } = props;
    const { translationSections } = project;
    const isTranslationEmpty = translationSections.length === 0;
    const [isModalVisible, setModalVisibility] = useState(false);

    const handleOpenModal = (): void => {
        setModalVisibility(true);
    };
    const handleCloseModal = (): void => {
        setModalVisibility(false);
    };
    const handleAddLanguage = (): void => {
        console.log('trigger event!!');
    };

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
                        <Button className={styles.addcard} text={addLanguageText} type={'secondary'} onClick={handleOpenModal} />
                    </div>
                </>)
            }
            {isModalVisible && (
                <Modal>
                    <>
                        <h2 className={styles.modalTitle} >{modalTitleText}</h2>
                        <div className={styles.modalButtons}>
                            <Button className={styles.modalButton} text={closeButtonText} type={'secondary'} onClick={handleCloseModal} />
                            <Button className={styles.modalButton} text={addButtonText} type={'primary'} onClick={handleAddLanguage} />
                        </div>
                    </>
                </Modal>
            )}
        </div >
    );
};


const mapStateToProps = (state: RootState): ProjectStateProps => {
    const texts = projectTexts(state);
    return {
        addLanguageText: texts.addLanguageText,
        isExpanded: isExpanded(state),
        closeButtonText: texts.closeButtonText,
        addButtonText: texts.addButtonText,
        modalTitleText: texts.modalTitleText,
    }
};

export default connect<ProjectStateProps>(
    mapStateToProps,
)(Project);