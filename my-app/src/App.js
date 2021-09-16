import React from "react";
import About from "./About";
import "./App.css"
import Home from "./Home";
import User from "./User";

function App() {
    return (
        <div className="App">
            <h2> Welcome to ReactJS </h2> 
            <Home />
            <About />
            <User />
        </div>
    )
}
export default App;