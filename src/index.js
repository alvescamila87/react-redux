import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'

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
    </div>,
    document.getElementById('root')
) 