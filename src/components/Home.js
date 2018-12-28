import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/base/base.scss";
import "../styles/components/home.scss";

class Home extends React.Component {
  componentDidMount() {
    document.body.classList.add("home");
  }

  componentWillUnmount() {
    document.body.classList.remove("home");
  }

  render() {
    return (
      <React.Fragment>
        <section className="panel constraint">
          <p>
            A designer of more than 10 years, I am a recent JavaScript bootcamp
            graduate. I admire &amp; practice simple, elegant UI design, and I
            am learning to craft eloquent code that brings functional life to
            the creation of beautiful, workable interfaces that are a{" "}
            <strong>pleasure to use</strong>.
          </p>
        </section>

        <section className="portfolio">
          <ul className="portfolio__list menu--settings">
            <li className="portfolio__listitem">
              <NavLink
                to="/design"
                activeClassName="active"
                className="portfolio__link"
                role="nav"
              >
                <img src="../../static/pi-ws-up.jpg" />
                <h2 className="portfolio__title">UP Studios</h2>
                <p>
                  Agency portfolio for UP, specialists in the creation of motion
                  graphics, video and branding for charities.
                </p>
              </NavLink>
            </li>

            <li className="portfolio__listitem">
              <img src="../../static/pi-ws-casket.jpg" />
              <h2 className="portfolio__title">
                The Casket of Fictional Delights
              </h2>
              <p>
                Platform for the publication, podcasting and competitions for
                flash fiction and short story content.
              </p>
            </li>
          </ul>
        </section>
      </React.Fragment>
    );
  }
}

export default Home;
