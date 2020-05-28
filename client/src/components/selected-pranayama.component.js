import React, { Component } from "react";
import axios from "axios";
// import AudioPlayer from "react-h5-audio-player";
// import "react-h5-audio-player/lib/styles.css";
import PranayamaPlayer from "./pranayama-player.component";
// import sound from "../sounds/bhastrika.m4a";
// import { sounds } from "../sounds";
// const sounds = require("../sounds");

// console.log(sounds);

// import { Link } from "react-router-dom";

// let sounds = "../sounds/";
// let soundTrack = [...sounds];
// console.log(soundTrack);
// console.log(sound);

export default class SelectedPranayama extends Component {
  // step 1 --------------------
  constructor(props) {
    // debugger;
    super(props);
    // step 2 ----------------------
    this.state = {
      name: "",
      restriction: false,
      url: "",
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/pranayamas/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          name: response.data.name,
          restriction: response.data.restriction,
          url: response.data.url,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    // let sound = "../sounds/";

    return (
      <div>
        <h1>Selected Pranayama: </h1>
        <h3>{this.state.name}</h3>
        <h4>{this.state.restriction ? "Yes" : "No"}</h4>

        {/* <h4>{(src = `./sounds/${this.state.name}.m4a`)}</h4> */}
        {/* <AudioPlayer src={sound} onPlay={(e) => console.log("onPlay")} />
        <img src={`${require('../static/images/foo.png')}`} /> */}
        {/* <AudioPlayer src={`${require(sound + `${this.state.name}`)}`} onPlay={(e) => console.log("onPlay")} /> */}
        {/* <AudioPlayer src={`${require(sound + `${this.state.name}`)}`} onPlay={(e) => console.log("onPlay")} /> */}
        {/* import sound from "../sounds/bhastrika.m4a"; */}
        {/* <AudioPlayer src={require(`../sounds/${this.state.name}.m4a`)} onPlay={(e) => console.log("onPlay")} /> */}
        {/*********************** */}
        {/* <AudioPlayer src={`${require("../sounds/bhastrika.m4a")}`} onPlay={(e) => console.log("onPlay")} /> */}
        <PranayamaPlayer name={this.state.name} restriction={this.state.restriction} url={this.state.url} />
      </div>
    );
  }
}
