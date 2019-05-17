import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'http://localhost:3008/api/v1/',
    headers: {
        'Content-Type': 'application/json',
        Authorization: 'Token token=WLXTomWa3mM8QKtKRe5W2Mr2'
    }
})

const index = (endpoint, params) => {
    return axios.get(endpoint, {
        params
    })
}

const create = (endpoint, params) => {
    return axios.post(endpoint, params)
}

const show = (endpoint, id, params) => {
    return axios.get(`${endpoint}/${id}`, params)
}

const update = (endpoint, id, params) => {
    return axios.put(`${endpoint}/${id}`, params)
}

const destroy = (endpoint, id) => {
    return axios.delete(`${endpoint}/${id}`)
}

const answer = (endpoint, id, params) => {
    return axios.post(`${endpoint}/${id}/answer`, params)
}

const proto = {
    index,
    create,
    show,
    update,
    destroy,
    answer
}

export default function() {
    return Object.assign({}, proto)
}