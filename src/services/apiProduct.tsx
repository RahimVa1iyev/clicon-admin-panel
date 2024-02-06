import axios from "axios"
import { Product } from "../interfaces"

export const fetchGetProducts = async () => {
    const {data} = await axios.get(`${import.meta.env.VITE_BASE_URL}/v1/products`)
    return data.products
}

export const fetchPostProduct = async (mutateData : Product) => {
    const {data} = await axios.post(`${import.meta.env.VITE_BASE_URL}/v1/products`,mutateData)
    return data.id
}

export const fetchUploadImage = async({id ,formData}:any) => {
    console.log('id',id);
    
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/v1/products/uploadImage/${id}`,formData,{
        headers: {
          'Content-Type': 'multipart/form-data'
        }
    })
    return response
}