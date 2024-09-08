// todos os action creators responsáveis por criar as ações

import axios from 'axios'
import { toastr } from 'react-redux-toastr'
const BASE_URL = 'http://localhost:3003/api'

export function getList() {
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function create(values) {
    //console.log(values)
    axios.post(`${BASE_URL}/billingCycles`, values)
        .then(resp => {
            toastr.success('Sucesso', 'Operação realizada com sucesso!')
        })
        .catch(e => {
            //toastr.warning('Erro', 'Operação não realizada!')
            e.response.data.errors.forEach(error => toastr.error('Erro', error))
        })
    return {
        type: 'TEMP'
    }
}