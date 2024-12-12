import React from 'react'
import ReactDOM from 'react-dom'
//import Primeiro from './componentes/Primeiro';
import BomDia from './componentes/BomDia';
import { BoaTarde, BoaNoite } from './componentes/Multiplos'; 
import Saudacao from './componentes/Saudacao';

// renderizar primeiro elemento
//ReactDOM.render(<Primeiro />, document.getElementById("root"));

ReactDOM.render(
    <React.Fragment>
    <div>
        <h3>Aula Multiplos</h3>
        <BomDia nome="Camila" idade={10} />
        <BoaTarde nome={"Zebedeu"} />
        <BoaNoite nome={"Madalena"} />
    </div>
    <div>
        <h3>Aula Saudacao</h3>
        <Saudacao tipo="Bom dia" nome="Lorena"/>
    </div>
    </React.Fragment>
, document.getElementById("root"));

