import React from "react";
import "../styles/base/base.scss";

function Footer() {
  return (
    <React.Fragment>
      <footer className="sitefooter">
        <section className="constraint">
          <p>
            <a href="https://www.instagram.com/_traversal_/">
              Instagram:&nbsp; _traversal_
            </a>
            <br />
            &copy; Melanie Ashby 2018
          </p>
        </section>
      </footer>
    </React.Fragment>
  );
}

export default Footer;
