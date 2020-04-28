/* eslint-disable react/jsx-filename-extension */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import NavBar from "./Nav/NavBar";
import Footer from "./Footer";

ReactDOM.render(
  <>
    <BrowserRouter>
      <NavBar />
      <App />
      <Footer />
    </BrowserRouter>
  </>,
  document.getElementById("root")
);
