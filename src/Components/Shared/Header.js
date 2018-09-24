import React from "react";
import { Link } from "react-router-dom";
// import Logo from "../../../logo.png";

const Header = () => (
  // <header>
  //   <nav>
  //     <ul>
  //       <li>
  //         <Link to="/">Home</Link>
  //       </li>
  //       <li>
  //         <Link to="/about">About</Link>
  //       </li>
  //       <li>
  //         <Link to="/contact">Contact</Link>
  //       </li>
  //     </ul>
  //   </nav>
  // </header>

  <header>
    <nav className="navbar navbar-expand-lg navbar-light bg-white bg-light justify-content-center">
      <div className="container">
        <Link to="/" className="navbar-brand mr-0 ml-0">
          <img
            src="https://flightio.com/images/logo.png"
            width="180px"
            alt="flightio-logo"
          />
        </Link>
        <button
          className="navbar-toggler ml-1"
          type="button"
          data-toggle="collapse"
          data-target="#collapsingNavbar2"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="navbar-collapse collapse justify-content-between align-items-center w-100"
          id="collapsingNavbar2"
        >
          <div>
            <ul className="navbar-nav mx-auto text-center">
              <li className="nav-item">
                <Link to="/page/about-us" className="nav-link ml-4">
                  درباره ما
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/page/contact-us" className="nav-link ml-4">
                  تماس با ما
                </Link>
              </li>
              <li className="nav-item active">
                <Link to="/domestic" className="nav-link ml-4">
                  پرواز داخلی
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/international" className="nav-link ml-4">
                  پرواز خارجی
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/hotel" className="nav-link ml-4">
                  هتل
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/train" className="nav-link ml-4">
                  قطار
                </Link>
              </li>
            </ul>
          </div>

          <ul className="nav navbar-nav flex-row justify-content-center flex-nowrap">
            <li className="nav-item">
              <span className="ml-2 mt-2 d-inline-block"> 021-41501</span>
            </li>
            <li className="nav-item">
              <Link to="/login" className="btn btn-outline-primary ml-2">
                ورود
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" className="btn btn-outline-success">
                ثبت نام
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;
