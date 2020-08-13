import React, { Component } from "react";
import Header from "./Component/Header";
import News from "./Component/News";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <News />
      </div>
    );
  }
}

export default App;
