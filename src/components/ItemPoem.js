import React from "react";
import Nav from "../components/Nav";
import ZoomImage from "../components/ZoomImage";
import "../styles/base/base.scss";
import "../styles/base/projects.scss";

class ItemLucion extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.classList.add("portfolio-item", "itempoem");
  }

  componentWillUnmount() {
    document.body.classList.remove("portfolio-item", "itempoem");
  }

  render() {
    return (
      <React.Fragment>
        <Nav />
        <main className="main project">
          <header className="project__header constraint">
            <h2 className="project__title">Poem of the North</h2>

            <dl className="project__refs">
              <dt className="a">Date</dt>
              <dd className="a2">April 2018 - January 2019</dd>

              <dt className="b">Client</dt>
              <dd className="b2">Northumberland County Council</dd>

              <dt className="c">URL</dt>
              <dd className="c2 project__url">
                <a href="http://poemofthenorth.co.uk">poemofthenorth.co.uk</a>
              </dd>
            </dl>
          </header>

          <section className="project__section1">
            <div className="project__brief constraint">
              <div className="project__content">
                <h3 className="project__subhead-brief">Brief</h3>
                <p>
                  Poem of the North is a project celebrating the 50th
                  anniversary of the{" "}
                  <a href="http://northernpoetrylibrary.org.uk">
                    Northern Poetry Library
                  </a>
                  , inviting poets from across the North of England to
                  contribute to a serialized digital publication. The website
                  built to house the poem was launched in Spring 2018 as a
                  submissions portal enabling poets to enter a competition via
                  web form. From mid-Summer 2018, after editors had made their
                  selection, each poem was published serially in a durational
                  publication over six months, simultaneously posting to the NPL
                  Twitter feed and an Instagram set up for the project. The
                  entire poem completed in December.
                </p>
              </div>
              <aside className="project__image">
                <ZoomImage
                  imageWidth={300}
                  imageHeight={300}
                  src="../../static/project-pon-ipad.png"
                />
              </aside>
            </div>
          </section>
          <section className="project__section2 constraint">
            <section className="project__design">
              <h3 className="project__subhead-design">Design</h3>

              <p>
                The primary objective for Poem of the North is in the creation
                of a UI that dedicates the maximum space for poems (notoriously
                tricky to display in a flexible responsive environment because
                poems lose format as soon as wrapping occurs). In conjunction
                with this, we wanted to combine the aesthetics of a book with
                cross-referencing digital architecture.
              </p>
              <ZoomImage
                imageWidth={230}
                imageHeight={230}
                src="../../static/pon-image-2.jpg"
              />
              <p>
                Because poems have a consistent length (8-2-1 lines) I decided
                that I could use a full-page vertical slider to navigate between
                poems in a Canto (collection of 10). The slider could also be
                deployed horizontally so that poet details and poems could be
                literally side by side.
              </p>
              <h3>Challenges</h3>
              <p>
                The UI challenge was to find the most elegant and simple
                navigation to bind the poem-platform and allow users to navigate
                poem-poem, canto-canto, and across the collection from any
                point. Experimentation and user-testing were key to finding the
                most minimal &ndash; yet intuitively useable &ndash; solution. I
                bounced ideas and tested with Jo Colley, poetry editor and
                digital learning consultant (Telefonica).
              </p>
            </section>
            <section className="project__code">
              <h3 className="project__subhead-code">Code</h3>
              <p>
                The JS slider I used is the comprehensive and functionally
                responsive{" "}
                <a href="https://alvarotrigo.com/fullPage/">fullpage.js</a>, set
                up to enable horizontal and vertically scrolled full-page
                slides, the vertical axis controlled by dot navigation, the
                vertical nav called by custom links.
              </p>
              <p>
                The underlying Wordpress CMS integrates the slider content as
                custom posts (poems), by tallying post meta-field numbering with
                slide numbers. In this way the poem can be:{" "}
              </p>
              <ol>
                <li>added automatically according to schedule </li>
                <li>navigated from a links post loop on the contents slide</li>
                <li>
                  navigated from poem to poem (according to Canto category)
                </li>
              </ol>

              <p>
                The poem posts are scheduled to appear one-by-one, incrementing
                the poem over time, with contextual messages output when Cantos
                begin or end, and to announce the next upcoming item.
              </p>
              <p>
                &bull; Social media integrations: whenever a scheduled poem is
                published, Instagram and Twitter posts are fired using Wordpress
                excerpt and featured image functionality.
              </p>
              <p>
                &bull; Initial competition submissions portal: a form system
                with validation checks (including mime type check for upload of
                poem documents) and custom code to sort entries for editors.
              </p>
            </section>
          </section>
        </main>
      </React.Fragment>
    );
  }
}

export default ItemLucion;
