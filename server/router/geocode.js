const express = require("express");
const router = express.Router();
const config = require("../config/key.js");
const axios = require('axios');

router.get('/address', async (req, res) => {
    const { address } = req.query; // 클라이언트로부터 받은 주소
    try {
        const apiUrl = `https://naveropenapi.apigw.ntruss.com/map-geocode/v2/geocode?query=${encodeURIComponent(address)}`;
        const response = await axios.get(apiUrl, {
            headers: {
                'X-NCP-APIGW-API-KEY-ID': config.NAVER_API_KEY_ID,
                'X-NCP-APIGW-API-KEY': config.NAVER_API_KEY
            }
        });
        const data = response.data;
        res.send(data);
    } catch (error) {
        console.error('Geocoding API error:', error);
        res.status(500).send('Error occurred while fetching geocode data');
    }
});

module.exports = router;
