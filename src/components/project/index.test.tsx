import React from 'react';
import Project from './index';
import Enzyme, { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { appInitialState, newProjectInitialState } from '../../redux/initialState';
import { ProjectState } from '../../redux/appState';

Enzyme.configure({ adapter: new Adapter() });

const getMountWrapper = (project: ProjectState) => {
  const store = configureMockStore()({
    app: {
      ...appInitialState,
      projects: [
        project
      ]
    }
  });
  return mount(
      <Provider store={store}>
          <Project className={''} project={project} />
      </Provider>
  );
};

const getShallowWrapper = (project: ProjectState, expand: boolean = true) => {
    const store = configureMockStore()({
        app: {
          ...appInitialState,
          expand,
          projects: [
            project
          ]
        }
      });
      return shallow(
          <Provider store={store}>
              <Project className={''} project={project} />
          </Provider>
      );
};

describe('<Project />', () => {
  it('render correctly', () => {
    const component = getShallowWrapper(newProjectInitialState);
    expect(toJson(component)).toMatchSnapshot();
  });
  it('when is collapsed the divider and translations are not visible', () => {
    const component = getShallowWrapper(newProjectInitialState);
    expect(component.find('[data-test="project-divider"]').exists()).toBeFalsy();
    expect(component.find('[data-test="project-translations"]').exists()).toBeFalsy();
  });
  it('when user clicks on add language the modal must be visible', () => {
    const component = getMountWrapper(newProjectInitialState);
    component.find('[data-test="project-add-language"]').simulate('click');
    expect(component.find('[data-test="project-add-language"]').exists()).toBeTruthy();
  });
});
