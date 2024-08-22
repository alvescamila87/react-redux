import React from "react"

export default function Primeiro() {
    //return 'Primeiro componente mais novo'
    const msg = "Welcome guys!"
    return (
        <div>
            <h2>Primeiro componente</h2>
            <p>{ msg }</p>
        </div>
    )
}