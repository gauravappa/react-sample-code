<<<<<<< HEAD
=======
import React from "react";
import ReactDOM from "react-dom/client";

>>>>>>> 4cbac44 (npm initialization,parcel and react library installation and related code changes)
const heading = React.createElement("h1",{style : {color:"red"}},"Ha mai hu Khalnayak");


const childDiv = React.createElement("div",{},heading)
const mainDiv = React.createElement("div",{},childDiv);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(mainDiv);