import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Meet from './components/Meet';
import New from './components/New';
import Edit from './components/Edit';
import { Link, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

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
							exact
							path="/meet/:id"
							render={() => <Meet meetId={this.state.meetPageId} />}
						/>
						<Route
							path="/meet/:id/edit"
							render={() => <Edit meetId={this.state.meetPageId} />}
						/>
						<Route exact path="/new" render={() => <New />} />
					</Switch>
				</main>
			</div>
		);
	}
}

export default App;
