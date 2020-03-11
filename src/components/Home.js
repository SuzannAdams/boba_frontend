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
          interested in meeting other
        </p>
        <p>
          people while enjoying a cool beverage. This site invites people to
          post and read post by
        </p>
        <p>
          other people who want to meet and socialize with each other in any
          city they visit.
        </p>
        <h2>Tea Cafe</h2>
        <p className="tea-cafe-p">Choose a tea cafe by city and state</p>

        <Link to="/new">
          <button>New</button>
        </Link>
        <div className="post container">{posting}</div>
      </div>
    );
  }
}

export default Home;
