import React from 'react';
import Menu from './index';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

const getShallowWrapper = () => {
    return shallow(<Menu />);
};

describe('<Menu />', () => {
    it('render correctly', () => {
        const component = getShallowWrapper();
        expect(toJson(component)).toMatchSnapshot();
    });
});
