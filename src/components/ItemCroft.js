import React from "react";
import Nav from "../components/Nav";
import ZoomImage from "../components/ZoomImage";
import "../styles/base/base.scss";
import "../styles/base/projects.scss";

class ItemCroft extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.classList.add("portfolio-item", "itemcroft");
  }

  componentWillUnmount() {
    document.body.classList.remove("portfolio-item", "itemcroft");
  }
  render() {
    return (
      <React.Fragment>
        <Nav />
        <main className="main project">
          <header className="project__header constraint">
            <h2 className="project__title">Stuart Croft Foundation</h2>

            <dl className="project__refs">
              <dt className="a">Date</dt>
              <dd className="a2">Spring 2017</dd>

              <dt className="b">Client</dt>
              <dd className="b2">
                Stuart Croft Foundation <br />
                Contractor: Taylor McKenzie / UP
              </dd>

              <dt className="c">URL</dt>
              <dd className="c2 project__url">
                <a href="http://www.stuartcroftfoundation.org/">
                  stuartcroftfoundation.org
                </a>
              </dd>
            </dl>
          </header>

          <section className="project__section1">
            <div className="project__brief constraint">
              <div className="project__content">
                <h3 className="project__subhead-brief">Brief</h3>
                <p>
                  Working for UP (Taylor McKenzie), with a brief to create a
                  website for the Stuart Croft Foundation, a charitable body set
                  up make accessible the legacy and archive of artist–filmmaker
                  Stuart Croft. The primary aim of the site, alongside
                  exhibiting Croft&rsquo;s moving–image artworks, is to
                  establish a grant-application system for new film-makers,
                  research, publications and exhibitions.
                </p>
              </div>
              <aside className="project__image">
                <ZoomImage
                  imageWidth={300}
                  imageHeight={300}
                  src="../../static/project-sc-ipad.png"
                />
              </aside>
            </div>
          </section>
          <section className="project__section2 constraint">
            <section className="project__design">
              <h3 className="project__subhead-design">Design</h3>

              <p>
                Site design based on{" "}
                <a href="https://themeforest.net/item/enigma-creative-responsive-minimal-html-template/12271889">
                  Enigma Responsive HTML template
                </a>{" "}
                selected and supplied by my contractor (UP), along with a PSD
                template with design requirements. I deconstructed the template
                into components, and using Hammer for Mac static site generator
                created SCSS files that could them be safely and strategically
                adapted.
              </p>
              <p>
                Custom design features include a gallery of Croft&rsquo;s
                archive films, with elegant hover to summary titles, and pop–up
                to view uncluttered films hosted by Vimeo in the browser. Admin
                have the ability to add to and maintain the archive in the
                Wordpress dashboard.
              </p>

              <p>
                News and events section supporting video, large images &ndash;
                or posts with no images, with responsive carousel for articles.
              </p>
            </section>
            <section className="project__code">
              <h3 className="project__subhead-code">Code</h3>
              <p>
                In addition to an archive that features direct access to films
                direct from the Vimeo–hosted stock, the site has been developed
                with Wordpress, and incorporates a form–based submission system
                for the annual Foundation grants, with CV–upload and user–tested
                interface, and background administration system to sort
                applications for the three awards.
              </p>
            </section>
          </section>
        </main>
      </React.Fragment>
    );
  }
}

export default ItemCroft;
