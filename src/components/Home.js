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
              {/* <h2 className="panel__title">Two sides to every coin&hellip;</h2> */}
              <p>
                A frontend designer-developer with 10+ years experience, I
                practice clear, intuitive UI design, and craft eloquent code.
                Graduating from a fullstack bootcamp in 2018, I engineer using
                frontend and backend technologies like React (with Redux) and
                Node with PostgreSQL that bring meaningful functionality to the
                creation of graceful working interfaces.{" "}
                <em>Currently learning: TypeScript and GraphQL</em>
              </p>
              <ul className="menu--settings panel__nav">
                <li>
                  <a href="../../static/pi-ws-pon.jpg" download>
                    Download CV&nbsp; <i class="fas fa-file-download" />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/LemonyDesign">
                    Github&nbsp; <i class="fab fa-github" />
                  </a>
                </li>
              </ul>
            </header>
          </section>

          <section className="portfolio">
            <ul className="portfolio__list menu--settings">
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
                    Course project: React + Node + PostgreSQL
                  </span>
                  <h2 className="portfolio__title">
                    The Trip <span>2018</span>
                  </h2>
                  <p>
                    Plan your holiday: look-up and scrapbook flights and
                    accommodation, and invite friends to crowdsource suggestions
                    for your vacay.
                  </p>
                </NavLink>
              </li>
              <li className="portfolio__listitem">
                <NavLink
                  to="/vibrant-corpse"
                  activeClassName="active"
                  className="portfolio__link"
                >
                  <figure className="portfolio__figure">
                    <img src="../../static/pi-ws-vibrant.jpg" />
                    <figcaption className="portfolio__figcaption">
                      <h3>View Project</h3>
                    </figcaption>
                  </figure>
                  <span className="portfolio__info">
                    Course project: React + Node
                  </span>
                  <h2 className="portfolio__title">
                    Vibrant Corpse <span>2018</span>
                  </h2>
                  <p>
                    A brainstorming app based on randomized word combinations
                    (adjective-noun / adverb-verb) fetched from the Words API.
                  </p>
                </NavLink>
              </li>

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

                  <h2 className="portfolio__title">
                    Poem of the North <span>2018</span>
                  </h2>
                  <p>
                    Project celebrating 50 Years of the Northern Poetry Library,
                    with competition and digital platform displaying a growing
                    poem.
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

                  <h2 className="portfolio__title">
                    UP Studios <span>2018</span>
                  </h2>
                  <p>
                    Agency portfolio for UP, specialists in the creation of
                    motion graphics, video and branding for charities.
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

                  <h2 className="portfolio__title">
                    Lucion Services <span>2017-18</span>
                  </h2>
                  <p>
                    Rework user journeys, functionality and design of site for
                    expanding risk management company to improve SEO &amp; ROI
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

                  <h2 className="portfolio__title">
                    Farmer of Thoughts <span>2017</span>
                  </h2>
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

                  <h2 className="portfolio__title">
                    Stuart Croft Foundation <span>2017</span>
                  </h2>
                  <p>
                    Grant applications website for a charitable body set up make
                    accessible the legacy and archive of artist–filmmaker Stuart
                    Croft.
                  </p>
                </NavLink>
              </li>

              <li className="portfolio__listitem">
                <NavLink
                  to="/aldingbourne"
                  activeClassName="active"
                  className="portfolio__link"
                >
                  <figure className="portfolio__figure">
                    <img src="../../static/pi-ws-aldingbourne.jpg" />
                    <figcaption className="portfolio__figcaption">
                      <h3>View Project</h3>
                    </figcaption>
                  </figure>

                  <h2 className="portfolio__title">
                    Long Bench Scheme <span>2017</span>
                  </h2>
                  <p>
                    One-page mini-site and linked sales portal for Aldingbourne
                    Trust&rsquo;s Long Bench scheme.
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
                    The Casket of Fictional Delights <span>2016-19</span>
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

                  <h2 className="portfolio__title">
                    Northern Poetry Library <span>2016-17</span>
                  </h2>
                  <p>
                    Part of a 2-year Heritage Lottery and Northumberland County
                    Council project to bring new life to a public library
                    collection.
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
