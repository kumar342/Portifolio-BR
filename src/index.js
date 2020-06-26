import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css'
import '../node_modules/font-awesome/css/font-awesome.min.css';
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

// import { createBrowserHistory, hashHistory } from "history";

// export const history = hashHistory();

ReactDOM.render(
    <Router >
        <App />
    </Router>
    , document.getElementById("app"));
