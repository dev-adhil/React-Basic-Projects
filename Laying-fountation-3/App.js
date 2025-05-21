
import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Object => HTMLElement(renderComponent)



//React Element
const Title = (
    <h1 className="head" tabIndex="5">
    Hello React Functional compoent
   </h1>
)(

    const title1 = (
        <h1 className="head" tabIndex="5">
        Hello React Functional compoent
       </h1>
    )

const number = 1000;

// React Functional compoent
const HeadingComponent = ()=> (
    <div id="container">
        {number}
        {title1}
        <Title/>
        <h1>Hello React Functional compoent</h1>;
    </div>
);
    
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);


