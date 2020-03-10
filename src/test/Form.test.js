import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Form from '../components/Form';

Enzyme.configure({ adapter: new Adapter() });

let handleSubmit = () => {};
let handleChange = () => {};
let props = {
	meet: {
		name: '',
		place: '',
		time: '',
		topic: '',
		photo_url: ''
	},
	handleSubmit: handleSubmit(),
	handleChange: handleChange()
};

describe('Form component', () => {
	it('The component renders', () => {
		const component = shallow(
			<Form
				meet={props.meet}
				handleSubmit={props.handleSubmit}
				handleChange={props.handleChange}
			/>
		);
		expect(component.find('.form-container').length).toBe(1);
	});
});
