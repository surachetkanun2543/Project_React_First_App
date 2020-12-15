import "./font.css";
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import About from "./containers/About";
import Order from "./containers/order/order";
import Product from "./containers/product/product";
import NotFound from "./containers/error/notfound"
import ProductEdit from './containers/product/ProductEdit';

class App extends Component {
  renderRouter() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/orders" component={Order} />
        <Route exact path="/Products" component={Product} />

        <Route exact path="/Products/add" component={ProductEdit} />
        <Route exact path="/Products/edit/:id" component={ProductEdit} />

        <Route component={NotFound} />
      </Switch>
    );
  }

  render() {
    return <BrowserRouter>{this.renderRouter()}</BrowserRouter>;
  }
}

export default App;
