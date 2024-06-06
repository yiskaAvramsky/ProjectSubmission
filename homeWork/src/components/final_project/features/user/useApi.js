import axios from 'axios'

const baseUrl ="http://localhost:4000/user"


export const fetchAllUser=async()=>{
    const response=await axios.get(baseUrl);
    return response.data;
}

export const postUser=async(user)=>{
    const response = await axios.post(`${baseUrl}`, user)
    return response.data
}

export const loginUser=async(password)=>{
    const response = await axios.post(`${baseUrl}/login`, password)
    return response.data
}


