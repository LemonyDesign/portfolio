import React from "react";
import { Route, Switch } from "react-router-dom";
import posed, { PoseGroup } from "react-pose";
import Nav from "../components/Nav";
import Home from "../components/Home";
import Code from "../components/Code";
import Design from "../components/Design";
import "../styles/base/base.scss";
import "../styles/components/app.scss";

function App() {
  const RouteContainer = posed.div({
    enter: { opacity: 1, delay: 300, beforeChildren: true },
    exit: { opacity: 0 }
  });

  return (
    <Route
      render={({ location }) => (
        <div className="page">
          <Nav />
          <main className="main">
            <PoseGroup>
              <RouteContainer key={location.pathname}>
                <Switch location={location}>
                  <Route exact path="/" component={Home} key="home" />
                  <Route path="/code" component={Code} key="code" />
                  <Route path="/design" component={Design} key="design" />
                </Switch>
              </RouteContainer>
            </PoseGroup>
          </main>
        </div>
      )}
    />
  );
}

export default App;
