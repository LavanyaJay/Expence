import React from "react";

import "./App.css";
import store from "./store";
import { Route } from "react-router-dom";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import CalendarContainer from "./components/CalendarContainer";
import TrackerContainer from "./components/TrackerContainer";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <header className="header">
          <Link to={"/"}>
            <h1>EXPENCE TRACKER</h1>
          </Link>
        </header>
        <Container>
          <Route exact path="/" component={CalendarContainer}></Route>
          <Route exact path="/day/:date" component={TrackerContainer}></Route>
        </Container>
      </Provider>
    </div>
  );
}

export default App;
