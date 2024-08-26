import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';

// EX #01
function calcFatorial(num)  {
    // string para number
    const n = parseInt(num)

    if(n < 0) return -1 
    if(n === 0) return 1
    return calcFatorial(n - 1) * n
}

// EX #02 - Camila
function checkNumberParOuImpar(number) {
    const num = parseInt(number)

    if(num % 2 === 0) {
        return 2
    } else {
        return 1
    }
}

const UseEffect = (props) => {
    
    // EX #01
    const [number, setNumber] = useState(1);
    const [fatorial, setFatorial] = useState(1);

    // EX #02 - Camila
    const [inputNumber, setInputNumber] = useState(0);
    const [checkStatus, setCheckStatus] = useState(0);

    // EX #02 - Correção
    const [status, setStatus] = useState("Ímpar");
    
    // EX #01
    /*
    não pode fazer dessa forma, pois está dentro da função e ficará 
    renderizando componente de forma infinita, causando "side effect". 
    Então deve ser usado um useEffect().

    setFatorial(calcFatorial(number))
    */

    // funcão callback e o number está na parte de dependência
    useEffect(function() {
        setFatorial(calcFatorial(number))
    }, [number])

    useEffect(function() {
        if(fatorial > 1000000) {
            document.title = "Oops!"
        }
    }, [fatorial])

    // EX #02 - Camila

    useEffect(function() {
        setCheckStatus(checkNumberParOuImpar(inputNumber))
    }, [inputNumber])

    // EX #02 - Correção 
    useEffect(function() {
        setStatus(number % 2 === 0 ? 'Par' : "Ímpar")
    }, [number])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title="Exercício #01"/>
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{fatorial === -1 ? 'Não existe' : fatorial}</span>
                </div>
                <input 
                    type="number" 
                    className="input"
                    value={number} 
                    onChange={event => setNumber(event.target.value)}             
                />
            </div>
            <SectionTitle title="Exercício #02" />
            <div className="center">
                <div>
                    <span className="text">Status: </span>
                    <span className="text red">{checkStatus === 1 ? 'Ímpar' : 'Par'}</span>
                </div>
                <input 
                    type="number" 
                    className="input" 
                    value={inputNumber}
                    onChange={event => setInputNumber(event.target.value)}
                />
            </div>
            <SectionTitle title="Exercício #02 - Correção desafio" />
            <div className="center">
                <div>
                    <span className="text">Status: </span>
                    <span className='text red'>{status}</span>
                </div>
            </div>
        </div>
    )
}

export default UseEffect
