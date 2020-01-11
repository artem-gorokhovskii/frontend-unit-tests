import React from 'react';

import { shallow } from 'enzyme';
import { Counter } from './functional-component';

const MIN_PROPS = { name: 'Artem Gorokhovskii' };

describe('Functional component Counter', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Counter {...MIN_PROPS} />);
    });
    it('Должен иметь корректный снапшот', () => {
        expect(wrapper.debug()).toMatchSnapshot();
    });
    it('Приветствие выводится корректно', () => {
        const text = wrapper.find('.greetings').text();
        expect(text).toBe(`Привет, ${MIN_PROPS.name}!`);
    });
    it('Нажатие кнопки увеличит счетчик и выведет корректное сообщение', () => {
        const prevMessage = wrapper.find('.message').text();

        const button = wrapper.find('button');
        button.simulate('click');
        
        const message = wrapper.find('.message').text();

        expect(prevMessage).toBe('Вы нажали 0 раз');
        expect(message).toBe('Вы нажали 1 раз');
    });
    it('Нажатие кнопки 3 раза выведет предупреждение', () => {
        const prevNotificationExists = !!wrapper.find('.notification').length;

        const button = wrapper.find('button');
        button.simulate('click');
        button.simulate('click');
        button.simulate('click');
        
        const notificationExists = wrapper.find('.notification').length;
        
        expect(prevNotificationExists).toBe(false);
        expect(notificationExists).toBe(1);
    });
});