import React from "react";
import Nav from "../components/Nav";
import ZoomImage from "../components/ZoomImage";
import "../styles/base/base.scss";
import "../styles/base/projects.scss";

class ItemCorpse extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.classList.add("portfolio-item", "itemcorpse");
  }

  componentWillUnmount() {
    document.body.classList.remove("portfolio-item", "itemcorpse");
  }

  render() {
    return (
      <React.Fragment>
        <Nav />
        <main className="main project">
          <header className="project__header constraint">
            <h2 className="project__title">Vibrant Corpse</h2>

            <dl className="project__refs">
              <dt className="a">Date</dt>
              <dd className="a2">Autumn 2018</dd>

              <dt className="b">Course Exercise (Solo)</dt>
              <dd className="b2">At Constructor Labs</dd>

              <dt className="c">URL</dt>
              <dd className="c2 project__url">
                <a href="https://github.com/LemonyDesign/vibrant-corpse">
                  Github Repo
                </a>
              </dd>
            </dl>
          </header>

          <section className="project__section1">
            <div className="project__brief constraint">
              <div className="project__content">
                <h3 className="project__subhead-brief">Brief</h3>
                <p>
                  Vibrant corpse (cadavre exquis in French) is a game invented
                  by the Surrealists aimed at stimulating creative response. The
                  method involves the collection and assemblage of generated
                  words or images, according to an agreed rule (in this case
                  “Adjective-Noun”). This game seeks to mimic the original by
                  randomly generating lists of words, selected by type
                  (adjective/adverb &ndash; noun/verb) and combining the results
                  to create unique combinations. Intriguing combinations may
                  then be chosen for workshopping &ndash; with a timer allowing
                  5 minutes * of free-flow writing.
                </p>
              </div>
              <aside className="project__image">
                <ZoomImage
                  imageWidth={360}
                  imageHeight={252}
                  src="../../static/project-corpse-ipad.png"
                />
              </aside>
            </div>
          </section>
          <section className="project__section2 constraint">
            <section className="project__design">
              <h3 className="project__subhead-design">The build</h3>

              <p>
                Vibrant Corpse is a brainstorming app based on randomized word
                combinations (adjective-noun / adverb-verb) fetched from the{" "}
                <a href="https://www.wordsapi.com/">Words API</a>. For the
                purpose of the app I was looking for an API to serve random
                words by type. Words does have a random endpoint, though it only
                serves a single word at a time by type. For this reason, the app
                fetches within a simple, defined <em>for</em> loop * 3. I
                decided for UI intrigue to let the fetching process show on the
                front end rather than awaiting the full payload to complete and
                showing a loader during the async process.
              </p>
              <p>
                I chose Inconsolata, a Google typeface, to express a certain
                writerliness.
              </p>

              <h3>Under development</h3>
              <p>
                Responsive design, with changing view state when word-combos are
                added for workshopping. Add descriptions as tooltips to
                generated word lists, requiring a rebuild of word arrays as
                objects containing word and definition properties, so as to pull
                in during fetches from the API endpoint.
              </p>
              <p>For future development:</p>
              <ul>
                <li>
                  Database plus login, so that users can access and store
                  workshopped content.
                </li>
                <li>Develop using GraphQL API approach.</li>
              </ul>
            </section>
            <section className="project__code">
              <h3 className="project__subhead-code">Code</h3>
              <p>
                Built with React, Express and Node.js (API fetch handled on the
                Node server to protect credentials on the back end), with ES
                Lint &amp; Prettier. The app is deployed on Heroku for viewing
                at{" "}
                <a href="https://vibrant-corpse.herokuapp.com/">
                  vibrant-corpse.herokuapp.com/
                </a>
              </p>
              <ul>
                <li>
                  A random word API endpoint serves 3 cycles of words, which the
                  user may select by type &ndash; adjective/adverb, noun/verb
                </li>
                <li>
                  Local storage is used to select generated word combinations
                  for workshopping (may be added or deleted from selected stock)
                </li>
                <li>
                  Once the selcted word appears in the Workshop area, a timer is
                  activated on adding word combo to the workshop textarea
                </li>
                <li>
                  A className is applied when word combo has been added, and css
                  animation plays out as the timer is reaching its end (set to
                  10s for testing!)
                </li>
              </ul>
            </section>
          </section>
        </main>
      </React.Fragment>
    );
  }
}

export default ItemCorpse;
