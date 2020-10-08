import React from 'react';
import { shallow } from 'enzyme';
import ButtonStartGame from './ButtonStartGame';

describe('Button start game ', () => {

    describe('Have props', () => {

        let wrapper;
        const props = {
            title: 'Start',
            route: 'goto.com',
        };

        beforeEach(() => {
            wrapper = shallow((<ButtonStartGame {...props}/>));
        });

        it('Should render a button', () => {
            const component = wrapper.find('.button-start-game');
            expect(component.length).toBe(1);
        });

        it('Should render a role name', () => {
            const component = wrapper.find('.button-start-game-link');
            expect(component.text()).toEqual(props.title);
        });

        it('Should render a link with route', () => {
            const component = wrapper.find('Link');
            expect(component.prop('to')).toBe(props.route);
        });
    });
});