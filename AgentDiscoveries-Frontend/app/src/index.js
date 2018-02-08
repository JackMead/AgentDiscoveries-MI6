require("../sass/styles.scss"); // Import so that webpack loads all of the sass

import * as React from "react";
import * as ReactDOM from "react-dom";

import Navbar from "./components/navbar";
import Login from "./components/login";

ReactDOM.render(
    <Navbar />,
    document.getElementById("react-navbar")
);

ReactDOM.render(
    <Login />,
    document.getElementById("react-root")
);