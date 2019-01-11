import React from "react";
import Nav from "../components/Nav";
import ZoomImage from "../components/ZoomImage";
import "../styles/base/base.scss";
import "../styles/base/projects.scss";

class ItemCasket extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.classList.add("portfolio-item", "itemcasket");
  }

  componentWillUnmount() {
    document.body.classList.remove("portfolio-item", "itemcasket");
  }

  render() {
    return (
      <React.Fragment>
        <Nav />
        <main className="main project">
          <header className="project__header constraint">
            <h2 className="project__title">The Casket of Fictional Delights</h2>

            <dl className="project__refs">
              <dt className="a">Date</dt>
              <dd className="a2">2016 - 2019</dd>

              <dt className="b">Client</dt>
              <dd className="b2">Joanna Sterling</dd>

              <dt className="c">URL</dt>
              <dd className="c2 project__url">
                <a href="https://www.thecasket.co.uk/">thecasket.co.uk</a>
              </dd>
            </dl>
          </header>

          <section className="project__section1">
            <div className="project__brief constraint">
              <div className="project__content">
                <h3 className="project__subhead-brief">Brief</h3>
                <p>
                  I have worked with short-story publisher and jewellery
                  collector Joanna Sterling, a long-standing client, since 2012.
                  In 2016 Joanna sought a redesign of her website The Casket, a
                  digital publishing and podcast platform for quality short
                  stories and flash fiction – as well as being a display case
                  for her magnificent collection of contemporary and period
                  brooches (somehow this works harmoniously!). In 2017 Joanna
                  decided to launch a competition, running again in 2018 and
                  becoming well-respected on the creative writing scene. Her
                  podcast, published from the site to iTunes, Sticher, TuneIn
                  and SoundCloud, has gained a large following and is 5-star
                  rated.
                </p>
              </div>
              <aside className="project__image">
                <ZoomImage
                  imageWidth={300}
                  imageHeight={300}
                  src="../../static/project-casket-ipad.png"
                />
              </aside>
            </div>
          </section>
          <section className="project__section2 constraint">
            <section className="project__design">
              <h3 className="project__subhead-design">Design</h3>

              <p>
                The Casket of Fictional Delights began as a micro-publishing
                venture for Joanna and fellow writers in the South of London. It
                has grown over the years and in 2016 &ndash; following the huge
                success of her TubeFlash project &ndash; she decided it was due
                for modernisation.
              </p>

              <p>
                The user interface aims at making short stories and flash
                fiction accessible and eminently browseable via:
              </p>
              <ul>
                <li>
                  A visual, colour-coded card filtering system for an expanding
                  stable of fiction, making stories accessible for readers to
                  refine by type (flash, story or audio), mood, collection and
                  author.
                </li>
                <li>Generous-size typography and readability testing</li>
                <li>
                  Clear, appealing calls to action&hellip; <em>to read</em>
                  ,&nbsp;<em>view</em> and <em>listen</em>.
                </li>
              </ul>

              <p>
                The home page is designed as smorgasbord to get visitors
                exploring, featuring the latest story, brooch of the month,
                news, projects, and drawing attention to The Casket's audio USP.
              </p>
              <p>
                There is also a display-case view for Joanna's brooch
                collection, which allows users to filter the collection visually
                (by period or designer) and then access post content for each
                brooch.
              </p>
              <h3>Flash Fiction Competitions</h3>
              <p>
                2017 saw the inaugural Competition launch &ndash; and the
                creation of a new website section, with user-journey mapped from
                promo and paid submissions through to the judging announcements
                and scheduled output of winning stories published on the site
                and as podcasts. I decided to front the competition with a
                striking cover image &ndash; also used on social media in
                different guises &ndash; built around a call to action to the
                competition portal (or onscroll to the home page).
              </p>
            </section>
            <section className="project__code">
              <h3 className="project__subhead-code">Code</h3>
              <p>
                The Wordpress CMS is set up with two custom posts, stories and
                brooches, which each have a system of taxonomies and custom meta
                fields that work to provide criteria for filtering and search.
                The site uses some key plugins to drive functionality:
              </p>
              <ul>
                <li>
                  I chose pro-plugin FacetWP to establish advanced ajax-based
                  filtering to cross-reference taxonomies and custom posts
                  (poems and brooches).
                </li>
                <li>
                  The platform also brings to the fore Joanna's fine collection
                  of studio-recorded audio stories which are pushed to podcast
                  platforms upon publication with Blubrry PowerPress.
                </li>
                <li>
                  Ssocial media is automated via Wordpress-to-Buffer plugin, set
                  up to post new story titles and news headlines.
                </li>
                <li>
                  Competitions integrate a PayPal payment sytem, using the
                  powerful Formidable Forms plugin suite for entries,
                  validations and submissions admin. The system uses contextual
                  logic for discounting depending on entry volume.
                </li>
              </ul>
              <h3>The admin back end</h3>
              <p>
                Joanna likes to take control of the content where she can, and a
                bulk of the custom coding drives and manipulates the admin area
                and post screens to make drawing in all the required elements
                pertaining to each post as straightforward as possible.
              </p>
            </section>
          </section>
        </main>
      </React.Fragment>
    );
  }
}

export default ItemCasket;
