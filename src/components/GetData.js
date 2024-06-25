import React, { Component } from "react";
import axios from "axios";
import '../index.css'


export class GetData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  getData = () => {
    axios({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/posts",
    }).then((response) => {
      this.setState({
        data: response.data,
      });
    }).catch((err)=>{
      console.error("Error Fetching Data" , err)
    });
  };
  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <>
        <table>
          <tr>
            <th>ID</th>
            <th>UserId</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
          {this.state.data.map((data) => {
            return (
              <>
                <tr>
                  <td>{data.id}</td>
                  <td>{data.userId}</td>
                  <td>{data.title}</td>
                  <td>{data.body}</td>
                </tr>
              </>
            );
          })}
        </table>
      </>
    );
  }
}

export default GetData;
