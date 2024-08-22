import React from "react"
import DiretaFilho from "./DiretaFilho"

export default props => {
    return (
        <div>
            <DiretaFilho nome="Madalena" idade={23} nerd={true}/>
            <DiretaFilho nome="Ester" idade={20} nerd={false}/>
        </div>
    )
}

