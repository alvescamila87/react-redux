import React, { useState, useCallback } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import UseCallbackButtons from './UseCallbackButtons'

const UseCallback = (props) => {

    const [count, setCount] = useState(0)

    // cria a função uma ÚNICA vez (é uma função casheada)
    const inc = useCallback(function (delta) {
        setCount(curr => curr + delta)
    }, [setCount])

    /*function inc(delta) {
        setCount(count + delta)
    }*/

    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!"
            />

            <SectionTitle title="Exercício #01"/>
            <div className="center">
                <span className="text">{count}</span>
                <UseCallbackButtons inc={inc}/>
            </div>
        </div>
    )
}

export default UseCallback

