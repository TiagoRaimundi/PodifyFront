import axios from 'axios'

const client = axios.create({
    baseURL: "http://192.168.3.159:8989"
})

export default client