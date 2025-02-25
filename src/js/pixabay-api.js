import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com';

export function searchImg(query) {
    const BASE_URL = 'https://pixabay.com/api/';
    // const END_POINT = '/api/';
    const params = {
        key: '48901588-d5168312fb6e442ccb66c926a',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true
    };
    const url = BASE_URL;
    return axios.get(url, { params })
};  