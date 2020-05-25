import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default class SelectedPranayama extends Component {
  // step 1 --------------------
  constructor(props) {
    // debugger;
    super(props);
    // step 2 ----------------------
    this.state = {
      name: "",
      restriction: false,
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/pranayamas/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          name: response.data.name,
          restriction: response.data.restriction,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h1>Selected Pranayama: </h1>
        <h3>{this.state.name}</h3>
        <h4>{this.state.restriction ? "Yes" : "No"}</h4>
      </div>
    );
  }
}
