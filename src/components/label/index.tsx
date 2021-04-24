import { FC } from 'react';
import cn from 'classnames';
import styles from './label.module.css';

export interface LabelProps {
    name: string,
    value: string,
    highlighted: boolean,
}

const Label: FC<LabelProps> = ({ name, value, highlighted }) => {
    return (
        <div className={styles.label}>
            <p className={styles.name}>
                {name}
            </p>
            <p className={cn(styles.value,
                {
                    [styles.highlighted]: highlighted
                })}>
                {value}
            </p>
        </div >
    );
};

export default Label;