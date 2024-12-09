import React from 'react'
import ReactDOM from 'react-dom'
//import Primeiro from './componentes/Primeiro';
import BomDia from './componentes/BomDia';

// renderizar primeiro elemento
//ReactDOM.render(<Primeiro />, document.getElementById("root"));

ReactDOM.render(<BomDia nome="Camila" idade={10} />, document.getElementById("root"));

