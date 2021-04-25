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
import { addLanguages } from '../../redux/fetch';

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
    languagesOptions: LanguageState[];
}

export interface ProjectDispatchProps {
    addSelectedLanguages?: (project: ProjectState, selectedLanguages: LanguageState[]) => void;
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
        addSelectedLanguages
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
                    <Divider className={styles.divider} />
                    <div className={styles.cards}>
                        {!isTranslationEmpty && translationSections.map(translation => <Card key={`translation_${translation.id}`} className={styles.card} translation={translation} />)}
                        <Button className={styles.addcard} text={addLanguageText} type={'secondary'} onClick={handleOpenModal} />
                    </div>
                </>)
            }
            {isModalVisible && (
                <Modal>
                    <div className={styles.modal}>
                        <h2 className={styles.modalTitle} >{modalTitleText}</h2>
                        <div className={styles.modalSelect}>
                            <Select
                                isMulti
                                options={languagesOptions}
                                onChange={(value, action) => setSelectedLanguages(value)}
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
});

export default connect<ProjectStateProps>(
    mapStateToProps,
    mapDispatchToProps,
)(Project);