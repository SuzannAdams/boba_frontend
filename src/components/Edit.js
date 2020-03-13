import React, { Component } from 'react';
import Form from './Form';
import axios from 'axios';
import { APIURL } from '../config';
import { Redirect } from 'react-router-dom';

class Edit extends Component {
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
			deleted: false
		};
	}
	componentDidMount() {
		axios
			.get(`${APIURL}/meets/${this.props.meetId}`)
			.then(res => this.setState({ meet: res.data }));
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
			.put(`${APIURL}/meets/${this.props.meetId}`, this.state.meet)
			.then(response => console.log(response))
			.catch(error => console.log(error));
	};
	handleDelete = evt => {
		axios
			.delete(`${APIURL}/meets/${this.props.meetId}`)
			.then(this.setState({ deleted: true }));
	};
	render() {
		if (this.state.deleted) {
			return <Redirect to="/" />;
		}
		return (
			<div>
				<div>Edit Post</div>
				<div>
					<Form
						meet={this.state.meet}
						handleChange={this.handleChange}
						handleSubmit={this.handleSubmit}
					/>
				</div>
				<button className="delete-button" onClick={this.handleDelete}>
					Delete Post
				</button>
			</div>
		);
	}
}

export default Edit;
