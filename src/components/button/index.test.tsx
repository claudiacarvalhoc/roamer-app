import React from 'react';
import Button, { ButtonProperties } from './index';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

const mockOnClick = jest.fn();
const baseProps: ButtonProperties = {
    text: 'Button name',
    type: 'primary',
    onClick: mockOnClick,
};

const getShallowWrapper = (moreProps = {}) => {
    const props = {
        ...baseProps,
        ...moreProps,
    };

    const {
        text,
        type,
        onClick
    } = props;

    return shallow(<Button text={text} type={type} onClick={onClick} />);
};

describe('<Button />', () => {
    it('render correctly with primary type', () => {
        const component = getShallowWrapper();
        expect(toJson(component)).toMatchSnapshot();
    });
    it('render correctly with secondary type', () => {
        const props = {
            type: 'secondary'
        }
        const component = getShallowWrapper(props);
        expect(toJson(component)).toMatchSnapshot();
    });
    it('should call onClick method when button is clicked', () => {
        const component = getShallowWrapper();
        component.simulate('click');
        expect(mockOnClick).toHaveBeenCalled();
    });
});
