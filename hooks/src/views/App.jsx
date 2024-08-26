import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Menu from "../components/layout/Menu";
import Content from "../components/layout/Content";
import DataContext, { data } from "../data/DataContext";

const App = (props) => {

    // inicializando estado com objeto
    const [state, setState] = useState(data);

    return (
        <div className="App">
        {/* 
            <DataContext.Provider value={{ state: state, setState: setState }}> 
            {{}}
            chaves de fora: interpolar valor
            chaves de dentro: delimitando um objeto javascript
        */}
        <DataContext.Provider value={{ state, setState }}>
            <Router>
            <Menu />
            <Content />
            </Router>
        </DataContext.Provider>
        </div>
    );
};

export default App;
