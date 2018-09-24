import React, { Component } from "react";
import { Link } from "react-router-dom";
import Earth from "../../images/earth.svg";
import "./error.css";

class Index extends Component {
  state = {};
  render() {
    return (
      <div className="error-page mb-5 mف-5">
        <div className="text">
          4<img src={Earth} alt="earth" />4
        </div>
        <h1>صفحه مورد نظر یافت نشد</h1>
        <Link
          to="/"
          className="btn btn-warning btn-flightio pt-2 pb-2 mt-3 mb-4 "
        >
          بازگشت به صفحه اصلی
        </Link>
      </div>
    );
  }
}

export default Index;
