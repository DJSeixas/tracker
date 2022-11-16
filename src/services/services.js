import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://geo.ipify.org/api/v2',
    headers: {
        'Content-Type': 'application/json'
    }
})

// eslint-disable-next-line
export default{
    getInfoByIp(info){
        return apiClient.get(`country,city?apiKey=at_iv0QH7AW04fSOzKL3j42ujVFunPpX&domain=${info}`)
    }
}