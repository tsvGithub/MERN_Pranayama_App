import React, { Component } from "react";
import axios from "axios";

export default class CreatePranayama extends Component {
  //   render() {
  //     return <h1>Create Pranayama</h1>;
  //   }
  // 1-----------------
  constructor(props) {
    super(props);

    // 5 ---------------------
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeRestriction = this.onChangeRestriction.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // 2------------------
    this.state = {
      name: "",
      restriction: false,
    };
  }
  // 6------------------------
  //   componentDidMount(){

  //   }

  //3 ------------------------
  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }
  onChangeRestriction(e) {
    this.setState({
      restriction: e.target.value,
    });
  }
  // 4---------------------
  onSubmit(e) {
    debugger;
    e.preventDefault();
    const pranayama = {
      name: this.state.name,
      restriction: this.state.restriction,
    };
    console.log(pranayama);

    axios.post("http://localhost:5000/pranayamas/", pranayama).then((res) => console.log(res.data));

    // window.location = "/";
  }
  //--------------------------

  //==========================
  //7 Form
  render() {
    // debugger;
    return (
      <div>
        <h3>Create New Pranayama </h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input type="text" required className="form-control" value={this.state.name} onChange={this.onChangeName} />
          </div>
          <div className="form-group">
            <label>Restriction:</label>
            <input
              type="checkbox"
              //   required
              className="form-control"
              value={this.state.restriction}
              onChange={this.onChangeRestriction}
            />
          </div>

          <div className="form-group">
            <input type="submit" value="Create New Pranayama" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}
