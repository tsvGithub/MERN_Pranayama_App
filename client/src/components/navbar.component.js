import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <h1> Hello!</h1>
        <button>
          <Link to="/">Breath Pranayamas</Link>
        </button>
        <button>
          <Link to="/create">Create Pranayama</Link>
        </button>
      </div>
    );
  }
}
