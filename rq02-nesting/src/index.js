import React from "react";
import ReactDOM from "react-dom/client";

// rq02-siblings-fragment
// const world = React.createElement("em", null, "world")
// const title = React.createElement("h1", null, ["Hello ", world, "!"]);
// const link = React.createElement("a", {href: "//reactjs.org"}, "Read more")
// const group = React.createElement(React.Fragment, null, title, link)
// const domElement = document.getElementById("root");
// ReactDOM.createRoot(domElement).render(group);

// Listing 2.4
// const link1 = React.createElement("a", {href: "//reactjs.org"}, "Read more about React")
// const para1 = React.createElement("p", null, link1)
// const para2 = React.createElement("p", null, 
//     React.createElement("a", {href: "reactjs.org"}, "Read more about React"))
// const para3 = React.createElement("p", null, 
//     React.createElement("a", {href: "reactjs.org"}, "Read more about React"))

// const group = React.createElement(React.Fragment, null, para1, para2, para3)
// const domElement = document.getElementById("root");
// ReactDOM.createRoot(domElement).render(group);

// Listing 2.5
// class Link extends React.Component {
//     render() {
//         return React.createElement("p", null,
//             React.createElement("a", {href: "reactjs.org"}, "Read more about React")
//         )
//     }
// }
// const group = React.createElement(React.Fragment, null,    
//     React.createElement(Link), React.createElement(Link), React.createElement(Link),)
// const domElement = document.getElementById("root");
// ReactDOM.createRoot(domElement).render(group);

// Listing 2.6
// class Link extends React.Component {
//     render() {
//         return React.createElement("p", null,
//             React.createElement("a", {href: "reactjs.org"}, `Read more about ${this.props.framework}`)
//         )
//     }
// }

// const group = React.createElement(React.Fragment, null,    
//     React.createElement(Link, {framework: "React"}), 
//     React.createElement(Link, {framework: "Vue"}),
//     React.createElement(Link, {framework: "Angular"}))
// const domElement = document.getElementById("root");
// ReactDOM.createRoot(domElement).render(group);

// Listing 2.7
// class Link extends React.Component {
//     render() {
//         return React.createElement("p", null,
//             React.createElement("a", {href: this.props.uri}, 
//                 `Read more about ${this.props.framework}`
//             )
//         )
//     }
// }

// const root = ReactDOM.createRoot(document.getElementById("root"))
// const group = React.createElement("p",null,
//     React.createElement(Link, {framework: "React", uri: "//reactjs.org"}),
//     React.createElement(Link, {framework: "Vue", uri: "//vuejs.org"}),
//     React.createElement(Link, {framework: "Angular", uri: "//angular.io"})
// )
// root.render(group)

// Listing 2.8
// class Link extends React.Component {
//     render() {
//         return React.createElement("p", null,
//             React.createElement("a", {href: this.props.uri}, this.props.children)
//         )
//     }
// }
// const root = ReactDOM.createRoot(document.getElementById("root"))
// const group = React.createElement(React.Fragment, null,
//     React.createElement(Link, {uri: "//reactjs.org"}, React.createElement("strong", null, "React")),
//     React.createElement(Link, {uri: "vuejs.org"}, "Vue"),
//     React.createElement(Link, {uri: "angular.io"}, "Angular")
// )
// root.render(group)

// Listing 2.10
import {createRoot} from "react-dom/client"
import App from "./App"

createRoot(document.getElementById("root")).render(React.createElement(App))