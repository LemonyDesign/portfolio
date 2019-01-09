import React from "react";
import Nav from "../components/Nav";
import ZoomImage from "../components/ZoomImage";
import "../styles/base/base.scss";
import "../styles/base/projects.scss";

class ItemLucion extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.classList.add("portfolio-item", "itemlucion");
  }

  componentWillUnmount() {
    document.body.classList.remove("portfolio-item", "itemlucion");
  }

  render() {
    return (
      <React.Fragment>
        <Nav />
        <main className="main project">
          <header className="project__header constraint">
            <h2 className="project__title">Lucion Services</h2>

            <dl className="project__refs">
              <dt className="a">Date</dt>
              <dd className="a2">November 2017 &ndash; August 2018</dd>

              <dt className="b">Client</dt>
              <dd className="b2">Arttia Creative > Lucion Services</dd>

              <dt className="c project__urltitle">URL</dt>
              <dd className="c2 project__url">
                <a href="http://www.lucionservices.com/">lucionservices.com</a>
              </dd>
            </dl>
          </header>

          <section className="project__section1">
            <div className="project__brief constraint">
              <div className="project__content">
                <h3 className="project__subhead-brief">Brief</h3>
                <p>
                  Lucion Services is an asbestos and risk management specialist
                  that has grown dramatically over the last few years, to become
                  one of the UK&rsquo;s major contractors. Working as the
                  front–end Wordpress developer for{" "}
                  <a href="https://arttia.co.uk/">Arttia Creative</a>, the
                  underlying aim has been to improve traffic to the website,
                  address UX issues for customer–facing and employee journeys,
                  and bring clarity via significant changes to the UI. In
                  combination with a foundational SEO strategy, the site
                  modifications are resulting in a marked steady growth in site
                  visits.
                </p>
              </div>
              <aside className="project__image">
                <ZoomImage
                  imageWidth={300}
                  imageHeight={300}
                  src="../../static/project-lucion-ipad.png"
                />
              </aside>
            </div>
          </section>
          <section className="project__section2 constraint">
            <section className="project__design">
              <h3 className="project__subhead-design">Design</h3>

              <p>
                Research user journey using analytics tools to re–map, making
                changes in categorisation and structure to shorten journeys
                where possible, clarify, and make more efficient.
              </p>

              <p>
                Implement a redesign, working with wireframe and PSDs, of key
                areas, landing pages, forms and sections. Redesign introduced
                complex new mobile–tablet–desktop navigation to allow mining of
                Lucion&rsquo;s historical and growing content, and focused on
                making user journeys easier and clearer on the human end &ndash;
                with primary aim of designing site structure to perform well in
                SEO terms.
              </p>
              <h3>Challenges</h3>

              <p>
                Alongside an out-of-date Bootstrap framework, design coherence
                had been compromised on the site over time. To address this I
                set up a webpack SCSS compiler to compartmentalize and bring
                styles coherence, allowing modifications while ensuring that
                styles for areas not being worked on were untouched.
              </p>
            </section>
            <section className="project__code">
              <h3 className="project__subhead-code">Code</h3>
              <p>
                The codebase is a custom Wordpress install and our revised site
                structure involved creation of new taxonomies to handle a more
                SEO-friendly silo structure that would also clarify user
                journeys. New custom posts and taxonomies then needed to be
                associated with established custom posts to pull in related
                posts within loops (e.g. case studies and news relating to new
                services).
              </p>
              <p>
                The original developers had flown-in generalised custom field
                code rather than developing for site needs using Wordpress' own
                code, so there was a percentage of redundant code that needed
                removing and redeploying so as to improve performance.
              </p>
            </section>
          </section>
        </main>
      </React.Fragment>
    );
  }
}

export default ItemLucion;
