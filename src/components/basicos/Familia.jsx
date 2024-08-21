import React from "react";
import FamiliaMembro from "./FamiliaMembro";

export default props => {
    return (
        <div>
           <FamiliaMembro nome="Madalena" sobrenome={props.sobrenome}/>
           <FamiliaMembro nome="Zebedeu" {...props}/>
           <FamiliaMembro nome="Simão Pedro" sobrenome="Betsaida Abraão"/> 
        </div>
    )
}