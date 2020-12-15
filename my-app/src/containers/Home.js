import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductItem from "../components/product/ProductItem";
import Monitor from "../components/monitor/Monitor";
import { connect } from "react-redux";
import { productFetch } from "../actions";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.productFetch();
  }

  render() {
    return (
      <div>
        <Header />
        <Monitor products={this.props.products} />
        <Footer company="Thissurache.com" email="surache2543@gmail.com" />
      </div>
    );
  }
}

function mapStateToProps({ products }) {
  return { products };
}

export default connect(mapStateToProps, { productFetch })(Home);
