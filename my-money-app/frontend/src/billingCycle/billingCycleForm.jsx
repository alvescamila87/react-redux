import React, { Component } from "react";
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import { reduxForm, Field, formValueSelector } from 'redux-form' // parece com o { connect }

import { init } from './billingCycleActions'
import labelAndInput from "../common/form/labelAndInput";
import ItemList from "./itemList";
import Summary from "./summary";

class BillingCycleForm extends Component {

    calculateSummary() {
        const sum = (t, v) => t + v
        return {
            sumOfCredits: this.props.credits.map(c => +c.value || 0).reduce(sum),
            sumOfDebts: this.props.debts.map(d => +d.value || 0).reduce(sum)
        }
    }

    render() {

        const { handleSubmit, readOnly, credits, debts } = this.props // método vindo do reduxForm
        //console.log(handleSubmit)

        const { sumOfCredits, sumOfDebts } = this.calculateSummary()

        return (
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field 
                        name="name" 
                        component={labelAndInput}
                        label='Nome' 
                        cols='12 4'
                        placeholder="Informe o nome"
                        readOnly={readOnly}
                    />
                    <Field 
                        name="month" 
                        component={labelAndInput}
                        type='number'
                        label='Mês'
                        cols='12 4'
                        placeholder="Informe o mês"
                        readOnly={readOnly}                        
                    />
                    <Field 
                        name="year" 
                        component={labelAndInput}
                        type='number'
                        label='Ano'
                        cols='12 4'
                        placeholder="Informe o ano"
                        readOnly={readOnly}
                    />
                    <Summary credit={sumOfCredits} debt={sumOfDebts}/>
                    <ItemList 
                        cols="12 6" 
                        readOnly={readOnly}
                        list={credits}
                        field='credits'
                        legend='Créditos'
                    />
                    <ItemList 
                        cols="12 6" 
                        readOnly={readOnly}
                        list={debts}
                        field='debts'
                        legend='Déditos'
                        showStatus={true}
                    />
                </div>
                <div className="box-footer">
                    <button type="submit" className={`btn btn-${this.props.submitClass}`}>{this.props.submitLabel}</button>
                    <button type="button" className="btn btn-default" onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}

const mapStateToProps = state => ({
    credits: selector(state, 'credits'),
    debts: selector(state, 'debts')
})
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
const selector = formValueSelector('billingCycleForm')

BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)