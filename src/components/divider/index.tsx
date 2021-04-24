import { FC } from 'react';
import cn from 'classnames';
import styles from './divider.module.css';

export interface DividerProps {
    className?: string,
}

const Divider: FC<DividerProps> = ({ className }) => (
    <div className={cn(className, styles.divider)} />
);

export default Divider;