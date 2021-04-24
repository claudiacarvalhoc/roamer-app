import React, { FC } from 'react';
import cn from 'classnames';
import styles from './button.module.css';

export interface ButtonProps {
    className?: string;
    text: string;
    type: 'primary' | 'secondary';
    onClick: () => void;
}

const Button: FC<ButtonProps> = ({ className, text, type, onClick }) => (
    <button
        className={cn(className, styles.button, styles[type])}
        onClick={onClick}>
        {text}
    </button>
);

export default Button;