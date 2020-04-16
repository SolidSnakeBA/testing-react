import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";

import CounterComponent from "./examples/1/counter.component";
import Counter from "./examples/2/counter";
import AngularCounterWrapper from "./examples/3/wrapper";

const Menu = () => (
  <ul>
    <li>
      <Link to="/1">Counter - Class component</Link>
      <Link to="/2">Counter - Functional component</Link>
      <Link to="/3">Counter - AngularJS component</Link>
    </li>
  </ul>
);

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Menu} />
        <Route path="/1" component={CounterComponent} />
        <Route path="/2" component={Counter} />
        <Route path="/3" component={AngularCounterWrapper} />
      </div>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
