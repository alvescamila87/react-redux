import React, { Component } from "react";
import axios from 'axios';

import ContentHeader from "../common/template/contentHeader";
import Content from "../common/template/content";
import ValueBox from "../common/widget/valueBox";
import Row from "../common/layout/row";

const BASE_URL = 'http://localhost:3003/api'

//sem REDUX
export default class Dashboard extends Component {

    //estado do objeto - sem redux
    constructor(props) {
        super(props)
        this.state = { credit: 0, debt: 0}
    }

    //sem redux
    componentWillMount() {
        axios.get(`${BASE_URL}/billingCycles/summary`)
            .then(resp => this.setState(resp.data))
    }

    render() {

        //sem redux
        const { credit, debt } = this.state

        return (
            <div>
                <ContentHeader title="Dashboard" small="Versão 2.0" />
                <Content>
                    <Row>
                        <ValueBox 
                            cols="12 4" 
                            color="green" 
                            icon="bank"
                            value={`R$ ${credit}`}
                            text="Total de créditos"
                        />
                        <ValueBox 
                            cols="12 4" 
                            color="red" 
                            icon="credit-card"
                            value={`R$ ${debt}`}
                            text="Total de déditos"
                        />
                        <ValueBox 
                            cols="12 4" 
                            color="blue" 
                            icon="money"
                            value={`R$ ${credit - debt}`}
                            text="Valor consolidado"
                        />                        
                    </Row>
                </Content>
            </div>
        )
    }
}

