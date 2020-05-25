import React, { Component } from "react";
import axios from "axios";

export default class EditPranayama extends Component {
  // render() {
  //   return <h1>Edit Pranayama</h1>;
  // }
  // step 1 ------------------------
  constructor(props) {
    // debugger;
    super(props);

    // step 5 ------------------------------
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeRestriction = this.onChangeRestriction.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // step 2 --------------------------

    this.state = {
      name: "",
      restriction: false,
    };
  }

  // step 6 --------------------------
  componentDidMount() {
    // debugger;
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
  // step 3 ---------------------
  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }
  onChangeRestriction() {
    this.setState({
      restriction: !this.state.restriction,
    });
  }

  // step 4 -----------------
  onSubmit(e) {
    // debugger;
    e.preventDefault();
    const pranayama = {
      name: this.state.name,
      restriction: this.state.restriction,
    };
    console.log(pranayama);

    axios
      .put("http://localhost:5000/pranayamas/" + this.props.match.params.id, pranayama)
      .then((res) => console.log(res.data));

    window.location = "/";
  }
  //-----------------------------------

  //==========================
  // step 7 Form
  render() {
    return (
      <div>
        <h3>Edit Pranayama</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              required
              placeholder={this.state.name}
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
            />
          </div>
          <div className="form-group">
            <label>Restriction:</label>
            <input
              type="checkbox"
              className="form-control"
              // placeholder={this.state.restriction}
              value={this.state.restriction}
              onChange={this.onChangeRestriction}
              checked={this.state.restriction}
            />
          </div>

          <div className="form-group">
            <input type="submit" value="Edit Pranayama" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}
