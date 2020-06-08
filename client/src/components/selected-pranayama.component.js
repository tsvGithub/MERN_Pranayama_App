import React, { Component } from "react";
import axios from "axios";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

// import audios from "./pranayama-audio.component";
// import pranayama from "./pranayama-audio.component";

// console.log(audios); //Object
// console.log(pranayama); // ni4ego
//--------------------------------
//03/06
import bhastrika from "../sounds/bhastrika.m4a";
import kapalabphati from "../sounds/kapalabphati.m4a";
import ujjayi from "../sounds/ujjayi.m4a";

const audios = {
  bhastrika: bhastrika,
  kapalabphati: kapalabphati,
  ujjayi: ujjayi,
};
// const pranayama = () => {
//   debugger;
//   Object.keys(audios);
// };

// console.log(Object.keys(audios));

// pranayama();
// console.log(Object.keys(audios)); //Array
// console.log(Object.values(audios)); //Array

//----------------------

//----------------------------
// import PranayamaPlayer from "./pranayama-player.component";
//------------------------------
//!!!! Ne goditsja!!!
// const sound = "https://drive.google.com/file/d/1T09kq_qZ8YIkzSLTihzHzyA9JfFcBwxM/view?usp=sharing";
//=============================
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
    // this.src = this.src.bind(this);

    // step 2 ----------------------
    this.state = {
      name: "",
      restriction: false,
      url: "",
      // audios: {},
    };
  }
  componentDidMount() {
    // debugger;
    axios
      // .get("http://localhost:5000/pranayamas/" + this.props.match.params._id)
      .get("http://localhost:5000/pranayamas/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          name: response.data.name,
          restriction: response.data.restriction,
          url: response.data.url,
          audios: audios[response.data.name],
        });
        console.log(this.state.audios, this.state.name, this.state.restriction, this.state.url);
        //undefined 'ujjayi' true 'ujjayi'
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // src() {
  //   debugger;
  //   const src = alert("hello");
  //   // const src = this.state.name;
  //   // const src = audios[this.state.name];
  //   console.log(src);
  // }

  render() {
    // debugger;
    // console.log(audios[this.state.name]);
    // console.log(audios); //Object + pranayama() ni4ego

    // const currentAudio = this.state.name;
    // console.log(currentAudio); // pusto i na 4yj raz nazvanie
    // //!!!???
    // const track = audios.currentAudio;
    // console.log(track); // undefined

    return (
      <div>
        <h1>Selected Pranayama: </h1>
        <h3>{this.state.name}</h3>
        {/* <h3>{this.state.url}</h3> */}
        <h4>{this.state.restriction ? "Yes" : "No"}</h4>
        {/* <h4>{(src = `./sounds/${this.state.name}.m4a`)}</h4> */}
        {/* <AudioPlayer src={sound} onPlay={(e) => console.log("onPlay")} /> */}
        {/* <AudioPlayer src={this.state.url} onPlay={(e) => console.log("onPlay")} /> */}
        {/* <AudioPlayer src={`${require(`${this.state.url}`)}`} onPlay={(e) => console.log("onPlay")} /> */}

        {/* <AudioPlayer src={"/static/media/bhastrika.f8d1aca3.m4a"} onPlay={(e) => console.log("onPlay")} /> */}
        <AudioPlayer src={this.state.audios} onPlay={(e) => console.log("onPlay")} />
        {/* <AudioPlayer src={this.src()} onPlay={(e) => console.log("onPlay")} /> */}
        {/* <AudioPlayer src={`${require(sound + `${this.state.name}`)}`} onPlay={(e) => console.log("onPlay")} /> */}

        {/* import sound from "../sounds/bhastrika.m4a"; */}
        {/* <AudioPlayer src={require(`../sounds/${this.state.name}.m4a`)} onPlay={(e) => console.log("onPlay")} /> */}
        {/*********************** */}
        {/* <AudioPlayer src={`${require("../sounds/bhastrika.m4a")}`} onPlay={(e) => console.log("onPlay")} /> */}
        {/* <PranayamaPlayer  /> */}
        {/* <PranayamaPlayer name={this.state.name} restriction={this.state.restriction} url={this.state.url} /> */}
        {/**88888888888888888888 */}
        {/* <button onClick={start}>Play</button> */}
      </div>
    );
  }
}
