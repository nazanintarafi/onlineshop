import axios from 'axios';
export const apiUrl = 'https://reqres.in/api/';

const axiosBase = axios.create({
    baseURL: apiUrl,
    timeout: 5000,
    validateStatus: function () {
        return true;
    }
});



export const get = async (path) => {
    try {
        const res = await axiosBase.get(path);
        const { data } = await res;
        return data;
    } catch (error) {
        return await 0;
    }
}

export const post = async (path, form) => {
    try {
        const res = axiosBase.post(path, form);
        const { data } = await res;
        return data;
    } catch (error) {
        return await 0;
    }
}



export default { get, post };