import React from "react";
import { Route, Switch } from "react-router-dom";
import posed, { PoseGroup } from "react-pose";
import Footer from "../components/Footer";
import Home from "../components/Home";
import Code from "../components/Code";
import Design from "../components/Design";
import ItemUp from "../components/ItemUp";
import ItemCasket from "../components/ItemCasket";
import ItemAldingbourne from "../components/ItemAldingbourne";
import ItemNPL from "../components/ItemNPL";
import ItemFarmer from "../components/ItemFarmer";
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
          <PoseGroup>
            <RouteContainer key={location.pathname}>
              <Switch location={location}>
                <Route exact path="/" component={Home} key="home" />
                <Route path="/code" component={Code} key="code" />
                <Route path="/design" component={Design} key="design" />
                <Route path="/up-agency" component={ItemUp} key="item-up" />
                <Route
                  path="/the-casket"
                  component={ItemCasket}
                  key="item-casket"
                />
                <Route
                  path="/aldingbourne"
                  component={ItemAldingbourne}
                  key="item-aldingbourne"
                />
                <Route path="/npl" component={ItemNPL} key="item-npl" />
                <Route
                  path="/farmer"
                  component={ItemFarmer}
                  key="item-farmer"
                />
              </Switch>
            </RouteContainer>
          </PoseGroup>
          <Footer />
        </div>
      )}
    />
  );
}

export default App;
