import React from "react"

    // valor minimo
    // valor máximo
    // sortear valor entre min e max

/*export default function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.ceil(max);

    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(getRandom(3, 9));*/

export default props => {
    // const { min, max } = props
    //const min = props.min
    //const max = props.max
    const escolhido = parseInt(Math.random() * (props.max - props.min)) + props.min;  

    return (
        <div>
        <h2> Desafio número aleatório</h2>
            <p>Valor mínimo: { props.min }</p>
            <p> Valor máximo: { props.max }</p>
            <p> Valor escolhido: { escolhido }</p>
        </div>
    );
}