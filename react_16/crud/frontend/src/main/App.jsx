import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import "./App.css"
import React from "react";

import Footer from "../components/template/Footer";
import Logo from "../components/template/Logo";
//import Main from "../components/template/Main";
import Nav from "../components/template/Nav";
import Home from "../home/home";

export default props =>
    <div className="app">
        <Logo />
        <Nav />
        <Home/>
        <Footer />
    </div>