import React from "react";
import produtos from "../../data/produtos";
import './TabelaProdutos.css'

export default (props) => {

    /* Opção Camila 

    const tabelaProdutos = produtos.map((produto) => {
        return (
            <tr>
                <th>{produto.id}</th>
                <th>{produto.nome}</th>
                <th>{produto.valor}</th>
            </tr>
        )
    })
    return (
        <div>
            <tr>                
                <td>{tabelaProdutos}</td>
            </tr>
        </div>
    )
    */

    /* Opção Professor */

    function getLinhas() {
        return produtos.map((produto, i) => {
            return (
                <tr key={produto.id} className={i % 2 == 0 ? 'Par' : 'Ímpar'}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>R$ {produto.valor.toFixed(2).replace('.', ',')}</td>
                </tr>
            )
        })
    }

        return (
            <div className="TabelaProdutos">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {getLinhas()}
                    </tbody>
                </table>
            </div>
        )
    }

