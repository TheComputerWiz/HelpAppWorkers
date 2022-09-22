import axios from 'axios';
const baseUrl = 'https://liplockvape.com';

export const getDataAPI = async (url, headers) => {
    try {
        const results = await axios.get(`${baseUrl}/api/${url}`, {headers}).then((response) => {
         return (response.data)
        });

        return results
    } catch (error) {
        return (
            error
        )
    }
}

export const postDataAPI = async (url, params, headers) => {
    try {
        const results = await axios.post(`${baseUrl}/api/${url}`, params, {headers}).then((response) => {
         return (response.data)
        });

        return results
    } catch (error) {
        return (
            error
        )
    }
}

export const patchDataAPI = async (url, params, headers) => {
    try {
        const results = await axios.patch(`${baseUrl}/api/${url}`, params, {headers}).then((response) => {
            console.log(response)
        });

        return results
    } catch (error) {
        return (
            error
        )
    }
}

export const deleteDataAPI = async (url) => {
    try {
        const results = await axios.delete(`${baseUrl}/api/${url}`).then((response) => {
         return (response.data)
        });

        return results
    } catch (error) {
        return (
            error
        )
    }
}