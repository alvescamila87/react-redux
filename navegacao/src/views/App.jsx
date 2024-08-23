import React from "react";
import { BrowserRouter } from  'react-router-dom'
import Menu from "../components/layout/Menu";
import Content from "../components/layout/Content";
import './App.css'

const App = props => {
    return (
        <div className="App">
        <BrowserRouter>
            <Menu/>
            <Content/>
        </BrowserRouter>
        </div>
    )
}

export default App