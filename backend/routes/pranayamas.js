const router = require("express").Router();
const Pranayama = require("../models/Pranayama.model");

//Route => http;//localhost:5000/pranayamas/
//READ
router.route("/").get((req, res) => {
  Pranayama.find()
    .then((pranayamas) => res.json(pranayamas))
    .catch((err) => res.status(400).json("Error: " + err));
});

//CREATE
router.route("/").post((req, res) => {
  const name = req.body.name;
  const restriction = req.body.restriction;
  const url = req.body.url;

  let pranayama = new Pranayama({
    name,
    restriction,
    url,
  });
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
  Pranayama.findByIdAndDelete(req.params.id)
    .then(() => res.json("Pranayama deleted!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

//UPDATE
//http://localhost:5000?pranayamas/[id]
router.route("/:id").put((req, res) => {
  Pranayama.findById(req.params.id)
    .then((pranayama) => {
      pranayama.name = req.body.name;
      pranayama.restriction = req.body.restriction;
      pranayama.url = req.body.url;
      pranayama
        .save()
        .then(() => res.json("Pranayama updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
