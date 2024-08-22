import React from "react"

export default props => {
    //props.quandoClicar

    const min = 50
    const max = 70
    const gerarIdade = () => parseInt(Math.random() * (max - min)) + min
    const gerarNerd = () => Math.random() > 0.5

    return (
        <div>
            <div>Filho</div>            
            <button onClick={
                function(evento) {
                    //callback
                    props.quandoClicar('Timóteo', gerarIdade(), gerarNerd())
                }    
            }>
                Fornecer informação
            </button>
        </div>
    )
}