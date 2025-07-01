import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://683e352e1cd60dca33daba70.mockapi.io/api"
})

export const getProducts = async () => {
    const resp = await axiosInstance.get("/market-products")
    return resp.data
}

export const getproductById = async id => {
    const resp = await axiosInstance.get(`/market-products/${id}`)
    return resp.data
}