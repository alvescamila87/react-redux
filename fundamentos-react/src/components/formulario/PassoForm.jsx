import React from "react";

export default props => {
    return (
        <div>
            <label htmlFor="passoInput">Passo: </label>
            <input 
                id="passoInput" 
                type="number" 
                value={props.passo}
                onChange={evento => props.setPasso(+evento.target.value)}
            />
        </div>
    )
}