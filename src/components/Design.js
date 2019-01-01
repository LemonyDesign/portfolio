import React from "react";
import Nav from "../components/Nav";
import "../styles/base/base.scss";

class Design extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.classList.add("design");
  }

  componentWillUnmount() {
    document.body.classList.remove("design");
  }
  render() {
    return (
      <React.Fragment>
        <Nav />
        <main className="main">
          <section className="panel constraint">
            <header className="panel__header">
              <h2 className="panel__title">Design</h2>
            </header>
            <p>
              A designer of more than 10 years, I am a recent JavaScript
              bootcamp graduate. I admire &amp; practice simple, elegant UI
              design, and appreciate &amp; am learning to craft eloquent code
              that brings functional life to the creation of beautiful, workable
              interfaces that are a pleasure to use.
            </p>
          </section>
        </main>
      </React.Fragment>
    );
  }
}

export default Design;
