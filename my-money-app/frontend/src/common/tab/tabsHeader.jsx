import React from "react";

// agrupador de cabeçalhos das abas
export default props => (
    <ul className='nav nav-tabs'> 
        {props.children}
    </ul> 
)
