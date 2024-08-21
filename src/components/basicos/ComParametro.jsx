import React from "react"

export default function(props) {
    console.log(props)
    const status = props.nota >= 7 ? 'Aprovado' : 'Reprovado'
    return (
        <div> 
            <h2>{ props.titulo }</h2>
            <p>{ props.subtitulo }</p>         
            <p>O aluno: { props.aluno } tem a nota: { props.nota } e está: { status }</p>
        </div>
    )     
}