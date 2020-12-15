import React, { Component } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { connect } from "react-redux"
import { orderFetch, orderDelete } from "../../actions/index"

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = { orders: null };
  }

  componentDidMount() {
    this.props.orderFetch();
  }

  delOrder(order) {
    this.props.orderDelete(order.id);
    this.props.orderFetch();
  }

  showOrders() {
    return (
      this.props.orders &&
      this.props.orders.map((order) => {
        const date = new Date(order.orderedDate);
        return (
          <div key={order.id} className="col-md-3">
            <hr />
            <p className="text-right">
              <button
                className="btn btn-danger btn-sm"
                onClick={() => this.delOrder(order)}
              >
                X
              </button>
            </p>
            <h5>
              วันที่ {date.toLocaleDateString()}
              <br />
              เวลา {date.toLocaleTimeString()}
            </h5>
            <hr />
            <ul>
              {order.orders &&
                order.orders.map((record) => {
                  return (
                    <li key={record.product.id}>
                      {record.product.productName} จำนวน  {record.quantity} ชิ้น
                      <br /> เป็นเงิน {record.product.unitPrice * record.quantity} บาท
                      <hr />
                    </li>
                  );
                })}
            </ul>
            <div className="card-footer">
              <p className="title text-danger"> ยอดรวม {order.totalPrice} บาท </p>
            </div>
          </div>
        );
      })
    );
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <h1 className="m-4"> รายการสั่งซื้อ </h1>
          <div className="card">
            <div className="card-body">
              <div className="row m-3">{this.showOrders()}</div>
            </div>
          </div>
          <Footer company="Thissurache.com" email="surache2543@gmail.com" />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ orders }) {
  return {
    orders
  };
}

export default (connect(mapStateToProps, { orderFetch, orderDelete })(Order));
