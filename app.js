
import React from "react"
import ReactDOM from "react-dom/client";
// JSX is XML/HTML like syntax
//JSX (transpiled before it reaches the JS Engine) -- PARCEL(Manager) -- (package)BABEL(JS compiler) 

//JSX => Babel transpiles it to React.createElement => ReactElement -JS object => HTMLElement(render)

const Title  = () => 
( <h1 className ="head" tabIndex="5">
    This is Namaste React Using JSX
    </h1>
);

// React Functional Component : It is a JavaScript Function which returns React Elament 

const HeadingComponent = () =>(
    <div id="container">
     <Title />
    return <h1 className="heading">Namaste Functional Component</h1>
    </div>
);

//Babel compiler understands like </>
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);