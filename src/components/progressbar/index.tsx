import { FC } from 'react';
import cn from 'classnames';

export interface ProgressBarProps {
    className: string;
    percentage: number,
    size: 'medium' | 'small';
}

const RED_HEX_CODE = '#DB1F35';
const YELLOW_HEX_CODE = '#FFC400';
const BLUE_HEX_CODE = '#5489DC';

const SMALL_SIZE = 160;
const MEDIUM_SIZE = 205;

const ProgressBar: FC<ProgressBarProps> = ({ className, percentage, size }) => {
    const containerStyle = {
        height: 0,
        width: `${getSize(size)}px`,
        'border': '2px solid #CFCFCF',
    };
    const progressStyle = {
        width: `${percentage}%`,
        'border': `2px solid ${getColor(percentage)}`,
        'margin-top': '-2px',
        'margin-left': '-2px',
    };

    return (
        <div className={cn(className)}>
            <div style={containerStyle}>
                <div style={progressStyle}></div>
            </div>
        </div>
    );
};

const getSize = (size: string) => size === 'medium' ? MEDIUM_SIZE : SMALL_SIZE;;

const getColor = (percentage: number) => {
    if (percentage > 0 && percentage < 20) {
        return RED_HEX_CODE;
    }
    if (percentage >= 20 && percentage < 60) {
        return YELLOW_HEX_CODE;
    }
    if (percentage >= 60 && percentage <= 100) {
        return BLUE_HEX_CODE;
    }
    return RED_HEX_CODE;
}

export default ProgressBar;