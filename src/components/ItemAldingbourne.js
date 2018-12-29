import React from "react";
import Nav from "../components/Nav";
import "../styles/base/base.scss";

class ItemAldingbourne extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.classList.add("portfolio-item", "itemaldingbourne");
  }

  componentWillUnmount() {
    document.body.classList.remove("portfolio-item", "itemaldingbourne");
  }
  render() {
    return (
      <React.Fragment>
        <Nav />
        <main className="main">
          <img src="../../static/pi-ws-up.jpg" />
          <section className="constraint">
            <h2 className="panel__title">Aldingbourne Longbench Scheme</h2>
            <p>This to be the page for Longbench website</p>
          </section>
        </main>
      </React.Fragment>
    );
  }
}

export default ItemAldingbourne;
