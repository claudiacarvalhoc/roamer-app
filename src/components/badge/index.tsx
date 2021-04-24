import { FC } from 'react';
import cn from 'classnames';
import styles from './badge.module.css';

export interface BadgeProps {
    className: string;
    name: string;
    type: 'orange' | 'green';
}

const Badge: FC<BadgeProps> = ({ className, name, type = 'orange' }) => (
    <div className={cn(styles.tag, className, {
        [styles.orange]: type === 'orange',
        [styles.green]: type === 'green',
    })}>
        {name}
    </div>
);

export default Badge;