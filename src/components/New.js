import React, { Component } from 'react';
import Form from './Form';
import axios from 'axios';
import { APIURL } from '../config';
import { Redirect } from 'react-router';

class New extends Component {
	constructor(props) {
		super(props);
		this.state = {
			meet: {
				name: '',
				place: '',
				address: '',
				date: '',
				time: '',
				topic: '',
				photo_url: ''
			},
			submitted: false
		};
	}

	handleChange = evt => {
		evt.persist();
		this.setState({
			meet: {
				...this.state.meet,
				[evt.target.name]: evt.target.value
			}
		});
	};

	handleSubmit = event => {
		event.preventDefault();
		axios
			.post(`${APIURL}/meets/`, this.state.meet)
			.then(response => console.log(response))
			.catch(error => console.log(error));
		this.setState({ submitted: true });
	};
	render() {
		if (this.state.submitted === true) {
			return <Redirect to="/" />;
		}
		return (
			<div>
				<div>New Post</div>
				<div className="post">
					<Form
						meet={this.state.meet}
						handleChange={this.handleChange}
						handleSubmit={this.handleSubmit}
					/>
				</div>
			</div>
		);
	}
}

export default New;
