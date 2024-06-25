import axios from "axios";
import React, { Component } from "react";
import "../index.css";

export class PostData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UserId: "",
      title: "",
      body: "",
      postedData: null,
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };
  postData = () => {
    const { userId, title, body } = this.state;
    const postData = {
      userId,
      title,
      body,
    };
    axios({
      method: "POST",
      url: " https://jsonplaceholder.typicode.com/posts",
      data: postData,
    })
      .then((response) => {
        this.setState({
          postedData: response.data,
        });
        alert("Data Posted Succesfully");
      })
      .catch((err) => {
        console.error("Error Posting Data", err);
      });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.postData();
  };
  render() {
    const { userId, title, body, postedData } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>User ID:</label>
            <input
              type="text"
              name="userId"
              value={userId}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Body:</label>
            <textarea name="body" value={body} onChange={this.handleChange} />
          </div>
          <button type="submit">Post Data</button>
        </form>
        {postedData && (
          <div>
            <h3>Posted Data:</h3>
            <p>User ID: {postedData.userId}</p>
            <p>ID: {postedData.id}</p>
            <p>Title: {postedData.title}</p>
            <p>Body: {postedData.body}</p>
          </div>
        )}
      </>
    );
  }
}

export default PostData;
