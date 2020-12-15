import React, { Component } from "react";
import {Link} from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), {}, 1000);
    // console.log("componentDidMount");
  }
  componentDidUpdate() {
    // console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    // console.log("componentWillUnmount");
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    const style = { height: 70 };

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 text-left">
            <h1 className="text-success">
              <img style={style} src="/images/logo/logo.png" />
              เฮลตี้ คาเฟ่
            </h1>
          </div>
          <div className="col-md-4 text-right">
            <h5 className="text-muted mt-4">
              {this.state.date.toLocaleTimeString()}
            </h5>
            <ul className="list-inline">
              <li className="list-inline-item"><Link  className="text-success text-decoration-none" to="/"> หน้าหลัก </Link></li> 
              <li className="list-inline-item">|</li> 
              <li className="list-inline-item"><Link  className="text-success text-decoration-none" to="/orders"> รายการสั่งซื้อ</Link></li> 
              <li className="list-inline-item">|</li> 
              <li className="list-inline-item"><Link  className="text-success text-decoration-none" to="/products"> สินค้า</Link></li> 
              <li className="list-inline-item">|</li> 
              <li className="list-inline-item"><Link className="text-success text-decoration-none" to="/about"> เกี่ยวกับเรา</Link></li> 
            </ul>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default Header;
