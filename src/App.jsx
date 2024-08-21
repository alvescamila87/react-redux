import React from "react"
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'

// funcao nomeada: export default function App(props){}
// funcao anônima: export default function(props){}
// arrow function: export default (props) => {}

export default _ => // {
    //return (
        (
        <div id="app">
        <h1>Fundamento React (Arrow)</h1>
        <Aleatorio
            min={1}
            max={60}
        >           
        </Aleatorio>
        <Fragmento/>
        <ComParametro
            titulo="Situação do aluno"
            subtitulo="Dados"
            aluno="Zebedeu Abraão"
            nota={6.9}
        />
        <ComParametro
            titulo="Situação do aluno"
            subtitulo="Dados"
            aluno="Maria Madalena"
            nota={10.0}
        />
        <Primeiro/>
        </div>
        );
    //);
//}