const express = require("express");
const router = express.Router();
const Pizzas = require("../models/Pizza");

function getPizzas(req, res) {
  if (req.params.sort) {
    Pizzas.find()
      .sort({ name: req.params.sort === "asc" ? 1 : -1 })
      .then(allPizzas => res.json(allPizzas));
  } else {
    Pizzas.find().then(allPizzas => res.json(allPizzas));
  }
}

// read
router.get("/pizzas/:sort?", (req, res, next) => {
  getPizzas(req, res);
});

// creation
router.post("/pizza", (req, res, next) => {
  Pizzas.create({
    name: req.body.name,
    price: req.body.price,
    img: req.body.img
  }).then(newPizzaCreated => getPizzas(req, res));
});

// update
router.put("/pizza/:pizzaID", (req, res, next) => {
  Pizzas.findByIdAndUpdate(
    req.params.pizzaID,
    {
      name: req.body.name,
      price: req.body.price,
      img: req.body.img
    },
    { new: true }
  ).then(pizzaUpdated => res.json(pizzaUpdated));
});

// delete
router.delete("/pizza/:pizzaID", (req, res, next) => {
  Pizzas.findByIdAndDelete(req.params.pizzaID).then(deletedPizza => getPizzas(req, res));
});

module.exports = router;
