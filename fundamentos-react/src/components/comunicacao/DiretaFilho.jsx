import React from "react"

export default props => {

    // nome idade nerd (quem passa essas infos é o pai sobre o filho)
    return (
        <div>
            <span>{props.nome} </span>
            <span>{props.idade} </span>
            <span>{props.nerd ? 'Verdadeiro' : 'Falso'} </span>
        </div>
    )
}