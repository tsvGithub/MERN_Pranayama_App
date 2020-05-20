const router = require("express").Router();
let Pranayama = require("../models/Pranayama.model");

//READ
router.route("/").get((req, res) => {
  Pranayama.find()
    .then((pranayamas) => res.json(pranayamas))
    .catch((err) => res.status(400).json("Error: " + err));
});

//CREATE
router.route("/").post((req, res) => {
  let pranayama = new Pranayama(req.body);
  pranayama
    .save()
    .then(() => res.json("New pranayama added!"))
    .catch((err) => res.status(400).send("Error: " + err));
});

//FIND BY ID
router.route("/:id").get((req, res) => {
  Pranayama.findById(req.params.id)
    .then((pranayama) => res.json(pranayama))
    .catch((err) => res.status(400).send("Error: " + err));
});

//DELETE
router.route("/:id").delete((req, res) => {
  Pranayama.findByIdAndDelete(req.paramsid)
    .then(() => res.json("Pranayama deleted!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

//UPDATE
router.route("/:id").put((req, res) => {
  Pranayama.findById(req.params.id)
    .then((pranayama) => {
      pranayama.name = req.body.name;
      pranayama.restriction = req.body.restriction;
      pranayama
        .save()
        .then(() => res.json("Pranayama updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
