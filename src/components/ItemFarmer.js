import React from "react";
import Nav from "../components/Nav";
import ZoomImage from "../components/ZoomImage";
import "../styles/base/base.scss";
import "../styles/base/projects.scss";

class ItemFarmer extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.classList.add("portfolio-item", "itemfarmer");
  }

  componentWillUnmount() {
    document.body.classList.remove("portfolio-item", "itemfarmer");
  }
  render() {
    return (
      <React.Fragment>
        <Nav />
        <main className="main project">
          <header className="project__header constraint">
            <h2 className="project__title">Farmer of Thoughts</h2>

            <dl className="project__refs">
              <dt className="a">Date</dt>
              <dd className="a2">Launch October 2017</dd>

              <dt className="b">Client</dt>
              <dd className="b2">Tom Shakespeare</dd>

              <dt className="c">URL</dt>
              <dd className="c2 project__url">
                <a href="https://farmerofthoughts.co.uk/">
                  farmerofthoughts.co.uk
                </a>
              </dd>
            </dl>
          </header>

          <section className="project__section1">
            <div className="project__brief constraint">
              <div className="project__content">
                <h3 className="project__subhead-brief">Brief</h3>
                <p>
                  Personal website for academic, philosopher and disability
                  rights campaigner Professor Tom Shakespeare. The HTML is
                  written from the ground up to conform to WC3 AA web content
                  accessibility guidelines, providing behind–the–scenes
                  accessibility for screen readers and keyboard capabilities.
                  Shakespeare &ndash; like his namesake &ndash; is a prolific
                  writer and broadcaster, so the site aims at providing
                  easy–on–the–eyes and elegant stylings for readability of
                  articles. We also worked on splitting content into grouped
                  content and serializations where appropriate.
                </p>
              </div>
              <aside className="project__image">
                <ZoomImage
                  imageWidth={300}
                  imageHeight={300}
                  src="../../static/project-farmer-ipad.png"
                />
              </aside>
            </div>
          </section>
          <section className="project__section2 constraint">
            <section className="project__design">
              <h3 className="project__subhead-design">Design</h3>

              <p>
                Based on a Tom Paine quote &lsquo;I am a farmer of thoughts, and
                all the crops I raise I give away&rsquo;, the home page presents
                an 18th–Century map of fields, with a full–page image hover
                effect over areas of the map that present different categories.
                Selecting a category gives a pop–up to lead each section and
                entice further investigation. This changes for responsive views
                on tablet and mobile, where the hover effect and pop–ups are
                replaced, to serve categories with their lead–in content
                overlaid on images.
              </p>
              <ZoomImage
                imageWidth={360}
                imageHeight={235}
                src="../../static/farmer-image.png"
              />
              <p>
                With readability as the primary objective, UI research and drive
                has focused on contrast, line-length and typography, with user
                testing across devices and aspects, to ensure a comfortable and
                simple reading experience.
              </p>
            </section>
            <section className="project__code">
              <h3 className="project__subhead-code">Code</h3>
              <p>
                The site is built on the Wordpress CMS, with custom post types
                and taxonomies providing extensive categorisation of content
                (single and grouped articles, blog posts, events, daily quotes).
                Each section features a simple–to–use AJAX search, to make the
                wealth of articles easy–to–browse.
              </p>

              <p>With accessibily a core concern, I took a variety of tacks:</p>
              <ul>
                <li>
                  Semantic HTML codebase, deploying ARIA and following{" "}
                  <a href="https://a11yproject.com/">A11Y</a> recommendations to
                  build a best-practice structure for screen-readers and
                  keyboard.
                </li>
                <li>
                  Dynamic site map which provides full access to all the
                  articles.
                </li>
                <li>
                  Link lists (designed for touch devices and as screen-reader
                  navigational aids) to provide multiple points of entry.
                </li>
              </ul>
              <h3>CHALLEGES</h3>
              <p>
                One of the unanticipatedly tricksy tasks was in part-automating
                the import of content from Tom&rsquo;s Disabled Lives Blogger
                blog to Wordpress, requiring careful re-mapping of fields
                between the different systems, via Excel spreadsheets to XML
                import.
              </p>
            </section>
          </section>
        </main>
      </React.Fragment>
    );
  }
}

export default ItemFarmer;
