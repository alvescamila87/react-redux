import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'

ReactDOM.render(
    <div id="app">
        <Primeiro/>
        <ComParametro
            titulo="Situação do aluno"
            subtitulo="Dados"
            aluno="Zebedeu Abraão"
            nota={6.9}
        ></ComParametro>
        <ComParametro
            titulo="Situação do aluno"
            subtitulo="Dados"
            aluno="Maria Madalena"
            nota={10.0}
        ></ComParametro>
        <Fragmento/>
    </div>,
    document.getElementById('root')
) 