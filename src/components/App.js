import React from "react";
import { Route, Switch } from "react-router-dom";
import posed, { PoseGroup } from "react-pose";
import Footer from "../components/Footer";
import Home from "../components/Home";
import Code from "../components/Code";
import Design from "../components/Design";
import ItemTrip from "../components/ItemTrip";
import ItemBeer from "../components/ItemBeer";
import ItemCorpse from "../components/ItemCorpse";
import ItemPoem from "../components/ItemPoem";
import ItemLucion from "../components/ItemLucion";
import ItemUp from "../components/ItemUp";
import ItemCasket from "../components/ItemCasket";
import ItemAldingbourne from "../components/ItemAldingbourne";
import ItemNPL from "../components/ItemNPL";
import ItemFarmer from "../components/ItemFarmer";
import ItemCroft from "../components/ItemCroft";
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
                <Route path="/the-trip" component={ItemTrip} key="item-trip" />
                <Route
                  path="/vibrant-corpse"
                  component={ItemCorpse}
                  key="item-vibrant"
                />
                <Route
                  path="/where-to-beer"
                  component={ItemBeer}
                  key="item-beer"
                />

                <Route
                  path="/poem-north"
                  component={ItemPoem}
                  key="item-poem"
                />
                <Route
                  path="/lucion"
                  component={ItemLucion}
                  key="item-lucion"
                />
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
                <Route
                  path="/stuartcroft"
                  component={ItemCroft}
                  key="item-stuartcroft"
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
