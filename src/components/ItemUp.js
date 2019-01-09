import React from "react";
import Nav from "../components/Nav";
import ZoomImage from "../components/ZoomImage";
import "../styles/base/base.scss";
import "../styles/base/projects.scss";

class ItemUp extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.classList.add("portfolio-item", "itemup");
  }

  componentWillUnmount() {
    document.body.classList.remove("portfolio-item", "itemup");
  }
  render() {
    return (
      <React.Fragment>
        <Nav />
        <main className="main project">
          <header className="project__header constraint">
            <h2 className="project__title">
              UP motion graphics &amp; CGI agency
            </h2>

            <dl className="project__refs">
              <dt className="a">Date</dt>
              <dd className="a2">Spring 2018</dd>

              <dt className="b">Client</dt>
              <dd className="b2">Taylor McKenzie / UP</dd>

              <dt className="c">URL</dt>
              <dd className="c2 project__url">
                <a href="http://helloup.co.uk">helloup.co.uk</a>
              </dd>
            </dl>
          </header>

          <section className="project__section1">
            <div className="project__brief constraint">
              <div className="project__content">
                <h3 className="project__subhead-brief">Brief</h3>
                <p>
                  New website design for London–based UP motion graphics and CGI
                  agency to accompany a revamping and targeting of their
                  strengths and experience in the charity sector (working with
                  clients that include Compassion in World Farming, the NHS, and
                  Graze). The primary objective, to deliver a good-looking
                  portfolio to display their motion and graphic work without
                  compromising page speed. To keep load speedy with big files,
                  we opted to serve direct from Amazon S3 as a static website.
                </p>
              </div>
              <aside className="project__image">
                <ZoomImage
                  imageWidth={300}
                  imageHeight={300}
                  src="../../static/project-up-ipad.png"
                />
              </aside>
            </div>
          </section>
          <section className="project__section2 constraint">
            <section className="project__design">
              <h3 className="project__subhead-design">Design</h3>
              <p>
                Working closely with the client, we mapped a simple user journey
                and designed a user interface that dramatically stages each
                project. To this end, the client required full-page images and /
                or video for each porfolio item.
              </p>
              <h3>Challenges</h3>
              <p>
                To achieve the drama, I used a range of multiple background
                image techniques to position central elements according to
                device. Full-page video is the greatest challenge in terms of
                finding the speed/quality trade-off, providing correctly
                positioned loading stills and fallback images for mobile.
              </p>
            </section>
            <section className="project__code">
              <h3 className="project__subhead-code">Code</h3>
              <p>
                Built on the{" "}
                <a href="https://foundation.zurb.com/">Zurb Foundation</a>{" "}
                framework, compiled with webpack, the site uses HTML5 data
                attributes with JavaScript to &lsquo;swap in&rsquo; different
                images / video html depending on device context, so as keep
                speeds and asset size trim on smaller devices.
              </p>
              <p>
                The <a href="http://animejs.com/">Anime</a> JavaScript Animation
                Engine is used for the creation of custom letter animation for
                the entry page, and I chose <a href="https://plyr.io/">Plyr</a>{" "}
                to provide a seamless full-page video experience.
              </p>
              <h3>Further development</h3>
              <p>Fetch blog posts for the home page via the Wordpress API</p>
            </section>
          </section>
        </main>
      </React.Fragment>
    );
  }
}

export default ItemUp;
