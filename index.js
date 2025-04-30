import React from "react";
import ReactDOM from "react-dom/client";



//Code to create react element using normal javascript syntax
//const heading = React.createElement("h1",{style : {color:"red"}},"Ha mai hu Khalnayak");
//const childDiv = React.createElement("div",{},heading)
//const mainDiv = React.createElement("div",{},childDiv);

//code to create element using jsx syntax
const heading = <h1 style={{color:"red"}}>ABC from element</h1>
const childDiv = <div>{heading}</div>;
const mainDiv = <div>{childDiv}</div>;

//functional component in javscript is normal javascript which returns some jsx code
//we can use one component inside another coponenet
//naming convention of fuctional component name is it should be in  pascal case
//we can use functional component as <NAME_OF_COMPONENT />
const Heading = function(){
    return <h1 style={{color:"red"}}>XYZ from functional component</h1>
}

function ChildDiv(){
    return <div><Heading/></div>
}
const MainDiv = () => {
    return <div><ChildDiv /></div>;
}



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<div><MainDiv />{mainDiv}</div>);