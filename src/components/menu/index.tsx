import React, { FC } from 'react';
import './styles.css';
import Button from '../button';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
    selectProjectText,
    selectExpandText,
    selectCollapseText,
    expand,
    collapse,
    addProject
} from '../../slice/menuSlice';


export interface MenuProperties {
}

const Menu: FC<MenuProperties> = () => {
    const dispatch = useAppDispatch();
    const projectText = useAppSelector(selectProjectText);
    const expandText = useAppSelector(selectExpandText);
    const collapseText = useAppSelector(selectCollapseText);

    return (
        <div className="menu">
            <Button
                data-test="button-new-project"
                text={projectText}
                onClick={() => dispatch(addProject())}
                type='primary'
            />
            <Button
                text={expandText}
                onClick={() => dispatch(expand())}
                type='secondary'
            />
            <Button
                text={collapseText}
                onClick={() => dispatch(collapse())}
                type='secondary'
            />
        </div>
    );
};

export default Menu;