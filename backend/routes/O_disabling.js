const disRouter = require("express").Router();
let Pranayama = require("../models/Pranayama.model");

//Router => http://localhost:5000/disabling
//Read
disRouter.route("/").get((req, res) => {
  debugger;
  Pranayama.find({ restriction: true })
    // .then((pranayamas) => console.log(pranayamas))
    .then((pranayamas) => res.json(pranayamas))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = disRouter;
