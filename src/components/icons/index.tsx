import { FC } from 'react';
import cn from 'classnames';
import styles from './icons.module.css';
import {
    UpVector,
    DownVector,
    CheckVector,
    ProfileVector,
    RateVector,
    CameraVector,
    BookVector,
} from './vectors';

export interface IconsProps {
    className: string;
}

const Icons: FC<IconsProps> = ({ className }) => {
    return (
        <div className={cn(className, styles.container)}>
            <UpVector className={styles.icon} />
            <DownVector className={styles.icon} />
            <CheckVector className={styles.icon} />
            <ProfileVector className={styles.icon} />
            <RateVector className={styles.icon} />
            <CameraVector className={styles.icon} />
            <BookVector className={styles.icon} />
        </div>
    );
};

export default Icons;
