import React from 'react'
import ReactDOM from 'react-dom'
//import Primeiro from './componentes/Primeiro';
import BomDia from './componentes/BomDia';
import { BoaTarde, BoaNoite } from './componentes/Multiplos'; 

// renderizar primeiro elemento
//ReactDOM.render(<Primeiro />, document.getElementById("root"));

ReactDOM.render(
    <div>
        <BomDia nome="Camila" idade={10} />
        <BoaTarde nome={"Zebedeu"} />
        <BoaNoite nome={"Madalena"} />
    </div>
, document.getElementById("root"));

