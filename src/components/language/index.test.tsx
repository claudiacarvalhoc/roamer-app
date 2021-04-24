import React from 'react';
import Language, { LanguageProps } from './index';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

const getShallowWrapper = (props) => {
    return shallow(<Language {...props} />);
};

describe('<Language />', () => {
    it('render correctly when flag is uk', () => {
        const props: LanguageProps = {
            name: 'English',
            flag: 'uk',
        };
        const component = getShallowWrapper(props);
        expect(toJson(component)).toMatchSnapshot();
    });
    it('render correctly when flag is ru', () => {
        const props: LanguageProps = {
            name: 'Russia',
            flag: 'ru',
        };
        const component = getShallowWrapper(props);
        expect(toJson(component)).toMatchSnapshot();
    });
    it('render correctly when flag is it', () => {
        const props: LanguageProps = {
            name: 'Italian',
            flag: 'it',
        };
        const component = getShallowWrapper(props);
        expect(toJson(component)).toMatchSnapshot();
    });
    it('render correctly when flag is mk', () => {
        const props: LanguageProps = {
            name: 'Macedonian',
            flag: 'mk',
        };
        const component = getShallowWrapper(props);
        expect(toJson(component)).toMatchSnapshot();
    });

});
