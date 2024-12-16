import React from 'react'
import ReactDOM from 'react-dom'
//import Primeiro from './componentes/Primeiro';
import BomDia from './componentes/BomDia';
import { BoaTarde, BoaNoite } from './componentes/Multiplos'; 
import Saudacao from './componentes/Saudacao';
import Pai from './componentes/Pai';
import Filho from  './componentes/Filho';

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
    <div>
        <h3>Aula Pai e Filho componentes</h3>
        <Pai nome="Davi" sobrenome="Abraão">
            <Filho nome="Zebedeu" sobrenome="Silva"/>
            {/* <Filho nome="Madalena" sobrenome="Silva"/>
            <Filho nome="Lorena" sobrenome="Silva"/> */}
            <Filho nome="Madalena"/>
            <Filho nome="Lorena"/>

        </Pai>
    </div>
    </React.Fragment>
, document.getElementById("root"));

