import { Component, Fragment } from "react";

class Link extends Component {
  render() {
    return (
      <p>
        <a href="//reactjs.org">Read more about React</a>
      </p>
    );
  }
}

class App extends Component {
  render() {
    const world = <em>World</em>

    return (
      <Fragment>
        <h1>Hello {world}!</h1>
        <p>Today is {new Date(Date.now()).toLocaleString()}.</p>

        <Link />
        <Link />
        <Link />
      </Fragment>
    );
  }
}

export default App;
