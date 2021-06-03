import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import UnivFilter from "./Components/UnivFilter";
import UnivIndex from "./Components/UnivIndex";
import Navbar from "./Components/Navbar";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <div className="content">
            <Navbar />
            <Switch>
              <Route exact path="/">
                <React.Fragment>
                  <UnivFilter />
                  <UnivIndex />
                </React.Fragment>
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
