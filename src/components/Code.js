import React from "react";
import Nav from "../components/Nav";
import "../styles/base/base.scss";

function Code() {
  return (
    <React.Fragment>
      <Nav />
      <main className="main">
        <section className="panel constraint">
          <p>
            A designer of more than 10 years, I am a recent JavaScript bootcamp
            graduate. I admire &amp; practice simple, elegant UI design, and
            appreciate &amp; am learning to craft eloquent code that brings
            functional life to the creation of beautiful, workable interfaces
            that are a pleasure to use.
          </p>
        </section>
      </main>
    </React.Fragment>
  );
}

export default Code;
