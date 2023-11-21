 /**
  * <div id= "parent">
  *    <div id= "Child">
  *      <h1> I'm H1 Tag </h1>
  *      <h2> I'm H2 tag </h2>   U can create an Array of two children in React 
  *    </div>
  * </div>
  *      
  * ReactElement(Object) ==>HTML (Browser Understands)
  * while its rendering into the DOM it converts object into HTML   
  * 
  * CreateElement API takes in 3 argument 
  */
 import React from "react"
import ReactDOM from "react-dom/client";
const parent = React.createElement("div", {id: "parent"},
[   React.createElement("div",{id: "child"},[
    React.createElement("h1",{}, "I am h1 tag"),
    React.createElement("h2",{}, "I am h2 tag"),
]),
    React.createElement("div",{id: "child2"},[
    React.createElement("h1",{}, "I am h1 tag"),
    React.createElement("h2",{}, "I am h2 tag"),
]),
]);
console.log(parent) //object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

//In React also we can create nested structure by creating an Array but its cumbersome.
 //This is why we have JSX when we have to create tags