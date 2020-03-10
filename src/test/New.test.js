import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import New from '../components/New';

Enzyme.configure({ adapter: new Adapter() });
it('The component renders', () => {
	const component = shallow(<New />);
	expect(component.find('.post').length).toBe(1);
});
