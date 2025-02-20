import axios from "axios"

const API_URL = "http://192.168.100.51:8000/api/"

const axiosInstance = axios.create({
    baseURL: API_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
})

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error("Erro na requisicao", error)
        return Promise.reject(error)
    }
)

export default axiosInstance