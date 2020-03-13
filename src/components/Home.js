import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { APIURL } from '../config';

let posting;
class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: [],
			meet: {
				name: '',
				place: '',
				time: '',
				topic: '',
				photo_url: ''
			}
		};
	}
	componentDidMount() {
		axios
			.get(`${APIURL}/meets/`)
			.then(res => this.setState({ posts: res.data }));
	}
	render() {
		let posts = this.state.posts;
		if (posts !== null) {
			posting = posts.map(meet => {
				return (
					<div className="post_container" key={meet.id}>
						<img src={meet.photo_url} alt={meet.place} />
						<Link
							onClick={() => this.props.setMeetId(meet.id)}
							to={`/meet/${meet.id}`}
						>
							<h4>{meet.place}</h4>
						</Link>
						<h5>{meet.address}</h5>
					</div>
				);
			});
		}
		return (
			<div>
				<p>
					Boba Hour is a website for boba or bubble tea drinkers who are
					interested in meeting other people while enjoying an
				</p>
				<p>
					Asian style, cool beverage. This site invites visitors to post their
					tea cafe location with the intention of having another visitor
				</p>
				<p>
					respond by traveling to the posted locale. The hope is to have
					amicable conversations, to socialize and possibly make a new friend.
				</p>
				<h2>Tea Cafe</h2>
				<p className="tea-cafe-p">Choose a tea cafe by city and state</p>
				<button>
					<Link to="/new">New</Link>
				</button>
				<div className="post container">{posting}</div>
			</div>
		);
	}
}

export default Home;
