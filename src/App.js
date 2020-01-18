import React from "react";
import logo from "./logo.svg";
import "./App.css";
import store from "./store";
import { Route } from "react-router-dom";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import CalendarContainer from "./components/CalendarContainer";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <header className="header">
          <h1>EXPENCE TRACKER</h1>
        </header>
        <Container>
          <Route exact path="/" component={CalendarContainer}></Route>
        </Container>
      </Provider>
    </div>
  );
}

export default App;
