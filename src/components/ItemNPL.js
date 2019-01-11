import React from "react";
import Nav from "../components/Nav";
import ZoomImage from "../components/ZoomImage";
import "../styles/base/base.scss";
import "../styles/base/projects.scss";

class ItemNPL extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.classList.add("portfolio-item", "itemnpl");
  }

  componentWillUnmount() {
    document.body.classList.remove("portfolio-item", "itemnpl");
  }
  render() {
    return (
      <React.Fragment>
        <Nav />
        <main className="main project">
          <header className="project__header constraint">
            <h2 className="project__title">Northern Poetry Library</h2>

            <dl className="project__refs">
              <dt className="a">Date</dt>
              <dd className="a2">2016 &ndash; 2018</dd>

              <dt className="b">Client</dt>
              <dd className="b2">Northumberland County Council</dd>

              <dt className="c">URL</dt>
              <dd className="c2 project__url">
                <a href="http://northernpoetrylibrary.org.uk/">
                  northernpoetrylibrary.org.uk
                </a>
              </dd>
            </dl>
          </header>

          <section className="project__section1">
            <div className="project__brief constraint">
              <div className="project__content">
                <h3 className="project__subhead-brief">Brief</h3>
                <p>
                  The Northern Poetry Library (NPL) houses the largest
                  collection of contemporary poetry outside London in the UK.
                  The project remit &ndash; following the award of an Arts
                  Council England grant &ndash; has been to raise its profile in
                  a number of ways, to safeguard and build a future for the
                  collection.
                </p>
                <p>
                  The central plank of the NPL project has been to create a
                  digital presence for the library, part of the public library
                  system. I project–managed, designed and developed a project
                  website, social media campaign and e–newsletter, with a wide
                  remit aimed at raising awareness of the library among
                  poetry–lovers, those new to poetry &ndash; regionally,
                  nationally and internationally.
                </p>
                <p>
                  Partners and project participants include Woodhorn Museum,
                  Palace Green Library, November Club, International Print
                  Biennale 2016.
                </p>
              </div>
              <aside className="project__image">
                <ZoomImage
                  imageWidth={300}
                  imageHeight={300}
                  src="../../static/project-npl-ipad.png"
                />
              </aside>
            </div>
          </section>
          <section className="project__section2 constraint">
            <section className="project__design">
              <h3 className="project__subhead-design">Design</h3>

              <p>
                A collaboration with Lead Poet Lisa Matthews, the design aims to
                make poetry accessible without dumbing it down. We worked
                together and decided on a story–based approach to captivate
                visitors, with photographer Phyllis Christopher commissioned to
                produce a set of stunning visuals to accompany three
                &ldquo;library stories&rdquo; viewed as full–screen images and
                step–by–step content hyperlinked to break–out content.
              </p>
              <p>
                Considerations for the project meant that the budget was limited
                to the project scope, so for longevity I selected typography
                from the Google Fonts Library, opting for classic serif (Libre
                Baskerville) in combination with Open Sans to keep things
                readable. I used the{" "}
                <a href="http://astrum.nodividestudio.com/">
                  Astrum Pattern Library
                </a>{" "}
                to establish design patterns and share with other parties, and
                the <a href="https://foundation.zurb.com/">Zurb Foundation</a>{" "}
                framework to assist the build.
              </p>
              <h3>Print and Exhibition</h3>
              <p>
                Design and print production of an anthology of poetry &ndash;
                <em>Among Woods and Water</em> &ndash; celebrating the library.
              </p>
              <p>
                Worked with{" "}
                <a href="https://www.williamsdesignassociates.co.uk/">
                  Williams Design Associates
                </a>{" "}
                and{" "}
                <a href="https://museumsnorthumberland.org.uk/woodhorn-museum/">
                  Woodhorn Museum
                </a>
                , to plan and supply assets for a major exhibition at the
                Northumberland venue, using the website stories as the
                foundation for the exhibition.
              </p>
            </section>
            <section className="project__code">
              <h3 className="project__subhead-code">Code</h3>

              <p>
                The JS slider I used is the comprehensive and functionally
                responsive{" "}
                <a href="https://alvarotrigo.com/fullPage/">fullpage.js</a>, set
                up to enable responsive vertically-scrolled full-page slides,
                the vertical axis controlled by dot navigation, the vertical nav
                called by custom links.
              </p>

              <p>
                For the project duration I integrated the static site with
                Wordpress CMS so that library staff could update the project
                events diary, custom-built for scheduling, expiration and
                archiving, designed with at-a-glance details panel and content
                area for full events.
              </p>

              <ZoomImage
                imageWidth={315}
                imageHeight={233}
                src="../../static/npl-code.png"
              />

              <h3>Challenges</h3>
              <p>
                The offcanvas navigation interaction with the fullpage slider
                requires some intricate CSS-JQuery orchestration when in
                combination with a further visible panel on the home page which
                transitions off when the user initiates vertical slide-scroll.
                For mohile view, viewport detection &ldquo;switches&rdquo; the
                slider to scroll rather than slide, so that text does not
                overflow and can extend to its auto-height (not constrained by
                the viewport).
              </p>
            </section>
          </section>
        </main>
      </React.Fragment>
    );
  }
}

export default ItemNPL;
