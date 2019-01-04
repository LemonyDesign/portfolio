import React from "react";
import "../styles/base/base.scss";

function Footer() {
  return (
    <React.Fragment>
      <footer className="sitefooter">
        <section className="constraint">
          <p>
            Twitter:&nbsp;
            <a href="https://twitter.com/_traversing_">@_traversing_</a>
            <br />
            &copy; Melanie Ashby 2018
          </p>
        </section>
      </footer>
    </React.Fragment>
  );
}

export default Footer;
