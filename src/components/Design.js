import React from "react";
import Nav from "../components/Nav";
import "../styles/base/base.scss";

function Design() {
  return (
    <React.Fragment>
      <Nav />
      <main className="main">
        <section className="panel constraint">
          <h2 className="panel__title">Design ethos</h2>
          <p>
            A designer of more than 10 years, I am a recent JavaScript bootcamp
            graduate. I admire &amp; practice simple, elegant UI design, and
            appreciate &amp; craft eloquent code that brings functional life to
            the creation of beautiful, workable interfaces that are a pleasure
            to use.
          </p>
        </section>
      </main>
    </React.Fragment>
  );
}

export default Design;
