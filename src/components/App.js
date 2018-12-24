import React from "react";

import "../styles/base/base.scss";
import "../styles/components/app.scss";

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="container">
        <h1>Melanie Ashby</h1>
        <p>This is body text</p>
      </div>
    );
  }
}

export default App;
