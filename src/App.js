import React, { Component } from "react";
import "./App.css";
import Cart from "./Components/Card";
import CartData from "./Data";
import { CSSTransition } from "react-transition-group";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      Data: CartData,
      val: 0,
      rep:""
    };
  }

  handleChange() {
    if (this.state.val < 4) {
      this.setState({
        val: this.state.val + 1
      });
    }
  }

  render() {
    return (
      <div>
        <header className="App-header">
          <CSSTransition appear={true} timeout={20000}>
            <Cart ask={this.state.Data[this.state.val]} />
          </CSSTransition>
          <div>
            <input
              className="btn"
              type="submit"
              value="Suivant"
              onClick={this.handleChange.bind(this)}
            />
          </div>
        </header>
      </div>
    );
  }
}
