import React, {Fragment, Component} from "react"
class Link extends Component {
    render() {
        return React.createElement("p", null, React.createElement("a",
            {href: this.props.url}, `Read more about ${this.props.framework}`
        ))
    }
}
class App extends Component {
    render() {
        return React.createElement(Fragment,null,
            React.createElement(Link, {framework: "React", url: "//reactjs.org"}),
            React.createElement(Link, {framework: "Vue", url: "//vuejs.org"}),
            React.createElement(Link, {framework: "Angular", url: "//angular.io"}),
        )
    }
}

export default App