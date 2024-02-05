import axios from "axios";
import { BrandPost, Brands } from "../interfaces";

export const fetchAllBrands = async (): Promise<Brands[]> => {
  const { data } = await axios.get(`${import.meta.env.VITE_BASE_URL}/v1/brands`)
  return data.brands
}

export const fetchDeleteBrand = async (brandId: string) => {
  const response = await axios.delete(`${import.meta.env.VITE_BASE_URL}/v1/brands/${brandId}`)
  return response
}

export const fetchCreateBrand = async (mutateData: BrandPost) => {
  console.log('mutateData',mutateData);
  
  const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/v1/brands`, mutateData)
  return response
}