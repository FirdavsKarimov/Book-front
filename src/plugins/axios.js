import axios from "axios";

axios.interceptors.request.use((config) => {

    config.headers.Authorization = 'Bearer ' + localStorage.getItem('token')
    config.baseURL = 'http://localhost:8888/api/'
    return config
})

export {
    axios as client
}