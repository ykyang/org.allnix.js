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
class Link extends React.Component {
    render() {
        return React.createElement("p", null,
            React.createElement("a", {href: "reactjs.org"}, "Read more about React")
        )
    }
}
const group = React.createElement(React.Fragment, null,    
    React.createElement(Link), React.createElement(Link), React.createElement(Link),)
const domElement = document.getElementById("root");
ReactDOM.createRoot(domElement).render(group);