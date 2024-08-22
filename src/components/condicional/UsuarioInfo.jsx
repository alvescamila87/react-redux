import React from "react";
import If, { Else } from './if.js';

export default props => {
    const usuario = props.usuario || {}
    //console.log(usuario)
    return (
        <div>
            {/*<If test={ usuario && usuario.nome }>
                Seja bem vindo <strong>{ usuario.nome }</strong>!
            </If>          
            <If test={ !usuario || !usuario.nome }>
                <p>Welcome to the validation 2!</p>
            </If> */} 
            <If test={ usuario && usuario.nome }>
                <p>Welcome to the IF</p>
                <Else>
                    <p>Welcome to the ELSE</p>
                </Else>
            </If>  
        </div>
    )
}