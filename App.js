import React from "react";
import ReactDOM  from "react-dom/client";

// const heading = React.createElement("h1", {id: "header"}, "Welcome to React Course");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const parent = React.createElement("div", {id: "parent"}, [React.createElement("div", {id: "child1"},[
    React.createElement("h1", {id: "header1"}, "Welcome to React"),
    React.createElement("h2", {id: "header2"}, "By AMOL KODGE")]
),React.createElement("div", {id: "child2"},[
    React.createElement("h1", {id: "header1"}, "Welcome to React"),
    React.createElement("h2", {id: "header2"}, "By AMOL KODGE")]
)]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);