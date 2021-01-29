import { toastr } from 'react-redux-toastr'
import axios from 'axios'

const BASE_URL = 'http://localhost:3003/oapi'

function submit(url, values) {
    return dispatch => {
        axios.post(url, values)
            .then(response => {
                dispatch([
                    { type: 'USER_FETCHED', payload: response.data }
                ])
            })
            .catch(err => {
                err.response.data.errors.forEach(
                    error => toastr.error('Erro', error)
                )
            })
    }
}

export function login(values) {
    return submit(`${BASE_URL}/login`, values)
}

export function signup(values) {
    return submit(`${BASE_URL}/signup`, values)
}

export function logout() {
    return { type: 'TOKEN_VALIDATED', payload: false }
}

export function validateToken(token) {
    return dispatch => {
        if(token) {
            axios.post(`${BASE_URL}/validateToken`, { token })
                .then(response => {
                    dispatch({ type: 'TOKEN_VALIDATED', payload: response.data.valid })
                })
                .catch(error => dispatch({ type: 'TOKEN_VALIDATED', payload: false }))
        } else {
            dispatch({ type: 'TOKEN_VALIDATED', payload: false })
        }
    }
}