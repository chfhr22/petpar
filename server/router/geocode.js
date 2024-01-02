const express = require("express");
const router = express.Router();
const config = require("./config/key.js");

router.post('/address', async (req, res) => {
    const { address } = req.body; // 클라이언트로부터 받은 주소
    console.log({ address })

    try {
        const apiUrl = `https://naveropenapi.apigw.ntruss.com/map-geocode/v2/geocode?query=${encodeURIComponent(address)}`;
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'X-NCP-APIGW-API-KEY-ID': NAVER_API_KEY_ID,
                'X-NCP-APIGW-API-KEY': NAVER_API_KEY
            }
        });
        const data = await response.json();
        res.send(data);
    } catch (error) {
        console.error('Geocoding API error:', error);
        res.status(500).send('Error occurred while fetching geocode data');
    }
});

module.exports = router;