import React from 'react';
import Summary from './index';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { appInitialState, newProjectInitialState } from '../../redux/initialState';
import { ProjectState } from '../../redux/appState';

const getShallowWrapper = (project: ProjectState) => {
    const store = configureMockStore()({
        app: {
          ...appInitialState,
          projects: [
            project
          ]
        }
      });
      return shallow(
          <Provider store={store}>
              <Summary project={project} />
          </Provider>
      );
};

describe('<Summary />', () => {
  it('render correctly', () => {
    const component = getShallowWrapper(newProjectInitialState);
    expect(toJson(component)).toMatchSnapshot();
  });
  it('when badges has elements, the badges are visible', () => {
    const project = {
      ... newProjectInitialState,
      badges: [],
    };
    const component = getShallowWrapper(project);
    expect(component.find('[data-test="summary-badges"]').exists()).toBeFalsy();
  });
  it('when badges is empty, the badges are not visible', () => {
    const project = {
      ... newProjectInitialState,
      badges: [],
    };
    const component = getShallowWrapper(project);
    expect(component.find('[data-test="summary-badges"]').exists()).toBeFalsy();
  });
});
