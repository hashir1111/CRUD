import React, { Component } from "react";
import { GetData } from "./components/GetData";
import PostData from "./components/PostData";
import UpdateData from "./components/UpdateData";
import DeleteData from "./components/DeleteData";
import Navbars from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <Router>
        <Navbars />
        <Routes>
          <Route exact path="/" element={<GetData />} />
          <Route exact path="/postData" element={<PostData />} />
          <Route exact path="/updateData" element={<UpdateData />} />
          <Route exact path="/deleteData" element={<DeleteData />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
