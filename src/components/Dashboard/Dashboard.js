import React, { Component } from "react";
import axios from "axios";

export default class Dashboard extends Component {
  state = {
    posts: [],
    myPosts: true,
    id: 0,
    search: ''
  };
  toggleChange = () => {
    this.setState({
      myPosts: !this.state.myPosts
    });
  };
  componentDidMount() {
    this.getPosts();
  }
  getPosts = () => {
    axios.get(`/api/posts?=${this.state.search}`).then(res => {
      console.log(res.data);
      this.setState({
        posts: res.data
      });
    });
  };
  render() {
    return (
      <div>
        Dashboard
        <input type="text" placeholder="search" />
        <button>Search</button>
        <button>Reset</button>
        <div>
          <h3>My Posts</h3>
          <input onClick={() => this.toggleChange} type="checkbox" />
        </div>
        <div>
          {this.state.posts.map(el => {
            return (
              <div key={el.id}>
                <h3>{el.title}</h3>
                <p>{el.username}</p>
                <img src={el.profile_pic} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
