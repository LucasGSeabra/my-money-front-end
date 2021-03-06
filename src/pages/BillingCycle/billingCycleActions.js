import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset, initialize } from 'redux-form'
const BASE_URL = 'http://localhost:3003/api'

export function getList() {
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

function submit(values, method) {
    return dispatch => {
        const id = values._id ? values._id : ''
        axios[method](`${BASE_URL}/billingCycles/${id}`, values)
        .then(resp => {
            toastr.success('Sucesso', 'Operação Realizada com Sucesso')
            dispatch([
                reset('billingCycleForm'),
                getList()
            ])
        })
        .catch(e => {
            e.response.data.errors.forEach(error => toastr.error('Erro', error))
        })
    }    
}

export function create(values) {
    return submit(values, 'post')    
}

export function update(values) {
    return submit(values, 'put')    
}

export function remove(values) {
    return submit(values, 'delete')    
}

export function resetForm() {
    return dispatch => dispatch(reset('billingCycleForm'))
}

export function initializeForm(billingCycle) {
    return [
        initialize('billingCycleForm', billingCycle)
    ]  
}