import React from "react";
import ReactDOM from "react-dom/client";




//Code to create react element using normal javascript syntax
//const heading = React.createElement("h1",{style : {color:"red"}},"Ha mai hu Khalnayak");
//const childDiv = React.createElement("div",{},heading)
//const mainDiv = React.createElement("div",{},childDiv);

//code to create element using jsx syntax
const heading = <h1 style={{color:"red"}}>ABC</h1>
const childDiv = <div>{heading}</div>;
const mainDiv = <div>{childDiv}</div>;



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(mainDiv);