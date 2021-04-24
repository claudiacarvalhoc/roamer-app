import React from 'react';
import Button, { ButtonProps } from './index';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

const mockOnClick = jest.fn();
const getShallowWrapper = (props: ButtonProps) => shallow(<Button {...props} />);


describe('<Button />', () => {
    it('render correctly with primary type', () => {
        const props: ButtonProps = {
            text: 'Button name',
            type: 'primary',
            onClick: mockOnClick,
        };
        const component = getShallowWrapper(props);
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
        const props: ButtonProps = {
            text: 'Button name',
            type: 'primary',
            onClick: mockOnClick,
        };
        const component = getShallowWrapper(props);
        component.simulate('click');
        expect(mockOnClick).toHaveBeenCalled();
    });
});
