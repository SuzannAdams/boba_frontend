import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { APIURL } from '../config';

let stuff;
class Meet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: []
    };
  }
  componentDidMount() {
    if (this.props.meetId !== null) {
      let id = this.props.meetId;
      axios
        .get(`${APIURL}/meets/${id}`)
        .then(res => this.setState({ post: res.data }));
    }
  }

  render() {
    if (this.state.post !== null) {
      let post = this.state.post;
      stuff = (
        <div key={post.id}>
          <h3>{post.name}</h3>
          <h4>{post.place}</h4>
          <h4>{post.address}</h4>
          <h4>{post.date}</h4>
          <h4>{post.time}</h4>
          <h4>{post.topic}</h4>
          <img src={post.photo_url} alt={post.place} />
          <div>
            <Link to={`/meet/${post.id}/edit`}>
              <button>Edit</button>
            </Link>
          </div>
        </div>
      );
    }
    return (
      <div>
        <div>Meet Information</div>
        <div className="meet_container">{stuff}</div>
      </div>
    );
  }
}

export default Meet;
