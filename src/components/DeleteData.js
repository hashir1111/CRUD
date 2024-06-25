import React, { Component } from "react";
import axios from "axios";

export class DeleteData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UserId: "",
      id: "",
    };
  }
  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.deleteData();
  };
  deleteData = () => {
    const { UserId } = this.state;
    const deletedData = {
      UserId,
    };
    const postId = this.state.id;
    axios({
      method: "DELETE",
      url: `https://jsonplaceholder.typicode.com/posts/${postId}`,
      data: deletedData,
    })
      .then((response) => {
        console.log(response);
        alert(`User with id:${this.state.id} deleted`);
      })
      .catch((err) => {
        console.error("Error Deleting Data", err);
      });
  };
  render() {
    const { id } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>ID:</label>
            <input
              type="text"
              name="id"
              value={id}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Delete</button>
        </form>
      </>
    );
  }
}

export default DeleteData;
