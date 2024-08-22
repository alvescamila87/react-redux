import React from "react"

export default props => {
    //props.quandoClicar
    return (
        <div>
            <div>Filho</div>            
            <button onClick={
                function(evento) {
                    //callback
                    props.quandoClicar('Timóteo', 35, true)
                }    
            }>
                Fornecer informação
            </button>
        </div>
    )
}