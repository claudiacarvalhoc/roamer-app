import React, { FC } from 'react';
import cn from 'classnames';
import styles from './button.module.css';

export interface ButtonProperties {
    text: string;
    type: 'primary' | 'secondary';
    onClick: () => void;
}

const Button: FC<ButtonProperties> = props => {
    const {
        text,
        type,
        onClick
    } = props;

    return (
        <button className={cn(styles.button, styles[type])} {...type} onClick={onClick}>{text}</button>
    );
};

export default Button;