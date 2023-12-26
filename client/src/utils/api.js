import axios from 'axios';

export const BASE_URL = 'http://apis.data.go.kr';

const options = {
    headers: {
        'serviceKey': process.env.REACT_APP_RAPID_API_KEY,
    },
};

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};