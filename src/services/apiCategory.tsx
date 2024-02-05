import axios from "axios"
import { Category } from "../interfaces"

export const fetchGetCategories = async () : Promise<Category[]> =>{
    const {data} = await axios.get(`${import.meta.env.VITE_BASE_URL}/v1/categories`)
    return data.categories
}