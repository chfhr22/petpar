import axios from "axios";

export const BASE_URL = 'https://apis.data.go.kr'
export const apiKey = process.env.REACT_APP_PET_API_KEY;

const options = {
    params: {
        serviceKey: apiKey,
        bgnde: "20230101",
        endde: "20231218",
        pageNo: "10",
        numOfRows: "20",
        _type: "json",
    },
};

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
}