import React, {Fragment, Component} from "react"
import Link from "./Link"

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