// todos os action creators responsáveis por criar as ações
import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3003/api'
const INITIAL_VALUES = {credits: [{}]}

export function getList() {
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function create(values) {
    return submit(values, 'post')

    // passado para o function submit
    //
    // return dispatch => {
    //     //console.log(values)
    //     axios.post(`${BASE_URL}/billingCycles`, values)
    //         .then(resp => {
    //             toastr.success('Sucesso', 'Operação realizada com sucesso!')
    //             // Usando redux-multi para disparar um array de actions
    //             dispatch([
    //             //    resetForm('billingCycleForm'),
    //             //    getList(),
    //             //    selectTab('tabList'),
    //             //    showTabs('tabList','tabCreate')
    //             init()     
    //             ])
    //         })
    //         .catch(e => {
    //             //toastr.warning('Erro', 'Operação não realizada!')
    //             e.response.data.errors.forEach(error => toastr.error('Erro', error))
    //         })
    // }
    
}

export function update(values) {
    return submit(values, 'put')
}


export function remove(values) {
    return submit(values, 'delete')
}

// função não exportada, pois a utilização é interna apenas
// para checar o método quando create, update and delete
function submit(values, method) {
    return dispatch => {
        const id = values._id ? values._id : ''
        axios[method](`${BASE_URL}/billingCycles/${id}`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação realizada com sucesso!')
                dispatch(init())
            })
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Erro', error))
            })
    }

}

export function showUpdate(billingCyle){
    // Usando redux-multi para disparar um array de actions
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('billingCycleForm', billingCyle)
    ]
}

export function showDelete(billingCycle) {
    return[
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('billingCycleForm', billingCycle)
    ]
}

// função que representa como deve estar o estado inicial do ciclo de vida de pagamento
export function init() {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('billingCycleForm', INITIAL_VALUES)
    ]
}

