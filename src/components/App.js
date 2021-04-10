import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Covid from "./Epidemic/src2/Covid";
import Crowdsourcing from "./CrowdSourcing/src/Crowdsourcing.js";
import Resources from "./Resources";
import HomePage from "./Homepage/src/HomePage";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <div className="App">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/Login" component={Login} />
              <Route exact path="/Register" component={Register} />
              <Route exact path="/Epidemic" component={Covid} />
              <Route path="/Crowdsourcing" component={Crowdsourcing} />
              <Route path="/Resources" component={Resources} />
              <Route path="/HomePage" component={HomePage} />
              <Covid />
              <Login />
              <Home />
              <Register />
              <Resources />
              <HomePage />
            </Switch>
          </div>
        </Router>
      </>
    );
  }
}

export default App;
