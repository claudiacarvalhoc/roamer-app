import React, { FC, useState } from 'react';
import { LanguageState, ProjectState } from '../../redux/appState';
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
import Select from 'react-select'
import { AppDispatch } from '../../redux/store';
import { addLanguages, removeTranslation } from '../../redux/fetch';

interface ProjectOwnProps {
    className: string;
    project: ProjectState;
}

interface ProjectStateProps {
    isExpanded: boolean;
    addLanguageText: string;
    modalTitleText: string;
    closeButtonText: string;
    addButtonText: string;
    languagesOptions: LanguageState[];
}

interface ProjectDispatchProps {
    addSelectedLanguages: (project: ProjectState, selectedLanguages: LanguageState[]) => void;
    removeTranslation: (projectId: number, translationId: number) => void;
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
        languagesOptions,
        project,
        addSelectedLanguages,
        removeTranslation,
    } = props;
    const { translationSections } = project;
    const isTranslationEmpty = translationSections.length === 0;
    const [isModalVisible, setModalVisibility] = useState(false);
    const [selectedLanguages, setSelectedLanguages] = useState([]);

    const handleOpenModal = (): void => {
        setModalVisibility(true);
    };
    const handleCloseModal = (): void => {
        setModalVisibility(false);
    };
    const handleAddLanguage = (): void => {
        console.log({
            selectedLanguages
        });
        addSelectedLanguages(project, selectedLanguages);
        handleCloseModal();
    };
    return (
        <div className={cn(className, styles.container, {
            [styles.collapsed]: !isExpanded
        })}>
            <Summary project={project} />
            {isExpanded && (
                <>
                    <Divider data-test="project-divider" className={styles.divider} />
                    <div data-test="project-translations" className={styles.cards}>
                        {!isTranslationEmpty && translationSections.map(translation => <Card key={`translation_${translation.id}`} className={styles.card} translation={translation} onDeleteClick={() => removeTranslation(project.id, translation.id)} />)}
                        <Button data-test="project-add-language" className={styles.addcard} text={addLanguageText} type={'secondary'} onClick={handleOpenModal} />
                    </div>
                </>)
            }
            {isModalVisible && (
                <Modal data-test="project-add-language">
                    <div className={styles.modal}>
                        <h2 className={styles.modalTitle} >{modalTitleText}</h2>
                        <div className={styles.modalSelect}>
                            <Select
                                isMulti
                                options={languagesOptions}
                                onChange={(value) => setSelectedLanguages(value)}
                            />
                        </div>
                        <div className={styles.modalButtons}>
                            <Button className={styles.modalButton} text={closeButtonText} type={'secondary'} onClick={handleCloseModal} />
                            <Button className={styles.modalButton} text={addButtonText} type={'primary'} onClick={handleAddLanguage} />
                        </div>
                    </div>
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
        languagesOptions: texts.languagesText,
    }
};

const mapDispatchToProps = (
    dispatch: AppDispatch
): ProjectDispatchProps => ({
    addSelectedLanguages: (project: ProjectState, languages: LanguageState[]) => dispatch(addLanguages(project, languages)),
    removeTranslation: (projectId: number, translationId: number) => dispatch(removeTranslation(projectId, translationId)),
});

export default connect<ProjectStateProps, ProjectDispatchProps>(
    mapStateToProps,
    mapDispatchToProps,
)(Project);
