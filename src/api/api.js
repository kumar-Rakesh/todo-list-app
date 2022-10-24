import axios from "axios"

// const url = 'https://comp-8967-authentication-app.herokuapp.com/api'

const url = 'http://localhost:5000/api'

const API = axios.create({ baseURL: url })

API.interceptors.request.use(req => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).accessToken}`
    }
    return req
})

export const register = (formData) => API.post('/auth/register', formData)

export const login = (formData) => API.post('/auth/login', formData)

export const getUserById = (id) => API.get(`/user/${id}`)

export const editUserById = (id, formData) => API.patch(`/user/${id}`, formData)

export const getAllToDoItems = () => API.get('/todo/item/all')

export const getToDoItemById = (id) => API.get(`/todo/item/${id}`)

export const addToDoItem = (formData) => API.post('/todo/item', formData)

export const updateToDoItem = (id, formData) => API.patch(`/todo/item/${id}`, formData)

export const deleteToDoItem = (id) => API.delete(`/todo/item/${id}`)

