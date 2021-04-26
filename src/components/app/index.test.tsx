import React from 'react';
import App, { AppProps } from './index';
import Enzyme, { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { appInitialState, projectInitialState } from '../../redux/initialState';
import { ProjectState } from '../../redux/appState';

Enzyme.configure({ adapter: new Adapter() });

const getMountWrapper = (projects: ProjectState[] = []) => {
  const store = configureMockStore()({
    app: {
      ...appInitialState,
      projects
    }
  });
  return mount(
      <Provider store={store}>
          <App />
      </Provider>
  );
};

const getShallowWrapper = (projects: ProjectState[] = []) => {
  const store = configureMockStore()({
    app: {
      ...appInitialState,
      projects
    }
  });
  return shallow(
      <Provider store={store}>
          <App />
      </Provider>
  );
};

describe('<App />', () => {
  it('render correctly when do not have any projects', () => {
    const component = getShallowWrapper();
    expect(toJson(component)).toMatchSnapshot();
  });
  it('render correctly when there are at least one project', () => {
    const component = getShallowWrapper([
      projectInitialState
    ]);
    expect(toJson(component)).toMatchSnapshot();
  });
  it('projects are not loaded when do not have any projects', () => {
    const component = getMountWrapper();
    expect(toJson(component)).toMatchSnapshot();
    const hasProjectsElement = component.find('[data-test="app-projects"]').exists();
    expect(hasProjectsElement).toBeFalsy();
  });
  it('projects are loaded when there are at least one project', () => {
    const component = getMountWrapper([
        projectInitialState
      ]);
    const hasProjectsElement = component.find('[data-test="app-projects"]').exists();
    expect(hasProjectsElement).toBeTruthy();
  });
});
