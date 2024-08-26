import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Menu from "../components/layout/Menu";
import Content from "../components/layout/Content";
import DataContext, { data } from "../data/DataContext";
import Store from "../data/Store";

const App = (props) => {

    // inicializando estado com objeto
    const [state, setState] = useState(data);

    return (

        /* 
            
        <DataContext.Provider value={{ state: state, setState: setState }}> 
        {{}}
        chaves de fora: interpolar valor
        chaves de dentro: delimitando um objeto javascript

        // Forma 1
        <DataContext.Provider value={{ state, setState }}>
            <div className="App">
                <Router>
                <Menu />
                <Content />
                </Router>
            </div>
        </DataContext.Provider>
        */

        // Forma 2        
        <Store>
            <DataContext.Provider value={{ state, setState }}>
                <div className="App">
                    <Router>
                        <Menu />
                        <Content />
                    </Router>
                </div>
            </DataContext.Provider>
        </Store>
    );
};

export default App;
