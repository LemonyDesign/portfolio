import React from "react";
import Nav from "../components/Nav";
import { NavLink } from "react-router-dom";
import "../styles/base/base.scss";
import "../styles/base/panel.scss";
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
        <div className="ribbon">Made with React</div>
        <Nav />
        <main className="main">
          <section className="panel constraint">
            <header className="panel__header">
              <h2 className="panel__title">Two sides to every coin&hellip;</h2>
            </header>
            <p>
              A designer of more than 10 years, I am a recent FullStack /
              JavaScript bootcamp graduate. I practice and admire simple,
              elegant UI design, and I am learning to craft eloquent code using
              frontend and backend technologies like React (with Redux) and Node
              that bring functional life to the creation of beautiful, workable
              interfaces that are a pleasure to use.
            </p>
          </section>

          <section className="portfolio">
            <ul className="portfolio__list menu--settings">
              <li className="portfolio__listitem">
                <NavLink
                  to="/poem-north"
                  activeClassName="active"
                  className="portfolio__link"
                >
                  <figure className="portfolio__figure">
                    <img src="../../static/pi-ws-pon.jpg" />
                    <figcaption className="portfolio__figcaption">
                      <h3>View Project</h3>
                    </figcaption>
                  </figure>

                  <h2 className="portfolio__title">Poem of the North</h2>
                  <p>
                    Project celebrating 50 Years of the Northern Poetry Library,
                    with competition and digital platform displaying a growing
                    poem.
                  </p>
                </NavLink>
              </li>

              <li className="portfolio__listitem">
                <NavLink
                  to="/lucion"
                  activeClassName="active"
                  className="portfolio__link"
                >
                  <figure className="portfolio__figure">
                    <img src="../../static/pi-ws-lucion.jpg" />
                    <figcaption className="portfolio__figcaption">
                      <h3>View Project</h3>
                    </figcaption>
                  </figure>

                  <h2 className="portfolio__title">Lucion Services</h2>
                  <p>
                    Rework user journeys, functionality and design of site for
                    expanding risk management company to improve SEO &amp; ROI
                  </p>
                </NavLink>
              </li>

              <li className="portfolio__listitem">
                <NavLink
                  to="/up-agency"
                  activeClassName="active"
                  className="portfolio__link"
                >
                  <figure className="portfolio__figure">
                    <img src="../../static/pi-ws-up.jpg" />
                    <figcaption className="portfolio__figcaption">
                      <h3>View Project</h3>
                    </figcaption>
                  </figure>

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
                  <figure className="portfolio__figure">
                    <img src="../../static/pi-ws-casket.jpg" />
                    <figcaption className="portfolio__figcaption">
                      <h3>View Project</h3>
                    </figcaption>
                  </figure>

                  <h2 className="portfolio__title">
                    The Casket of Fictional Delights
                  </h2>
                  <p>
                    International podcasting, publication and competitions
                    platform for flash fiction and short story content.
                  </p>
                </NavLink>
              </li>
              <li className="portfolio__listitem">
                <NavLink
                  to="/npl"
                  activeClassName="active"
                  className="portfolio__link"
                >
                  <figure className="portfolio__figure">
                    <img src="../../static/pi-ws-npl.jpg" />
                    <figcaption className="portfolio__figcaption">
                      <h3>View Project</h3>
                    </figcaption>
                  </figure>

                  <h2 className="portfolio__title">Northern Poetry Library</h2>
                  <p>
                    Part of a 2-year Heritage Lottery and Northumberland County
                    Council project to bring new life to a public library
                    collection.
                  </p>
                </NavLink>
              </li>
              <li className="portfolio__listitem">
                <NavLink
                  to="/farmer"
                  activeClassName="active"
                  className="portfolio__link"
                >
                  <figure className="portfolio__figure">
                    <img src="../../static/pi-ws-farmer.jpg" />
                    <figcaption className="portfolio__figcaption">
                      <h3>View Project</h3>
                    </figcaption>
                  </figure>

                  <h2 className="portfolio__title">Farmer of Thoughts</h2>
                  <p>
                    Website for bioethicist, disability activist and broadcaster
                    Tom Shakespeare, accessibility baked in.
                  </p>
                </NavLink>
              </li>
              <li className="portfolio__listitem">
                <NavLink
                  to="/stuartcroft"
                  activeClassName="active"
                  className="portfolio__link"
                >
                  <figure className="portfolio__figure">
                    <img src="../../static/pi-ws-sc.jpg" />
                    <figcaption className="portfolio__figcaption">
                      <h3>View Project</h3>
                    </figcaption>
                  </figure>

                  <h2 className="portfolio__title">Stuart Croft Foundation</h2>
                  <p>
                    Grant applications website for a charitable body set up make
                    accessible the legacy and archive of artist–filmmaker Stuart
                    Croft.
                  </p>
                </NavLink>
              </li>
              <li className="portfolio__listitem">
                <NavLink
                  to="/the-trip"
                  activeClassName="active"
                  className="portfolio__link"
                >
                  <figure className="portfolio__figure">
                    <img src="../../static/pi-ws-trip.jpg" />
                    <figcaption className="portfolio__figcaption">
                      <h3>View Project</h3>
                    </figcaption>
                  </figure>
                  <span className="portfolio__info">
                    Course project: React + Node
                  </span>
                  <h2 className="portfolio__title">The Trip</h2>
                  <p>
                    Plan your holiday: look-up and scrapbook flights and
                    accommodation, and invite friends to crowdsource suggestions
                    for your vacay.
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
