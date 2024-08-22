import React from "react"
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from "./components/layout/Card"
import './App.css'
import Familia from "./components/basicos/Familia"
import FamiliaMembro from "./components/basicos/FamiliaMembro"
import ListaAlunos from "./components/repeticao/ListaAlunos"
import TabelaProdutos from "./components/repeticao/TabelaProdutos"
import ParOuImpar from "./components/condicional/ParOuImpar"
import UsuarioInfo from "./components/condicional/UsuarioInfo"

// funcao nomeada: export default function App(props){}
// funcao anônima: export default function(props){}
// arrow function: export default (props) => {}

export default () =>  (
        <div className="App">
            <h1>Fundamentos React</h1>

            <div className="Cards">
                <Card titulo='#08 - Rendeziração condicional' color="#982395">
                    <ParOuImpar numero={13}/>
                    <UsuarioInfo usuario={{ nome: 'Zebedeu' }} />
                    {/*<UsuarioInfo usuario={{ email: 'zebe@email.com' }} />
                    <UsuarioInfo usuario={{}} />                   */}
                </Card>
                <Card titulo="#07 - Desafio Produtos" color="#3A9AD9">
                    <TabelaProdutos></TabelaProdutos>
                </Card>
                <Card titulo="#06 - Repeticao" color="#FF4C65">
                    <ListaAlunos></ListaAlunos>
                </Card>
                <Card titulo="#05 - Componente com filhos" color="#00C8F8">
                    <Familia sobrenome="Abraão">
                        <FamiliaMembro nome="Madalena"/>
                        <FamiliaMembro nome="Zebedeu"/>
                        <FamiliaMembro nome="Simão Pedro"/>
                        
                    </Familia>
                </Card>
                <Card titulo="#04 - Desafio Aleatório" color="#FA6900">    
                    <Aleatorio        
                        min={1}
                        max={60}
                    /> 
                </Card>
                <Card titulo="#03 - Fragmento" color="#E94C6F">
                    <Fragmento/>
                </Card>
                <Card titulo="#02 - Com Parâmetro" color="#E8B71A">
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
                </Card>
                <Card titulo="#01 - Primeiro componente" color="#588C73">        
                    <Primeiro/>
                </Card> 
            </div>        
        </div>
);
