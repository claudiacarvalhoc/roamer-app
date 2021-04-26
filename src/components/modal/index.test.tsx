import React from 'react';
import Modal from './index';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

const getShallowWrapper = () => {
    return shallow(
    <Modal>
        <p>{'Welcome!'}</p>
    </Modal>);
};

describe('<Modal />', () => {
    it('render correctly', () => {
        const component = getShallowWrapper();
        expect(toJson(component)).toMatchSnapshot();
    });
});
