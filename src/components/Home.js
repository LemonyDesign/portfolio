import React from "react";
import Nav from "../components/Nav";
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
        <Nav />
        <main className="main">
          <section className="panel constraint">
            <p>
              A designer of more than 10 years, I am a recent JavaScript
              bootcamp graduate. I admire &amp; practice simple, elegant UI
              design, and I am learning to craft eloquent code that brings
              functional life to the creation of beautiful, workable interfaces
              that are a <strong>pleasure to use</strong>.
            </p>
          </section>

          <section className="portfolio">
            <ul className="portfolio__list menu--settings">
              <li className="portfolio__listitem">
                <NavLink
                  to="/up-agency"
                  activeClassName="active"
                  className="portfolio__link"
                >
                  <img src="../../static/pi-ws-up.jpg" />
                  <h2 className="portfolio__title">UP Studios</h2>
                  <p>
                    Agency portfolio for UP, specialists in the creation of
                    motion graphics, video and branding for charities.
                  </p>
                </NavLink>
              </li>

              <li className="portfolio__listitem">
                <NavLink
                  to="/the-casket"
                  activeClassName="active"
                  className="portfolio__link"
                >
                  <img src="../../static/pi-ws-casket.jpg" />
                  <h2 className="portfolio__title">
                    The Casket of Fictional Delights
                  </h2>
                  <p>
                    Podcasting, publication and competitions platform for flash
                    fiction and short story content.
                  </p>
                </NavLink>
              </li>
              <li className="portfolio__listitem">
                <NavLink
                  to="/npl"
                  activeClassName="active"
                  className="portfolio__link"
                >
                  <img src="../../static/pi-ws-npl.jpg" />
                  <h2 className="portfolio__title">Northern Poetry Library</h2>
                  <p>
                    Celebrating 50 years of the Northern Poetry Library in
                    Northumberland.
                  </p>
                </NavLink>
              </li>
              <li className="portfolio__listitem">
                <NavLink
                  to="/farmer"
                  activeClassName="active"
                  className="portfolio__link"
                >
                  <img src="../../static/pi-ws-farmer.jpg" />
                  <h2 className="portfolio__title">Farmer of Thoughts</h2>
                  <p>
                    Website for bioethicist, disability activist and broadcaster
                    Tom Shakespeare, accessibility baked in.
                  </p>
                </NavLink>
              </li>
            </ul>
          </section>
        </main>
      </React.Fragment>
    );
  }
}

export default Home;
