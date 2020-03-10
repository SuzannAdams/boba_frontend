import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from '../components/Home';

Enzyme.configure({ adapter: new Adapter() });

describe('Home component', () => {
	it('The component renders', () => {
		const component = shallow(<Home />);
		expect(component.find('.post').length).toBe(1);
	});
});
