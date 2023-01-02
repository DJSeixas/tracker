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
        return apiClient.get(`country,city?apiKey=dy64ZC4u6AHKsrmwNAMgAaz512y1x&domain=${info}`)
    }
}