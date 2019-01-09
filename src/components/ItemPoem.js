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
              <dd className="a2">Spring 2018</dd>

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
                  web form, in a strict format. From mid-Summer 2018, after
                  editors had made their selection, each poem was published
                  serially in a durational publication over six months. The
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
                deployed horizontally so that each poem could be accomapanied
                listerally side by side with poet details. Once decided, the UI
                design rested in finding the most elegant and simple navigation
                to bind the whole poem and allow users to navigate from poem to
                poem, and canto to canto, and browse the entire collection via a
                good old-fashioned contents list.
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
                The underlying Wordpress CMS is custom-built to integrate slides
                as posts, with custom post loops that set numbering to tally
                with slide numbers so that the poem can be navigated both from
                the contents listing and from poem to poem. The poem posts are
                scheduled to appear one-by-one, incrementing the poem over time,
                with contextual messages output when Cantos begin or end, and to
                announce the next upcoming item.
              </p>
              <p>
                Social Media integrations: whenever a scheduled poem is
                published, Instagram and Twitter posts are fired (Instagram
                using Wordpress' Featured Image functionality).
              </p>
            </section>
          </section>
        </main>
      </React.Fragment>
    );
  }
}

export default ItemLucion;
