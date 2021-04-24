import { FC } from 'react';

export interface ProgressbarProps {
    percentage,
    size: 'medium' | 'small';
}

const ProgressBar: FC<ProgressbarProps> = ({ percentage, size }) => {
    let width = 160;
    if (size === 'small') {
        width = 160;
    } else if (size === 'medium') {
        width = 205;
    }
    const containerStyle = {
        height: 0,
        width: `${width}px`,
        'border': '2px solid #CFCFCF',
    };

    let bgcolor = "#DB1F35";
    if (percentage < 20) {
        bgcolor = '#DB1F35'; // red
    } else if (percentage < 40) {
        bgcolor = '#FFC400'; // yellow
    } else if (percentage > 80) {
        bgcolor = '#5489DC'; // blue
    }

    const progressStyle = {
        width: `${percentage}%`,
        'border': `2px solid ${bgcolor}`,
        'margin-top': '-2px',
        'margin-left': '-2px',
    };

    return (
        <div style={containerStyle}>
            <div style={progressStyle}></div>
        </div>
    );
};

export default ProgressBar;