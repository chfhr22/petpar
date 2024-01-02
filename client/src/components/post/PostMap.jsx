import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { useSelector } from 'react-redux';

const PostMap = () => {
    const address = useSelector((state) => state.address.detailAddress);
    const [position, setPosition] = useState({ lat: 37.5566803113882, lng: 126.904501286522 });
    useEffect(() => {
        if (address) {
            axios.post('/api/post/geocode/address', { address }) // 'address' 객체를 직접 전달
                .then((response) => {
                    if (response.data.status === 'OK') {
                        const { x, y } = response.data.addresses[0];
                        setPosition({ lat: parseFloat(y), lng: parseFloat(x) });
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [address]);
    return (
        <>
            <Map center={position} style={{ width: '100%', height: '600px' }} level={3}>
                <MapMarker position={position} />
            </Map>
            {address}
        </>
    );
};

export default PostMap;
