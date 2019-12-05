import React, { Component } from "react";
import axios from "axios";
import addSeparators from "./Formatters";

export default class PizzaDisplayer extends Component {
  constructor() {
    super();
    this.state = {
      pizzas: [],
      pizzaName: "",
      pizzaPrice: 0,
      pizzaImg: ""
    };
  }

  deletePizza(e, id) {
    e.preventDefault();

    console.log("about to delete the pizza" + id);
    const URL = "http://localhost:3000/pizza/" + id;
    axios
      .delete(URL)
      .then(() => {
        return axios.get("http://localhost:3000/pizzas");
      })
      .then(allPizzas => {
        this.setState({
          ...this.state,
          pizzas: allPizzas.data
        });
      });
  }

  setPizza(e, key) {
    this.setState({
      ...this.state,
      ["pizza" + key]: e.target.value
    });
  }

  addPizzaToDB(e) {
    e.preventDefault();

    axios
      .post("http://localhost:3000/pizza", {
        name: this.state.pizzaName,
        price: this.state.pizzaPrice,
        img: this.state.pizzaImg
      })
      .then(allPizzas => {
        this.setState({
          ...this.state,
          pizzas: allPizzas.data,
          pizzaName: "",
          pizzaPrice: 0,
          pizzaImg: ""
        });
      });
  }

  updatePizzaInDB(e, pizzaID) {
    e.preventDefault();
    const URL = "http://localhost:3000/pizza/" + pizzaID;
    const pizzasUpdated = [...this.state.pizzas];
    const chosenPizza = pizzasUpdated.find(pizza => pizza._id === pizzaID);

    axios.put(URL, chosenPizza).then(() => {
      this.setState({
        ...this.state,
        pizzas: pizzasUpdated
      });
    });
  }

  updatePizza(e, pizzaID) {
    const pizzasUpdated = [...this.state.pizzas];
    const chosenPizza = pizzasUpdated.find(pizza => pizza._id === pizzaID);
    chosenPizza.name = e.target.value;

    this.setState({
      ...this.state,
      pizzas: pizzasUpdated
    });
  }

  render() {
    return (
      <React.Fragment>
        <form>
          <input
            type="text"
            value={this.state.pizzaName}
            onChange={e => this.setPizza(e, "Name")}
          ></input>
          <input
            type="text"
            value={this.state.pizzaPrice}
            onChange={e => this.setPizza(e, "Price")}
          ></input>
          <input
            type="text"
            value={this.state.pizzaImg}
            onChange={e => this.setPizza(e, "Img")}
          ></input>

          <button type="button" onClick={e => this.addPizzaToDB(e)}>
            Add this pizza
          </button>
        </form>
        <ul>
          {this.state.pizzas.map(pizza => {
            return (
              <li key={pizza._id}>
                <img src={pizza.img} alt={pizza.name} height="100" />
                <input
                  type="text"
                  value={pizza.name}
                  onChange={e => this.updatePizza(e, pizza._id)}
                />{" "}
                - {addSeparators(pizza.price)} eur{" "}
                <button type="button" onClick={e => this.updatePizzaInDB(e, pizza._id)}>
                  Update
                </button>
                <button type="button" onClick={e => this.deletePizza(e, pizza._id)}>
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </React.Fragment>
    );
  }

  componentDidMount() {
    axios.get("http://localhost:3000/pizzas").then(allPizzas => {
      this.setState({
        ...this.state,
        pizzas: allPizzas.data
      });
    });
  }
}
