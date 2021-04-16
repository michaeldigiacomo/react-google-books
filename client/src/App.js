import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        {/* Create Nav and three reacrt routes. One route for path="/" which renders the Home page and
          One route for path='/saved" which renders the Saved  component and
          One route for all the rest of paths which renders the MoMatch page */}
        <div>
          <Nav />
          <Switch>
            <Route exact path={["/", "books"]}>
              <Books />
            </Route>
            <Route exact path="/books/id">
              <Detail />
            </Route>
            <Route>
              <NoMatch />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
