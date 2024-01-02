import React, { useState, useRef } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

const PostMap = () => {
    const [coordinates, setCoordinates] = useState(null); // 현재 위치의 좌표값을 저장할 상태
    const mapRef = useRef();

    const getCoordinates = () => {
        const map = mapRef.current;

        setCoordinates({
            center: {
                lat: map.getCenter().getLat(),
                lng: map.getCenter().getLng(),
            },
        });
    };

    return (
        <>
            <Map
                center={{ lat: 37.5566803113882, lng: 126.904501286522 }}
                style={{ width: '100%', height: '600px' }}
                level={3}
                ref={mapRef}
            >
                <MapMarker position={{ lat: 37.5566803113882, lng: 126.904501286522 }} />
                <button onClick={getCoordinates}>현재 위치 좌표 얻기</button>
            </Map>

            {coordinates && (
                <div>
                    현재 위치의 좌표는..
                    <p>위도 : {coordinates.center.lat}</p>
                    <p>경도 : {coordinates.center.lng}</p>
                </div>
            )}
        </>
    );
};

export default PostMap;
