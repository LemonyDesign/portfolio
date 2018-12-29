import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/base/base.scss";
import "../styles/components/nav.scss";

class Nav extends React.Component {
  constructor() {
    super();
  }

  joinArr(arr) {
    return arr.map((elem, index) => <i key={arr[index]}>{elem}</i>);
  }

  render() {
    const arrCode = ["c", "o", "d", "e"];
    const arrDesign = ["d", "e", "s", "i", "g", "n"];

    return (
      <div className="siteheader">
        <header className="navmain constraint">
          <div className="navmain__wrapper">
            <h1 className="navmain__title">
              <NavLink
                to="/"
                activeClassName="active"
                className="navmain__name name--first"
              >
                Melanie
              </NavLink>
              <NavLink
                to="/"
                activeClassName="active"
                className="navmain__name name--last"
              >
                Ashby
              </NavLink>

              <NavLink
                to="/code"
                activeClassName="active"
                className="navmain__descriptor descriptor--code"
              >
                {this.joinArr(arrCode)}
              </NavLink>
              <NavLink
                to="/design"
                activeClassName="active"
                className="navmain__descriptor descriptor--design"
              >
                {this.joinArr(arrDesign)}
              </NavLink>
            </h1>
          </div>

          <NavLink
            to="/design"
            activeClassName="active"
            className="navmain__nav nav--left"
            role="nav"
          >
            &#123;
            <span className="show--screenreaders">Design</span>
          </NavLink>

          <NavLink
            to="/code"
            activeClassName="active"
            className="navmain__nav nav--right"
            role="nav"
          >
            &#125;
            <span className="show--screenreaders">Code</span>
          </NavLink>
        </header>
      </div>
    );
  }
}

export default Nav;
