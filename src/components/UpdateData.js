import axios from "axios";
import React, { Component } from "react";
import "../index.css";

export class UpdateData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UserId: "",
      id: "",
      title: "",
      body: "",
      updatedData: null,
      data: [],
    };
  }
  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };
  getData = () => {
    const id = this.state.id;
    axios({
      method: "GET",
      url: `https://jsonplaceholder.typicode.com/posts/${id}`,
    })
      .then((response) => {
        this.setState({ data: [response.data] });
      })
      .catch((err) => {
        console.error("User Does Not Exist", err);
        alert(`User with id:${this.state.id} Does Not Exist`);
      });
  };
  updateData = () => {
    const { title, body } = this.state;
    const updateData = {
      title,
      body,
    };
    const postId = this.state.id;
    axios({
      method: "PUT",
      url: `https://jsonplaceholder.typicode.com/posts/${postId}`,
      data: updateData,
    })
      .then((response) => {
        this.setState({ updatedData: response.data });
        alert(`User with id:${this.state.id} updated`);
      })
      .catch((err) => {
        console.error("Error Updating Data", err);
        alert(`User with id:${this.state.id} Does Not Exist`);
      });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.getData();
    this.updateData();
  };
  render() {
    const { id, title, body, updatedData } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>ID:</label>
            <input
              type="text"
              placeholder="Only user from 1-100 exists"
              name="id"
              value={id}
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
            <textarea
              type="text"
              name="body"
              value={body}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Update Data</button>
        </form>
        <h3>Previous Data</h3>
        {this.state.data.map((data) => {
          return (
            <>
              <p>ID:{data.id}</p>
              <p>Title:{data.title}</p>
              <p>Body"{data.body}</p>
            </>
          );
        })}
        {updatedData && (
          <div>
            <h3>Updated Data:</h3>
            <p>ID: {updatedData.id}</p>
            <p>Title: {updatedData.title}</p>
            <p>Body: {updatedData.body}</p>
          </div>
        )}
      </>
    );
  }
}

export default UpdateData;
