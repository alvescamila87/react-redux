import React from "react"
import IndiretaFilho from "./IndiretaFilho"

export default props => {

    let nome = '?'
    let idade = 0
    let nerd = false

    // nome idade nerd (quem passa essas infos é o filho sobre o pai)
    function fornecerInformacoes(nomeParam, idadeParam, nerdParam) {
        //console.log(nome, idade, nerd)

        nome = nomeParam
        idade = idadeParam
        nerd = nerdParam

        console.log(nomeParam, idadeParam, nerdParam)
    }

    return (
        <div>
            <div>
                <div>
                    <span>{nome} </span>
                    <span>{idade} </span>
                    <span>{nerd ? 'Verdadeiro' : 'Falso'} </span>
                </div>
            </div>
            <IndiretaFilho quandoClicar={fornecerInformacoes}/>
        </div>
    )
}

