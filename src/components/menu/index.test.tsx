import React from 'react';
import Menu from './index';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
// import {
//     expand,
//     collapse,
//     addProject
// } from '../../slice/menuSlice';
// import { useAppSelector, useAppDispatch } from '../../app/hooks';

jest.mock('../../slice/menuSlice');
jest.mock('../../app/hooks');

const mockAction = () => ({ type: 'MOCK' });

const getShallowWrapper = () => {
    return shallow(<Menu />);
};

describe('<Menu />', () => {
    it('render correctly', () => {
        const component = getShallowWrapper();
        expect(toJson(component)).toMatchSnapshot();
    });
    // it('should call onClick method when "New Project" button is clicked', () => {
    //     (addProject as jest.Mock).mockImplementationOnce(mockAction);
    //     // (useAppDispatch as jest.Mock).mockImplementationOnce();
    //     const component = getShallowWrapper();
    //     component.find('[data-test="button-new-project"]').simulate('click');
    //     expect(addProject).toHaveBeenCalledTimes(1);
    // });
});
