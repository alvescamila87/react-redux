import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import { useCounter } from '../../hooks/useCounter.js'

const UseRef = (props) => {

    const [count, incr, decr] = useCounter(10)

    return (
        <div className="UseCustom">
            <PageTitle
                title="Seu Hook"
                subtitle="Vamos aprender como criar o nosso próprio Hook!"
            />
            <SectionTitle title="Exercício #01" />
            <div className="center">
                <span className="text">{count}</span>
                <div>
                    <button 
                        className="btn"
                        onClick={() => decr()}
                    >-1
                    </button>
                    <button 
                        className="btn"
                        onClick={() => incr()}
                    >+1
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UseRef
