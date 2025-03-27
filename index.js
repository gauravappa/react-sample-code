const heading = React.createElement("h1",{style : {color:"red"}},"Ha mai hu Khalnayak");


const childDiv = React.createElement("div",{},heading)
const mainDiv = React.createElement("div",{},childDiv);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(mainDiv);