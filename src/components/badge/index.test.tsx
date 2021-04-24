import React from 'react';
import Badge, { BadgeProps } from './index';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

const getShallowWrapper = (props) => {
    return shallow(<Badge {...props} />);
};

describe('<Badge />', () => {
    it('render correctly when type is orange', () => {
        const props: BadgeProps = {
            className: 'test',
            name: 'android',
            type: 'orange',
        };
        const component = getShallowWrapper(props);
        expect(toJson(component)).toMatchSnapshot();
    });
    it('render correctly when type is green', () => {
        const props: BadgeProps = {
            className: 'test',
            name: 'android',
            type: 'green',
        };
        const component = getShallowWrapper(props);
        expect(toJson(component)).toMatchSnapshot();
    });
});
