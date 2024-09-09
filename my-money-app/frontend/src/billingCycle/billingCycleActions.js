// todos os action creators responsáveis por criar as ações
import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'


const BASE_URL = 'http://localhost:3003/api'

export function getList() {
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function create(values) {
    return dispatch => {
        //console.log(values)
        axios.post(`${BASE_URL}/billingCycles`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação realizada com sucesso!')
                // Usando redux-multi para disparar um array de actions
                dispatch([
                   resetForm('billingCycleForm'),
                   getList(),
                   selectTab('tabList'),
                   showTabs('tabList','tabCreate')     
                ])
            })
            .catch(e => {
                //toastr.warning('Erro', 'Operação não realizada!')
                e.response.data.errors.forEach(error => toastr.error('Erro', error))
            })
    }
    
}

export function showUpdate(billingCyle){
    // Usando redux-multi para disparar um array de actions
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate')
    ]
}