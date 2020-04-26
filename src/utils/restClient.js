import axios from 'axios';
import isEmpty from 'lodash/isEmpty';

const get = async (url, queryParams) => {
    try{
        const response = await axios.get(url, queryParams)
        return response
    }
    catch(error){
        throw new Error(error)
    }
}

const post = async (url, requestBody) => {
    // let axiosInstance = axios.create({
    //     baseURL: 'http:localhost:3000'
    //   });
    
    try{
        const apiUrl = `http://localhost:3000${url}`
        const response = await axios.post(apiUrl, requestBody)
        return response
    }
    catch(error){
        throw new Error(error)
    }
}

export default { get, post}
