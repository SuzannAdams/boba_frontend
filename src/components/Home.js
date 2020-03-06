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
		const url = 'http://localhost:8000/meets/';
		axios.get(url).then(res => this.setState({ posts: res.data }));
	}
	render() {
		let posts = this.state.posts;
		if (posts !== null) {
			posting = posts.map(meet => {
				return (
					<div key={meet.id}>
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
