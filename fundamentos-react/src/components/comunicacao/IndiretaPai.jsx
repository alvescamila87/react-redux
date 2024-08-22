import React, { useState } from "react"
import IndiretaFilho from "./IndiretaFilho"

export default props => {
    // ter estado dentro do componente
    const [a, b] = [1, 2]
    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)

    // nome idade nerd (quem passa essas infos é o filho sobre o pai)
    function fornecerInformacoes(nome, idade, nerd) {
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
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

