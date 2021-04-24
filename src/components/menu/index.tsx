import React, { FC } from 'react';
import './styles.css';
import Button from '../button';
import { menuTexts } from '../../redux/app/selectors';
import { RootState } from '../../redux/reducers';
import { connect } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { expandProjectsAction, collapseProjectAction } from '../../redux/app/actions';
import { createProject } from '../../redux/fetch';

export interface MenuOwnProps {

}

export interface MenuStateProps {
    projectText: string;
    expandText: string;
    collapseText: string;
}

export interface MenuDispatchProps {
    addProject: () => void;
    expand: () => void;
    collapse: () => void;
}

export type MenuProps = MenuOwnProps & MenuStateProps & MenuDispatchProps;

const Menu: FC<MenuProps> = ({
    projectText,
    expandText,
    collapseText,
    addProject,
    expand,
    collapse,
}) => {
    return (
        <div className="menu">
            <Button
                data-test="button-new-project"
                text={projectText}
                onClick={() => addProject()}
                type='primary'
            />
            <Button
                data-test="button-expand"
                text={expandText}
                onClick={() => expand()}
                type='secondary'
            />
            <Button
                data-test="button-collapse"
                text={collapseText}
                onClick={() => collapse()}
                type='secondary'
            />
        </div>
    );
};

const mapStateToProps = (state: RootState): MenuStateProps => {
    const texts = menuTexts(state);
    return {
        projectText: texts.projectText,
        expandText: texts.expandText,
        collapseText: texts.collapseText
    }
};

const mapDispatchToProps = (
    dispatch: AppDispatch
): MenuDispatchProps => ({
    addProject: () => dispatch(createProject()),
    expand: () => dispatch(expandProjectsAction()),
    collapse: () => dispatch(collapseProjectAction()),
});

export default connect<MenuStateProps, MenuDispatchProps>(
    mapStateToProps,
    mapDispatchToProps
)(Menu);