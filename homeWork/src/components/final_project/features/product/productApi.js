import axios from 'axios'

const baseUrl ="http://localhost:4000/product"

export const fetchAllProduct=async()=>{
    const response = await axios.get(baseUrl)
    return response.data
}

export const postProduct=async(product)=>{
    const response = await axios.post(`${baseUrl}`, product)
    return response.data
}

export const putProduct=async(id,product)=>{
    const response = await axios.put(`${baseUrl}/${id}`,product);
    return response.data;
}

export const deleteProduct=async(id)=>{
    const response = await axios.delete(`${baseUrl}/${id}`)
    return response.data;
}