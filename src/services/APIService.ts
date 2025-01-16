import axios, { AxiosRequestConfig } from 'axios'
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// @ts-ignore
export const post = async (url, token, data) => {
    const config = {
        method: 'POST',
        url: url,
        data: data,
        headers: {
            Accept: 'application/json',
            Authorization: 'Bearer ' + token
        }
    };

    return makeRequest(config);
}
// @ts-ignore
export const postWithoutToken = async (url, data) => {
    const config = {
        method: 'POST',
        url: url,
        data: data,
    };

    return makeRequest(config);
}

// @ts-ignore
export const put = async (url, token, data) => {
    const config = {
        method: 'PUT',
        url: url,
        data: data,
        headers: {
            Accept: 'application/json',
            Authorization: 'Bearer ' + token
        }
    };

    return makeRequest(config);
}

// @ts-ignore
export const get = async (url, token) => {
    const config = {
        method: 'GET',
        url: url,
        headers: {
            Authorization: 'Bearer ' + token
        }
    };
    return makeRequest(config);
}

// @ts-ignore
export const getWithoutToken = async (url) => {
    const config = {
        method: 'GET',
        url: url,
    };

    return makeRequest(config);
}

// @ts-ignore
export const deleteItem = async (url, token) => {
    const config = {
        method: 'DELETE',
        url: url,
        headers: {
            Authorization: 'Bearer ' + token
        }
    };
    return makeRequest(config);
}

const makeRequest = async (config: AxiosRequestConfig) => {
    return axios(config);
}
