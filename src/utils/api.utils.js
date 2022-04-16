import axios from "axios";

class Api{
    constructor () {
        this.api = axios.create({
            baseURL:'http://localhost:5005/'
        })
        
        this.api.interceptors.request.use((config) => {
            const token = localStorage.getItem('token')
            if (token) {
                config.headers = {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            }
            return config
        }, (error) => {
            console.log(error)
        })
        this.api.interceptors.response.use((response) => response , 
        (error) => {
            if(error.response.status === 401){
                localStorage.removeItem('token')
                window.location = '/'
            }
            throw error
        })
    }
}