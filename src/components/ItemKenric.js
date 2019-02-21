import React from "react";
import Nav from "../components/Nav";
import ZoomImage from "../components/ZoomImage";
import "../styles/base/base.scss";
import "../styles/base/projects.scss";

class ItemKenric extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.classList.add("portfolio-item", "itemkenric");
  }

  componentWillUnmount() {
    document.body.classList.remove("portfolio-item", "itemkenric");
  }

  render() {
    return (
      <React.Fragment>
        <Nav />
        <main className="main project">
          <header className="project__header constraint">
            <h2 className="project__title">Kenric</h2>

            <dl className="project__refs">
              <dt className="a">Date</dt>
              <dd className="a2">2016-18</dd>

              <dt className="b">Client</dt>
              <dd className="b2">Kenric membership organisation</dd>

              <dt className="c">URL</dt>
              <dd className="c2 project__url">
                <a href="http://kenriclesbians.org.uk/">
                  kenriclesbians.org.uk
                </a>
              </dd>
            </dl>
          </header>

          <section className="project__section1">
            <div className="project__brief constraint">
              <div className="project__content">
                <h3 className="project__subhead-brief">Brief</h3>
                <p>
                  Kenric &ndash; a national organisation for older lesbians
                  &ndash; had their 50th anniversary approaching and with a
                  waning membership were in need of a website that would help
                  revamp/update their image and turn around the issue with
                  encouraging new members and membership retention. Their
                  sign–up and renewals involved an unwieldy process requiring
                  people to download a pdf, fill it in and post it. To boot,
                  their Access database, set up many years ago, was becoming
                  impossible to maintain.
                </p>
                <p>
                  With a tight budget, we decided to concentrate on an online
                  system that would future–proof membership by getting new
                  sign–ups onto the{" "}
                  <a href="https://gocardless.com/">GoCardless</a> Direct Debit
                  system &ndash; and encourage established members to go this
                  way via a subtle incentive. Three years down the line, this
                  strategy has been effective in securing Kenric's future, with
                  80 per cent increase in new sign-ups, and 50 per cent of
                  established members now on the Direct Debit system.
                </p>
              </div>
              <aside className="project__image">
                <ZoomImage
                  imageWidth={300}
                  imageHeight={300}
                  src="../../static/project-kenric-ipad.png"
                />
              </aside>
            </div>
          </section>
          <section className="project__section2 constraint">
            <section className="project__design">
              <h3 className="project__subhead-design">Design</h3>
              <p>
                The site&rsquo;s simple design, based on the Hemingway theme
                template, is intended to generate a welcoming atmosphere and
                reflect some of the activities &ndash; taking care not to
                compromise the identity of any individuals who are wary about
                this. The template has been customised to allow admins to add
                different selected header images to each section, and in the
                development of the events and blog listings.
              </p>

              <p>
                The front-end of the membership system enables the organisation
                to keep some of its content held back for member viewing only,
                carefully integrated with an events system to publicize core,
                group and affiliate events. Only members are able to access
                contact details for events, ensuring privacy where desired.
              </p>
            </section>
            <section className="project__code">
              <h3 className="project__subhead-code">Code</h3>
              <p>
                The new registration system integrates with a{" "}
                <a href="https://www.filemaker.com/" target="_blank">
                  Filemaker database
                </a>{" "}
                (built in collaboratation with FM professional Coates IT) via a
                sophisticated membership web–form, built with the powerful{" "}
                <a href="https://formidableforms.com/" target="_blank">
                  Formidable Pro
                </a>{" "}
                to collect and propagate fields, via email, to the database. The
                form determines type of membership, allows for concessions and
                DD discount, performs calculations, then connects to the Direct
                Debit payment plan on the GoCardless platform &ndash; while
                allowing the option to pay by other means.
              </p>
              <p>
                The build emphasis for the site is on back-end adminstrator
                useability and permissions structure for different editor,
                admin, member and non-member roles, such that volunteer web
                content editors (from different groups) and the website manager
                can easily update events and manage users on the site using the
                WordPress CMS.
              </p>
            </section>
          </section>
        </main>
      </React.Fragment>
    );
  }
}

export default ItemKenric;
