import React from "react";
import Nav from "../components/Nav";
import "../styles/base/base.scss";
import "../styles/base/projects.scss";

class ItemNPL extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.classList.add("portfolio-item", "itemnpl");
  }

  componentWillUnmount() {
    document.body.classList.remove("portfolio-item", "itemnpl");
  }
  render() {
    return (
      <React.Fragment>
        <Nav />
        <main className="main">
          <section className="constraint">
            <header className="project__header">
              <h2 className="project__title">Northern Poetry Library</h2>

              <dl className="project__refs">
                <dt className="a">Date</dt>
                <dd className="a2">Spring 2018</dd>

                <dt className="b">Client</dt>
                <dd className="b2">Taylor McKenzie / UP</dd>

                <dt className="c">URL</dt>
                <dd className="c2">
                  <a href="http://helloup.co.uk">helloup.co.uk</a>
                </dd>
              </dl>
            </header>

            <h3>Brief</h3>
            <p>This to be the page for NPL website</p>
          </section>
        </main>
      </React.Fragment>
    );
  }
}

export default ItemNPL;
