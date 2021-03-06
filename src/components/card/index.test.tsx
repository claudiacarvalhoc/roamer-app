import React from 'react';
import Card, { CardProps } from './index';
import configureMockStore from 'redux-mock-store';
import Enzyme, { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import { appInitialState } from '../../redux/initialState';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });
const getMountWrapper = (props) => {
    const store = configureMockStore()({
        app: appInitialState
    });
    return mount(
        <Provider store={store}>
            <Card {...props} />
        </Provider>
    );
};

const props: CardProps = {
    className: 'test',
    translation: {
        id: 1,
        country: 'uk',
        language: 'English',
        done: 10,
        wordsToDo: 50000,
        unverified: 30000
    },
    texts: {
        doneText: 'DONE',
        baseWordsText: 'BASE WORDS',
        teamText: 'TEAM',
        keysText: 'KEYS',
        qaIssuesText: 'QA ISSUES',
        wordsToDoText: 'WORDS TO DO',
        unverifiedText: 'UNVERIFIED',
        addLanguageText: 'Add language',
        modalTitleText: 'Add Languages',
        closeButtonText: 'Close',
        addButtonText: 'Add',
    }
};

describe('<Card />', () => {
    it('render correctly', () => {
        const component = getMountWrapper(props);
        expect(toJson(component)).toMatchSnapshot();
    });
});
