import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

//==========================
//step 8 for 7
const Pranayama = (props) => (
  <tr>
    <td>{props.pranayama.name}</td>
    <td>{props.pranayama.restriction ? "YES" : "No"}</td>
    <td>
      <Link to={"/edit/" + props.pranayama._id}>Edit</Link> ||
      <a
        href="#"
        onClick={() => {
          props.deletePranayama(props.pranayama._id);
        }}
      >
        Delete
      </a>{" "}
      ||
      <Link to={"/" + props.pranayama._id}>Select</Link>
    </td>
  </tr>
);

//======================
export default class ListPranayamas extends Component {
  // render() {
  //   return <h1>List Pranayama</h1>;
  // }
  // 1 ----------------------------
  constructor(props) {
    super(props);

    // 4 --------------------------
    this.deletePranayama = this.deletePranayama.bind(this);
    // 2 ------------------------------
    this.state = {
      pranayamas: [],
    };
  }
  // 5 -------------------------
  componentDidMount() {
    axios
      .get("http://localhost:5000/pranayamas/")
      .then((response) => {
        this.setState({ pranayamas: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  // 3 -------------------------------
  deletePranayama(id) {
    axios.delete("http://localhost:5000/pranayamas/" + id).then((response) => {
      console.log(response.data);
    });
    this.setState({
      pranayamas: this.state.pranayamas.filter((el) => el._id !== id),
    });
  }

  // 7 for <tbody> step 6

  pranayamasList() {
    return this.state.pranayamas.map((currentPranayama) => {
      // debugger;
      return (
        <Pranayama
          pranayama={currentPranayama}
          deletePranayama={this.deletePranayama}
          restriction={currentPranayama.restriction}
          url={currentPranayama.url}
          key={currentPranayama._id}
        />
      );
    });
  }
  //==================
  //6 All PRANAYAMAS List
  render() {
    return (
      <div>
        <h3>Pranayamas</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Name</th>
              <th>Restrictions</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.pranayamasList()}</tbody>
        </table>
      </div>
    );
  }
}
