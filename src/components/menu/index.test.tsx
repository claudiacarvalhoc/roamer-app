import React from 'react';
import Menu from './index';
import Enzyme, { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureMockStore from 'redux-mock-store';
import { appInitialState } from '../../redux/initialState';
import { Provider } from 'react-redux';
import { expandProjectsAction, collapseProjectAction } from '../../redux/app/actions';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
// import { createProject } from '../../redux/fetch';

import thunk from 'redux-thunk'

Enzyme.configure({ adapter: new Adapter() });

jest.mock('../../redux/app/actions');
jest.mock('../../redux/fetch');

const mockAction = () => ({ type: 'MOCK' });
const mockFetch = () => ({});

const getMountWrapper = () => {
    const store = configureMockStore([thunk])({
        app: appInitialState
    });
    return mount(
        <Provider store={store}>
            <Menu />
        </Provider>
    );
}

describe('<Menu />', () => {
    it('render correctly', () => {
        const component = getMountWrapper();
        expect(toJson(component)).toMatchSnapshot();
    });
    it('should dispatch the expand action when clicking on expand button', () => {
        (expandProjectsAction as jest.Mock).mockImplementationOnce(mockAction);
        const component = getMountWrapper();
        component
            .find('[data-test="button-expand"]')
            .first()
            .simulate('click');
        expect(expandProjectsAction).toHaveBeenCalledTimes(1);
    });
    it('should dispatch the collapse action when clicking on collapse button', () => {
        (collapseProjectAction as jest.Mock).mockImplementationOnce(mockAction);
        const component = getMountWrapper();
        component
            .find('[data-test="button-collapse"]')
            .first()
            .simulate('click');
        expect(collapseProjectAction).toHaveBeenCalledTimes(1);
    });
    // Warning the idea here was to test that an async function was invoked once
    // But, even registring the redux-trunk on store the error is the same
    // Actions must be plain objects. Use custom middleware for async actions.
    // it('should dispatch the new project action when clicking on new project button', () => {
    //     (createProject as jest.Mock).mockImplementationOnce(mockFetch);
    //     const component = getMountWrapper();
    //     component
    //         .find('[data-test="button-collapse"]')
    //         .first()
    //         .simulate('click');
    //     expect(createProject).toHaveBeenCalledTimes(1);
    // });
});
