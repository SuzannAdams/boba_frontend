import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
    const url = 'http://localhost:8000/meets/';
    axios.get(url).then(res => this.setState({ posts: res.data }));
  }
  render() {
    let posts = this.state.posts;
    if (posts !== null) {
      posting = posts.map(meet => {
        return (
          <div key={meet.id}>
            <Link
              onClick={() => this.props.setMeetId(meet.id)}
              to={`/meet/${meet.id}`}
            >
              <h3>{meet.name}</h3>
            </Link>
            <h4>{meet.place}</h4>
            <h4>{meet.time}</h4>
            <h4>{meet.topic}</h4>
            <img src={meet.photo_url} alt={meet.place} />
          </div>
        );
      });
    }
    return (
      <div>
        <Link to="/new">
          <button>New</button>
        </Link>
        <div>{posting}</div>
      </div>
    );
  }
}

export default Home;
