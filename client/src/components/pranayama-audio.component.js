import bhastrika from "../sounds/bhastrika.m4a";
import kapalabphati from "../sounds/kapalabphati.m4a";
import ujjayi from "../sounds/ujjayi.m4a";

const audios = {
  bhastrika: bhastrika,
  kapalabphati: kapalabphati,
  ujjayi: ujjayi,
};
const pranayama = () => {
  debugger;
  Object.keys(audios);
};

console.log(Object.keys(audios));

pranayama();
console.log(Object.keys(audios)); //Array
console.log(Object.values(audios)); //Array

// const currentTrack = (name) => {
//   const currentAudio = audios[name];
// };

export default {
  //   audios,
  //   pranayama,
  // currentTrack
};
