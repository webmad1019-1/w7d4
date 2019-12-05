require("dotenv").config();
const mongoose = require("mongoose");
const Pizzas = require("../models/Pizza");

mongoose
  .connect("mongodb://localhost/pizzas-back", { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
    start();
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

function start() {
  Pizzas.deleteMany({})
    .then(() => {
      return Pizzas.create([
        {
          name: "Seis quesos",
          price: 12,
          img:
            "https://www.recetasdesbieta.com/wp-content/uploads/2018/09/Como-hacer-pizza-casera-rapida-con-masa-de-pizza-sin-repos-1.jpg"
        },
        {
          name: "Hawaiana sin verdura",
          price: 15,
          img: "https://hacermasapizza.com/img/pizza-pepperoni-916.jpg"
        },
        {
          name: "Romana",
          price: 11,
          img:
            "https://www.laespanolaaceites.com/wp-content/uploads/2019/06/pizza-con-chorizo-jamon-y-queso-1080x671.jpg"
        }
      ]);
    })
    .then(pizzasCreated => {
      console.log("Product creation was successful");
      process.exit(0);
    });
}
