import React from "react";
import Nav from "../components/Nav";
import ZoomImage from "../components/ZoomImage";
import "../styles/base/base.scss";
import "../styles/base/projects.scss";

class ItemTrip extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.classList.add("portfolio-item", "itemtrip");
  }

  componentWillUnmount() {
    document.body.classList.remove("portfolio-item", "itemtrip");
  }

  render() {
    return (
      <React.Fragment>
        <Nav />
        <main className="main project">
          <header className="project__header constraint">
            <h2 className="project__title">The Trip</h2>

            <dl className="project__refs">
              <dt className="a">Date</dt>
              <dd className="a2">Autumn 2018</dd>

              <dt className="b">Course</dt>
              <dd className="b2">Constructor Labs, team project</dd>

              <dt className="c">URL</dt>
              <dd className="c2 project__url">
                <a href="https://github.com/The-Trip/The-Trip">Github Repo</a>
              </dd>
            </dl>
          </header>

          <section className="project__section1">
            <div className="project__brief constraint">
              <div className="project__content">
                <h3 className="project__subhead-brief">Brief</h3>
                <p>
                  TheTrip.io is a platform to help you plan a successful and
                  enjoyable holiday. Create a trip, then share a link with
                  fellow travellers to a unique page for planning and
                  scrapbooking a vacation, including flights search (using the
                  kiwi.com API), and accommodation (using Google Places API
                  Places).
                </p>
                <p>
                  A key feature of The Trip is that it enables users to
                  crowdsource suggestions from the people who know you best:
                  your friends. By sharing an invite URL trip-goers can ask for
                  ideas about where to go when arriving at the trip destination,
                  and then proritise favourite suggestions.
                </p>
                <p>
                  TheTrip.io provides a sharing platform for those who love
                  travel, where multiple trips - your own and those of your
                  friends - may be viewed, added to, discussed.
                </p>
              </div>
              <aside className="project__image">
                <ZoomImage
                  imageWidth={300}
                  imageHeight={300}
                  src="../../static/project-trip-ipad.png"
                />
              </aside>
            </div>
          </section>
          <section className="project__section2 constraint">
            <section className="project__design">
              <h3 className="project__subhead-design">Features</h3>

              <ul>
                <li>
                  <strong>Invites:</strong> Unique, memorable shareable trip
                  links, with permission code variables, are dynamically
                  generated from trip data.
                </li>
                <li>
                  <strong>Login:</strong> Persistent log-in with session
                  cookies: once logged in a user can easily jump to their trip
                  or into the suggestions discussion.
                </li>
                <li>
                  <strong>Authorisation and authentication:</strong> - Passport
                  with BCrypt
                </li>
                <li>
                  <strong>Views &amp; routes:</strong> - React-Router Trip views
                  are managed by login state and permission ('trip owner' or
                  'suggester'), served by url endpoint (React-Router).
                </li>
                <li>
                  <strong>API data management:</strong> APIs: Google Places and
                  Kiwi fetch live dynamic data to populate suggestions for
                  venues and hotels and to drive flight search. Unsplash fetch
                  to generate images for each trip based on location query.
                </li>
                <li>
                  <strong>Crowdsource engine:</strong> Suggestions managed and
                  ranked by likes or chronology, with filter for trip
                  favourites. Database
                </li>
                <li>
                  <strong>Database:</strong> Trips, customers (users),
                  permissions, suggestions, comments and flights are held in a
                  relational database.
                </li>
              </ul>
              <h3 className="project__subhead-design">Future development</h3>
              <ul>
                <li>Automated share functionality for invite urls</li>
                <li>Booking for flights and hotels.</li>
                <li>Integration with GoogleMaps API</li>
                <li>Tablet and desktop layouts.</li>
                <li>Cross-browser testing (currently only Chrome).</li>
                <li>Further unit testing</li>
                <li>Page animation (using Pose animation library)</li>
                <li>Web sockets</li>
              </ul>
            </section>
            <section className="project__code">
              <h3 className="project__subhead-code">Tech stack</h3>
              <p>
                The app&rsquo;s front end is built with React, Redux, and
                React-Router, with cookie parser for login sessions; moment,
                datepicker and airport codes for flights &ndash; and an
                experiment in applying new React hooks.
              </p>
              <p>
                The back end uses Express and Node.js with PostgreSQL, Passport
                &amp; BCrypt for authentification. Web sockets (for instaneously
                pushing data to multiple users) is under development.
              </p>
              <p>Dev tools: ES Lint with Prettier, and Jest for testing.</p>
              <h3>Contribution to the Project</h3>
              <p>
                The Trip members (Phil Berryman, Chris Phillips, Tom Bast and
                myself), worked in agile scrums with morning stand-ups over a
                period of two weeks on the project thus far.
              </p>
              <p>
                In addition to collaborating on mapping and seeding the intial
                database, my contributions to the project include:{" "}
                <ul>
                  <li>
                    Write HTML schema, integrate SASS and create components with
                    semantic-bem framework
                  </li>
                  <li>
                    Wireframe, plan and design user interface, deploying views
                    for incoming data, and toggling css class states.
                  </li>
                  <li>Map user journeys and assign views with React-Router.</li>
                  <li>
                    Incorporate fetch of Unsplash image (for each trip) to the
                    /trip POST endpoint in node.
                  </li>
                  <li>
                    Changes to component hierarchy &amp; code refactoring.
                  </li>
                </ul>
              </p>
              <h3>In progress</h3>
              <p>
                Work on the suggestions page to incorporate filtering additions
                and align css class-changes with onClick events. Flights search
                refinements and design.
              </p>
            </section>
          </section>
        </main>
      </React.Fragment>
    );
  }
}

export default ItemTrip;
