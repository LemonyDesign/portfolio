import React from "react";
import Nav from "../components/Nav";
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
        <main className="main">
          <section className="constraint project">
            <header className="project__header">
              <h2 className="project__title">Farmer of Thoughts</h2>

              <dl className="project__refs">
                <dt className="a">Date</dt>
                <dd className="a2">Spring 2018</dd>

                <dt className="b">Client</dt>
                <dd className="b2">Tom Shakespeare</dd>

                <dt className="c">URL</dt>
                <dd className="c2">
                  <a href="http://helloup.co.uk">helloup.co.uk</a>
                </dd>
              </dl>
            </header>

            <h3>Brief</h3>

            <p>
              Lemony Design's long-standing client, short-story advocate and
              jewellery afficionado Joanna Sterling, sought a recent redesign of
              her website The Casket, a well-respected platform for short
              stories, flash fiction – as well as being a display case for her
              magnificent collection of contemporary and period brooches.
              Somehow this all works together rather well!
            </p>

            <h3>UI</h3>

            <p>
              The redesign also involved a re-configuration of the UX, with an
              integrated filtering system for her ever-expanding stable of
              fiction, providing a solid foundation as an online publisher of
              quality short stories, making them accessible for readers who can
              now refine by type (flash, story or audio), mood, collection and
              author.
            </p>
            <img src="../../static/example-sketch.jpg" />

            <p>
              The redesign also involved a re-configuration of the UX, with an
              integrated filtering system for her ever-expanding stable of
              fiction, providing a solid foundation as an online publisher of
              quality short stories, making them accessible for readers who can
              now refine by type (flash, story or audio), mood, collection and
              author.
            </p>

            <h3>Tech stack</h3>
            <p>
              The platform also brings to the fore her fine collection of
              studio-recorded audio stories which are pushed to podcast
              platforms upon publication.
            </p>
          </section>
        </main>
      </React.Fragment>
    );
  }
}

export default ItemFarmer;
