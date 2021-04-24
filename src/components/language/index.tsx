import { FC } from 'react';
import styles from './language.module.css';
import { UnitedKingdomFlag, ItalyFlag, RussiaFlag, MecedonianFlag } from './flags';

export interface LanguageProps {
    name: string,
    flag: 'uk' | 'ru' | 'it' | 'mk',
}

const Language: FC<LanguageProps> = ({ name, flag }) => (
    <div className={styles.container}>
        {getFlag(flag)}
        <p className={styles.language}>
            {name}
        </p>
    </div >
);

const getFlag = (flag: string) => {
    if (flag === 'uk') {
        return <UnitedKingdomFlag key={`vector-${flag}`} className={styles.flag} />;
    }
    if (flag === 'it') {
        return <ItalyFlag key={`vector-${flag}`} className={styles.flag} />;
    }
    if (flag === 'ru') {
        return <RussiaFlag key={`vector-${flag}`} className={styles.flag} />;
    }
    if (flag === 'mk') {
        return <MecedonianFlag key={`vector-${flag}`} className={styles.flag} />;
    }
    return <></>;
};


export default Language;