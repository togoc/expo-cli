import axios from 'axios'
import apis from './apis'

const ajax = axios.create({
    baseURL: apis.baseURL,
})

ajax.interceptors.request.use(config => {
    return config
}, err => {
    console.log(err)
})


ajax.interceptors.response.use(res =>{
    return res
},err=>{
    console.log(err)
})

export const test = () => {
    return ajax.get('/test')
}
