import React from "react";
import Nav from "../components/Nav";
import "../styles/base/base.scss";

class ItemFarmer extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.classList.add("portfolio-item", "itemfarmer");
  }

  componentWillUnmount() {
    document.body.classList.remove("portfolio-item", "itemfarmer");
  }
  render() {
    return (
      <React.Fragment>
        <Nav />
        <main className="main">
          <img src="../../static/pi-ws-up.jpg" />
          <section className="constraint">
            <h2 className="panel__title">Farmer of Thoughts</h2>
            <p>This to be the page for Tom Shakespeare's website</p>
          </section>
        </main>
      </React.Fragment>
    );
  }
}

export default ItemFarmer;
