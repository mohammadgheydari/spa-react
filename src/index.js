import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
// import Logo from "./Logo.svg";
ReactDOM.render(
  //   <Provider store={store}>
  <BrowserRouter>
    {/* <Logo /> */}
    <App />
  </BrowserRouter>,
  //   </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
