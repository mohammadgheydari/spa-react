import React from "react";
import Header from "./Components/Shared/Header";
import Layout from "./Components/Shared/Layout";
import Footer from "./Components/Shared/Footer";
import "./Components/Shared/Layout.css";
const App = () => (
  <div>
    <Header />
    <Layout />
    <Footer />
  </div>
);

export default App;

// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;
