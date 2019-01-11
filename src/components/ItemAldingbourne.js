import React from "react";
import Nav from "../components/Nav";
import ZoomImage from "../components/ZoomImage";
import "../styles/base/base.scss";
import "../styles/base/projects.scss";

class ItemAldingbourne extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.classList.add("portfolio-item", "itemaldingbourne");
  }

  componentWillUnmount() {
    document.body.classList.remove("portfolio-item", "itemaldingbourne");
  }
  render() {
    return (
      <React.Fragment>
        <Nav />
        <main className="main project">
          <header className="project__header constraint">
            <h2 className="project__title">Long Bench Mini-site</h2>

            <dl className="project__refs">
              <dt className="a">Date</dt>
              <dd className="a2">August 2017</dd>

              <dt className="b">Client</dt>
              <dd className="b2">
                The Aldingbourne Trust
                <br />
                Contractor: Taylor McKenzie / UP
              </dd>

              <dt className="c">URL</dt>
              <dd className="c2 project__url">
                <a href="http://www.longbench.org/">www.longbench.org</a>
              </dd>
            </dl>
          </header>

          <section className="project__section1">
            <div className="project__brief constraint">
              <div className="project__content">
                <h3 className="project__subhead-brief">Brief</h3>
                <p>
                  A promotional one–page website for The Aldingbourne Trust, a
                  charity that supports people with learning difficulties, based
                  in Sussex. The Longbench Project, run in conjunction with Arun
                  District Council, invites people to purchase a memorial slat
                  in the Long Bench on Littlehampton seafront. The mini–site has
                  been designed as a &lsquo;brochure&rsquo; for the project,
                  whose single, clear call–to–action links through to the
                  Trust&rsquo;s website, where we designed and embedded a
                  purpose–built PayPal form so that visitors could order a bench
                  slat (on the Wordpress platform).
                </p>
              </div>
              <aside className="project__image">
                <ZoomImage
                  imageWidth={300}
                  imageHeight={300}
                  src="../../static/project-aldingbourne-ipad.png"
                />
              </aside>
            </div>
          </section>
          <section className="project__section2 constraint">
            <section className="project__design">
              <h3 className="project__subhead-design">Design</h3>

              <p>
                The aim, to create a simple and attractive marketing tool to sit
                alongside Aldingbourne&rsquo;s main website, driving traffic to
                the on–site purchase page. The mini–site gives full view of the
                lovely photographs taken for the Long Bench project. The main
                site allows purchase via a purpose–designed form which is
                programmed to accept discount coupons, to enable slat type, font
                and create a message for inscription, before payment.
              </p>
            </section>
            <section className="project__code">
              <h3 className="project__subhead-code">Code</h3>
              <p>
                The main site allows purchase via a custom Wordpress form with
                logic and validation to determine if the purchaser has a
                discount coupon, to enable selection of slat type, font
                (viewable) and create a restricted-length message for
                inscription, before payment.
              </p>
            </section>
          </section>
        </main>
      </React.Fragment>
    );
  }
}

export default ItemAldingbourne;
