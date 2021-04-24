import React from 'react';
import ProgressBar, { ProgressBarProps } from './index';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

const getShallowWrapper = (props) => {
    return shallow(<ProgressBar {...props} />);
};

describe('<ProgressBar />', () => {
    it('render correctly with small size', () => {
        const props: ProgressBarProps = {
            className: 'test',
            percentage: 100,
            size: 'small'
        };
        const component = getShallowWrapper(props);
        expect(toJson(component)).toMatchSnapshot();
    });
    it('render correctly with medium size', () => {
        const props: ProgressBarProps = {
            className: 'test',
            percentage: 100,
            size: 'medium'
        };
        const component = getShallowWrapper(props);
        expect(toJson(component)).toMatchSnapshot();
    });
    it('render correctly with percentage lower then 20', () => {
        const props: ProgressBarProps = {
            className: 'test',
            percentage: 10,
            size: 'small'
        };
        const component = getShallowWrapper(props);
        expect(toJson(component)).toMatchSnapshot();
    });
    it('render correctly with percentage lower then 40', () => {
        const props: ProgressBarProps = {
            className: 'test',
            percentage: 35,
            size: 'medium'
        };
        const component = getShallowWrapper(props);
        expect(toJson(component)).toMatchSnapshot();
    });
    it('render correctly with percentage greater then 80', () => {
        const props: ProgressBarProps = {
            className: 'test',
            percentage: 90,
            size: 'medium'
        };
        const component = getShallowWrapper(props);
        expect(toJson(component)).toMatchSnapshot();
    });
});
