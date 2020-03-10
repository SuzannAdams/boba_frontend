import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Meet from '../components/Meet';

Enzyme.configure({ adapter: new Adapter() });

describe('Meet component', () => {
	it('The component renders', () => {
		const component = shallow(<Meet />);
		expect(component.find('.meet_container').length).toBe(1);
	});
});
