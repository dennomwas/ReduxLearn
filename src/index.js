import React from "react";
import ReactDOM from "react-dom";

import store from "./store/index";
import addArticle from "./actions/index";

import App from "./components/App";

window.store = store;
window.addArticle = addArticle;

ReactDOM.render(<App />, document.getElementById("root"));
