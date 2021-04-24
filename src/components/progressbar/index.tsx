import { FC } from 'react';
import cn from 'classnames';

export interface ProgressBarProps {
    className: string;
    percentage: number;
}

const RED_HEX_CODE = '#DB1F35';
const YELLOW_HEX_CODE = '#FFC400';
const BLUE_HEX_CODE = '#5489DC';

const ProgressBar: FC<ProgressBarProps> = ({ className, percentage }) => {
    const containerStyle = {
        height: 0,
        width: '100%',
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

const getColor = (percentage: number) => {
    if (percentage > 0 && percentage < 25) {
        return RED_HEX_CODE;
    }
    if (percentage >= 20 && percentage < 70) {
        return YELLOW_HEX_CODE;
    }
    if (percentage >= 70 && percentage <= 100) {
        return BLUE_HEX_CODE;
    }
    return RED_HEX_CODE;
}

export default ProgressBar;