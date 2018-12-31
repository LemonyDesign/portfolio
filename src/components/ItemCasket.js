import React from "react";
import Nav from "../components/Nav";
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
        <main className="main">
          {/* <img src="../../static/pi-ws-casket.jpg" /> */}
          <section className="constraint project">
            <h2 className="project__title">The Casket of Fictional Delights</h2>

            <p>
              Lemony Design's long-standing client, short-story advocate and
              jewellery afficionado Joanna Sterling, sought a recent redesign of
              her website The Casket, a well-respected platform for short
              stories, flash fiction – as well as being a display case for her
              magnificent collection of contemporary and period brooches.
              Somehow this all works together rather well!
            </p>

            <p>
              The redesign also involved a re-configuration of the UX, with an
              integrated filtering system for her ever-expanding stable of
              fiction, providing a solid foundation as an online publisher of
              quality short stories, making them accessible for readers who can
              now refine by type (flash, story or audio), mood, collection and
              author.
            </p>

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

export default ItemCasket;
