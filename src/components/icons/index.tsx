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
    vectors: string[];
}

const Icons: FC<IconsProps> = ({ className, vectors }) => (
    <div className={cn(className, styles.container)}>
        {vectors.map(vector => get(vector))}
    </div>
);

const get = (vector: string) => {
    if (vector === 'up') {
        return <UpVector key={`vector-${vector}`} className={styles.icon} />;
    }
    if (vector === 'down') {
        return <DownVector key={`vector-${vector}`} className={styles.icon} />;
    }
    if (vector === 'check') {
        return <CheckVector key={`vector-${vector}`} className={styles.icon} />;
    }
    if (vector === 'user') {
        return <ProfileVector key={`vector-${vector}`} className={styles.icon} />;
    }
    if (vector === 'rate') {
        return <RateVector key={`vector-${vector}`} className={styles.icon} />;
    }
    if (vector === 'camera') {
        return <CameraVector key={`vector-${vector}`} className={styles.icon} />;
    }
    if (vector === 'book') {
        return <BookVector key={`vector-${vector}`} className={styles.icon} />;
    }
    return <></>;
};

export default Icons;
