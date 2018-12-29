import React from "react";
import Nav from "../components/Nav";
import "../styles/base/base.scss";

class ItemNPL extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.classList.add("portfolio-item", "itemnpl");
  }

  componentWillUnmount() {
    document.body.classList.remove("portfolio-item", "itemnpl");
  }
  render() {
    return (
      <React.Fragment>
        <Nav />
        <main className="main">
          <img src="../../static/pi-ws-up.jpg" />
          <section className="constraint">
            <h2 className="panel__title">NPL website</h2>
            <p>This to be the page for NPL website</p>
          </section>
        </main>
      </React.Fragment>
    );
  }
}

export default ItemNPL;
