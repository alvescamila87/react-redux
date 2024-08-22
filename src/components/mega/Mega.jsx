import React, {useState} from "react";
import './Mega.css'

export default props => {
    function geraNumeroNaoContigo(min, max, array) {
        const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min;
        return array.includes(aleatorio) ? geraNumeroNaoContigo(min, max, array) : aleatorio
    }

    function geraNumeros(qtde) {
        const numeros = Array(qtde)
            .fill(0)
            .reduce((nums) => {
                const novoNumero = geraNumeroNaoContigo(1, 60, nums)
                //console.log([ ...nums, novoNumero ])
                return [ ...nums, novoNumero ]            
            }, [])
            .sort((n1, n2) => n1 - n2)
    
        return numeros
    }

    const [qtde, setQtde] = useState(props.qtde || 6)
    const numerosIniciais = geraNumeros(qtde)
    const [numeros, setNumeros] = useState(numerosIniciais)    

    return (
        <div className="Mega">
            <h2>Mega</h2>
            <h3>{numeros.join(' ')}</h3>
            <div>
                <label>Qtde de números</label>
                <input
                    min="6" 
                    max="15"
                    type="number" 
                    value={qtde} 
                    onChange={(evento) => {
                        setQtde(+evento.target.value)
                        setNumeros(geraNumeros(+evento.target.value))
                    }}
                />
            </div>
            <button onClick={_ => setNumeros(geraNumeros(qtde))}>
                Gerar números
            </button>
        </div>
    );
}