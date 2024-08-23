import { createRoot } from 'react-dom/client';
import React from "react"
import App from './views/App'
import './index.css'

/* 
DESCONTINUADO O REACT:
A partir do React 18, a API ReactDOM.render foi substituída por createRoot. 

ReactDOM.render(
    //<h1>App</h1>,
    <App />,
    document.getElementById('root')
)

*/

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <App tab="home"/>   
);
