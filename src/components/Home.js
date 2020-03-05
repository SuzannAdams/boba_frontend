import React, { Component } from 'react';
import axios from 'axios';

let posting;
class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: []
		};
	}
	componentDidMount() {
		const url = 'https://localhost:8000/meets/?format=json';
		fetch(url)
			.then(response => response.json())
			.then(data => {
				this.setState({ posts: data });
			});
	}
	render() {
		let posts = this.state.posts;
		if (posts !== null) {
			posting = posts.map(meet => {
				return (
					<div key={meet._id}>
						<h3>{meet.name}</h3>
						<h4>{meet.place}</h4>
						<h4>{meet.time}</h4>
						<h4>{meet.topic}</h4>
						<img href={meet.photo_url} alt={meet.place} />
					</div>
				);
			});
		}
		return <div>{posting}</div>;
	}
}

export default Home;
