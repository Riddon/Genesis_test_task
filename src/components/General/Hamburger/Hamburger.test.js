import React from 'react';
import { shallow, mount } from 'enzyme';
import Hamburger from './Hamburger';


describe('Sign Out button', () => {

    const props = {
        openMenu: false,
        onClick: () => {}
    };

    describe('Test color className props', () => {

        const nextProps = {
            ...props,
            openMenu: true,
        };

        it('Should render className from props', () => {
            const component = shallow(<Hamburger {...nextProps}/>).find('i');
            expect(component.hasClass('fa-times')).toEqual(true);
        });
    });

    describe('Test onClick props', () => {

        const onButtonClick = jest.fn();
        const nextProps = {
            ...props,
            onClick: onButtonClick
        };

        it('Should simulate click', () => {
            const component = mount(<Hamburger {...nextProps}/>);
            component.props().onClick();
            expect(onButtonClick).toHaveBeenCalled();
        });
    });

});