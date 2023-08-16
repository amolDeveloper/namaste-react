import React from "react";
import ReactDOM  from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById('root'));


const HeaderComponent = () => 
    (
        <div id="container">
            <h2> Namaste React from Header Component 🔥</h2>
        </div>
    )

const title = (
    <>
    <h1> Namaste React from Title Element 🚀</h1>
    <HeaderComponent />
    </>
)


root.render(title);

