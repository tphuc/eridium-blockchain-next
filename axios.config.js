import axios from 'axios'


const instance = axios.create({
    baseURL: 'http://127.0.0.1:4000',
    timeout: 2000,
});


export {
    instance as axiosInstance
}