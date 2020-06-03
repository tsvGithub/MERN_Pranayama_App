import React from "react";
import Sound from "react-sound";

import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

// import sound from "../sounds/bhastrika.m4a";
// import { sounds } from "../sounds";
// const sounds = require("../sounds");

// console.log(sounds);

// import { Link } from "react-router-dom";

// let sounds = "../sounds/";
// let soundTrack = [...sounds];
// console.log(soundTrack);
// console.log(sound);

// let sound = require("../sounds/bhastrika.m4a");

const PranayamaPlayer = (props) => {
  //   debugger;
  //   let currentTrack = props.name;
  //   console.log(currentTrack);
  //   let sound = require("../sounds/bhastrika.m4a");
  //   const checkName = (props) => {
  //   const checkName = (currentTrack) => {
  //     debugger;
  //     // let path = "../sounds/bhastrika.m4a";
  //     // let sound = require("../sounds/ujjayi.m4a");
  //     // let sound = require("../sounds/bhastrika.m4a");
  //     // let sound = require(path);
  //     // if (props.name !== "bhastrika") {
  //     if (currentTrack !== "bhastrika") {
  //       let track = currentTrack + ".m4a";
  //       console.log(track);
  //       // sound = `"../sounds/${track}.m4a"`;
  //       let path = "../sounds/" + track;
  //       console.log(path);
  //       sound = require(path);
  //       console.log(sound);
  //     }
  //     return sound;
  //   };
  return (
    //         {/* <h4>{(src = `./sounds/${this.state.name}.m4a`)}</h4> */}
    // {/* <AudioPlayer src={sound} onPlay={(e) => console.log("onPlay")} />
    // <img src={`${require('../static/images/foo.png')}`} /> */}
    // {/* <AudioPlayer src={`${require(sound + `${this.state.name}`)}`} onPlay={(e) => console.log("onPlay")} /> */}
    // {/* <AudioPlayer src={`${require(sound + `${this.state.name}`)}`} onPlay={(e) => console.log("onPlay")} /> */}
    // {/* import sound from "../sounds/bhastrika.m4a"; */}
    // {/* <AudioPlayer src={require(`../sounds/${this.state.name}.m4a`)} onPlay={(e) => console.log("onPlay")} /> */}
    // {/*********************** */}
    // {/*
    <div>
      {/* {checkName()} */}

      {/* {props.name}
      {props.url} */}
      <br />
      {/* <Sound
        url={props.url}
        playStatus={Sound.status.PLAYING}
        onLoading={this.handleSongLoading}
        onPlaying={this.handleSongPlaying}
        onFinishedPlaying={this.handleSongFinishedPlaying}
      /> */}
      {/* <AudioPlayer src={sound} onPlay={(e) => console.log("onPlay")} /> */}
      {/* <AudioPlayer src={`${require("../sounds/bhastrika.m4a")}`} onPlay={(e) => console.log("onPlay")} /> */}
      <AudioPlayer src={props.url} onPlay={(e) => console.log("onPlay")} />
      {/* <AudioPlayer
        src="https://drive.google.com/file/d/1dKJMBeQkMZrs6LmZVIjfVeWhx0VMkg8Y/view?usp=sharing"
        onPlay={(e) => console.log("onPlay")}
      /> */}
    </div>
  );
};

// export default PranayamaPlayer;
