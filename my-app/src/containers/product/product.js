import React, { Component } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductList from "../../components/product/ProductList";
import {withRouter} from "react-router-dom"
import {connect} from "react-redux"
import {productFetch, productDelete, productUpdate} from "../../actions"

class Product extends Component {
  constructor(props) {
    super(props);
    this.delProduct = this.delProduct.bind(this);
    this.editProduct = this.editProduct.bind(this);
  }

  componentDidMount() {
   this.props.productFetch();
  }

  
  delProduct(product) {
    this.props.productDelete(product.id);
  }

  editProduct(product) {
    this.props.history.push('products/edit/' + product.id);
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h1>สินค้า</h1>
            </div>
            <div className="col-6">
              <button className="btn btn-success float-right"
               onClick={() => this.props.history.push('products/add')}>
                เพิ่มสินค้า
              </button>
            </div>
          </div>

        {this.props.products && Array.isArray(this.props.products) &&

          <ProductList
            products={this.props.products}
            onDelProduct={this.delProduct}
            onEditProduct={this.editProduct}
          />
          }
        </div>
        <Footer company="thissurache.com" email="surache2543@gmail.com"/>
      </div>
    );
  }
}
function mapStateToProps({products}) {
  return {
    products
  };
}


export default withRouter(connect(mapStateToProps, {productFetch, productDelete,productUpdate}) (Product));
