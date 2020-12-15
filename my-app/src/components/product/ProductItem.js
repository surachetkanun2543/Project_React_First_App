import React, { Component } from "react";

class ProductItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { productName, unitPrice, thumbnail } = this.props.product;
    return (
      <div className="col-md-3 col-sm-6">
        <img className="img-fluid img-thumbnail zoom" src={thumbnail} />
        <h5 className="mt-3">{productName}</h5>
        <p className="text-right">{unitPrice} THB </p>
        {/* <div className="d-grid gap-2"> */}
          {this.props.onAddOrder && 
            <button
              className="btn btn-warning col-5"
              onClick={() => this.props.onAddOrder(this.props.product)}
            >
              ซื้อ
            </button>
          }

          {(this.props.onDelProduct || this.props.onEditProduct ) && 
            <button className="btn  btn-warning col-5"
            onClick={() => this.props.onEditProduct(this.props.product)}
            >
              แก้ไข</button>
          }

          {(this.props.onDelProduct || this.props.onEditProduct ) && 
            <button
              className="btn btn-danger col-5 float-right"
              onClick={() => this.props.onDelProduct(this.props.product)}
            >
              ลบ
            </button>
          }

          <hr />
        </div>
      // </div>
    )
  }
}

export default ProductItem;
