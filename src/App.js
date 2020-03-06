import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Meet from './components/Meet';
import { Link, Switch, Route } from 'react-router-dom';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			meetPageId: null
		};
	}
	setMeetId = id => {
		this.setState({ meetPageId: id });
	};
	render() {
		return (
			<div>
				<nav>
					<Link to="/">
						<h1>Boba Clique</h1>
					</Link>
				</nav>
				<main>
					<Switch>
						<Route
							exact
							path="/"
							render={() => <Home setMeetId={this.setMeetId} />}
						/>
						<Route
							path="/meet/:id"
							render={() => <Meet meetId={this.state.meetPageId} />}
						/>
					</Switch>
				</main>
			</div>
		);
	}
}

export default App;
