import React from 'react';
import Label, { LabelProps } from './index';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

const getShallowWrapper = (props) => {
    return shallow(<Label {...props} />);
};

describe('<Label />', () => {
    it('render correctly with highlighted active', () => {
        const props: LabelProps = {
            name: 'test',
            value: 'test',
            highlighted: true,
        };
        const component = getShallowWrapper(props);
        expect(toJson(component)).toMatchSnapshot();
    });
    it('render correctly with highlighted inactive', () => {
        const props: LabelProps = {
            name: 'test',
            value: 'test',
            highlighted: false,
        };
        const component = getShallowWrapper(props);
        expect(toJson(component)).toMatchSnapshot();
    });
});
