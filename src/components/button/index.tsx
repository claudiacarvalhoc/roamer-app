import React, { FC } from 'react';
import cn from 'classnames';
import styles from './button.module.css';

export interface ButtonProps {
    text: string;
    type: 'primary' | 'secondary';
    onClick: () => void;
}

const Button: FC<ButtonProps> = ({ text, type, onClick }) => (
    <button
        className={cn(styles.button, styles[type])}
        onClick={onClick}>
        {text}
    </button>
);

export default Button;