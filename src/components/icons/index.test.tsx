import React from 'react';
import Icons, { IconsProps } from './index';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

const getShallowWrapper = (props) => {
    return shallow(<Icons {...props} />);
};

describe('<Icons />', () => {
    it('render correctly', () => {
        const props: IconsProps = {
            className: 'test',
            types: ['up', 'down', 'check', 'user', 'rate', 'camera', 'book'],
        };
        const component = getShallowWrapper(props);
        expect(toJson(component)).toMatchSnapshot();
    });
    it('render correctly when types are not defined', () => {
        const props: IconsProps = {
            className: 'test',
            types: null,
        };
        const component = getShallowWrapper(props);
        expect(toJson(component)).toMatchSnapshot();
    });
});
