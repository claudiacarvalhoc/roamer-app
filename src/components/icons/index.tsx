import { FC } from 'react';
import cn from 'classnames';
import styles from './icons.module.css';
import {
    UpIcon,
    DownIcon,
    CheckIcon,
    ProfileIcon,
    RateIcon,
    CameraIcon,
    BookIcon,
    TrashIcon,
} from './icons';

export interface IconsProps {
    className: string;
    types: string[];
}

const Icons: FC<IconsProps> = ({ className, types }) => (
    <div className={className}>
        {!!types && types.map(type => get(type))}
    </div>
);

const get = (type: string) => {
    if (type === 'up') {
        return <UpIcon key={`type-${type}`} className={styles.icon} />;
    }
    if (type === 'down') {
        return <DownIcon key={`type-${type}`} className={styles.icon} />;
    }
    if (type === 'check') {
        return <CheckIcon key={`type-${type}`} className={styles.icon} />;
    }
    if (type === 'user') {
        return <ProfileIcon key={`type-${type}`} className={styles.icon} />;
    }
    if (type === 'rate') {
        return <RateIcon key={`type-${type}`} className={styles.icon} />;
    }
    if (type === 'camera') {
        return <CameraIcon key={`type-${type}`} className={styles.icon} />;
    }
    if (type === 'book') {
        return <BookIcon key={`type-${type}`} className={styles.icon} />;
    }
    if (type === 'trash') {
        return <TrashIcon key={`type-${type}`} className={styles.icon} />;
    }
    return <></>;
};

export default Icons;
