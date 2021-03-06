import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Edit from '../components/Edit';

Enzyme.configure({ adapter: new Adapter() });
it('The component renders', () => {
	const component = shallow(<Edit />);
	expect(component.find('.delete-button').length).toBe(1);
});
