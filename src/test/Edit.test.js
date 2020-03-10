import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Edit from '../components/Edit';

Enzyme.configure({ adapter: new Adapter() });
let component;
beforeEach(() => {
	component = shallow(<Edit />, {
		disableLifecycleMethods: true
	});
});

it('The component renders', () => {
	expect(component.find('.delete-button').length).toBe(1);
});
