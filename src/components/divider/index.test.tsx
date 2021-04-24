import React from 'react';
import Divider, { DividerProps } from './index';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

const getShallowWrapper = (props) => {
    return shallow(<Divider {...props} />);
};

describe('<Divider />', () => {
    it('render correctly', () => {
        const props: DividerProps = {
            className: 'test',
        };
        const component = getShallowWrapper(props);
        expect(toJson(component)).toMatchSnapshot();
    });
});
