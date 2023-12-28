import React, { useState, useEffect } from 'react';
// import { fetchFromAPI } from '../../utils/api';

const Find = () => {
    const [isSubMenuVisible, setSubMenuVisible] = useState(false);

    const [sidoCategories, setSidoCategories] = useState([]);
    const [selectedSido, setSelectedSido] = useState('');
    const [gunguCategories, setGunguCategories] = useState([]);
    const [selectedGungu, setSelectedGungu] = useState('');
    const [categoryData, setCategoryData] = useState([]);
    const [petItems, setPetItems] = useState([]);

    useEffect(() => {
        const fetchSidoCategories = async () => {


            try {
                const response = await fetch('http://apis.data.go.kr/1543061/abandonmentPublicSrvc/sido?serviceKey=vVLyFAo8K6jmbjIH0aA787B2DWHjQZ0UP2%2BK73Pga%2BeZ2jLsN1YoyZi0sIPYQSBt6H%2FIOspXRxGvTrPK3zXIkQ%3D%3D&_type=json');
                const data = await response.json();

                const filteredSidoCategories = data.response.body.items.item.filter(
                    (sido) => {
                        // 세종 클릭시 api에 정보가 없어서 오류뜨니 안보이게 처리함
                        return sido.orgCd !== '5690000';
                    }
                );

                setSidoCategories(filteredSidoCategories);
            } catch (error) {
                console.error('Error fetching sido categories:', error);
            }
        };

        fetchSidoCategories();
    }, [categoryData]);

    useEffect(() => {
        if (selectedSido) {
            const fetchGunguCategories = async () => {
                try {

                    const response = await fetch(`http://apis.data.go.kr/1543061/abandonmentPublicSrvc/sigungu?upr_cd=${selectedSido}&serviceKey=vVLyFAo8K6jmbjIH0aA787B2DWHjQZ0UP2%2BK73Pga%2BeZ2jLsN1YoyZi0sIPYQSBt6H%2FIOspXRxGvTrPK3zXIkQ%3D%3D&_type=json`);
                    const data = await response.json();

                    if (data.response.body.items && data.response.body.items.item) {
                        setGunguCategories(data.response.body.items.item);
                    } else {
                        setGunguCategories([]); // 데이터가 없으면 빈 배열로 설정
                    }
                } catch (error) {
                    console.error('Error fetching gungu categories:', error);

                }
            };

            fetchGunguCategories();
        }
    }, [selectedSido]);

    const handleSidoChange = (event) => {
        const selectedSidoValue = event.target.value;
        console.log(selectedSidoValue)
        setSelectedSido(selectedSidoValue);
    };

    const handleGunguChange = (event) => {
        const selectedGunguValue = event.target.value;
        console.log(selectedGunguValue)
        setSelectedGungu(selectedGunguValue);

        // 군구
        if (selectedSido && selectedGunguValue) {
            fetchShelterData(selectedSido, selectedGunguValue);
        }
    };

    const toggleSubMenu = () => {
        setSubMenuVisible(!isSubMenuVisible);
    };

    const fetchShelterData = async (selectedSido, selectedGunguValue) => {
        try {
            const shelterResponse = await fetch(`http://apis.data.go.kr/1543061/abandonmentPublicSrvc/shelter?upr_cd=${selectedSido}&org_cd=${selectedGunguValue}&serviceKey=vVLyFAo8K6jmbjIH0aA787B2DWHjQZ0UP2%2BK73Pga%2BeZ2jLsN1YoyZi0sIPYQSBt6H%2FIOspXRxGvTrPK3zXIkQ%3D%3D&_type=json`);
            const shelterData = await shelterResponse.json();

            const items = shelterData.response.body.items.item;
            if (items && items.length > 0) {
                const promises = items.map(async (item) => {
                    const careRegNo = item.careRegNo;
                    const abandonmentResponse = await fetch(`http://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?care_reg_no=${careRegNo}&serviceKey=vVLyFAo8K6jmbjIH0aA787B2DWHjQZ0UP2%2BK73Pga%2BeZ2jLsN1YoyZi0sIPYQSBt6H%2FIOspXRxGvTrPK3zXIkQ%3D%3D&_type=json`);
                    const abandonmentData = await abandonmentResponse.json();

                    // 조건부 데이터 접근
                    const itemArray = abandonmentData.response.body.items.item;
                    if (itemArray && itemArray.length > 0) {
                        return itemArray[0]; // 첫 번째 항목 반환
                    }
                    return null; // itemArray가 비어있거나 존재하지 않는 경우
                });

                const results = await Promise.all(promises);
                const newPetItems = results.filter(item => item).map(item => ({
                    careNm: item.careNm,
                    orgNm: item.orgNm,
                    chargeNm: item.chargeNm,
                    careTel: item.careTel,
                    careAddr: item.careAddr,
                }));

                setPetItems(newPetItems);
            } else {
                console.error('No items or empty items array in the response.');
            }
        } catch (error) {
            console.error('Error fetching shelter data:', error);
        }
    };


    return (
        <div id='findSection' className='pages'>
            <div className="find__container">
                <div className="find__cate">
                    <ul>
                        <li className="location-item" onClick={toggleSubMenu}>
                            <select onChange={handleSidoChange} value={selectedSido}>
                                <option value="">시도 선택</option>
                                {sidoCategories.map((sido) => (
                                    <option key={sido.orgCd} value={sido.orgCd}>
                                        {sido.orgdownNm}
                                    </option>
                                ))}
                            </select>
                        </li>

                        <li className="location-item" onClick={toggleSubMenu}>
                            {selectedSido && (
                                <select onChange={handleGunguChange} value={selectedGungu}>
                                    <option value="">군구 선택</option>
                                    {gunguCategories.map((gungu) => (
                                        <option key={gungu.orgCd} value={gungu.orgCd}>
                                            {gungu.orgdownNm}
                                        </option>
                                    ))}
                                </select>
                            )}
                        </li>
                    </ul>
                </div>

                <div className="find__title">
                    <h2>📍 이지역의 보호소</h2>
                    {/* <p>가까운순</p> */}
                </div>
                <div className="find__boxWrap">
                    {petItems.map((item, index) => (
                        <div className="find__box" key={index}>
                            <div className="box01">
                                <h2>🏪 {item.careNm}</h2>
                            </div>
                            <div className="box02">
                                <div className='boxInfo'>
                                    <div className='name'>지역</div>
                                    <div className='anwser'>{item.orgNm}</div>
                                </div>
                                <div className='boxInfo'>
                                    <div className='name'>상세주소</div>
                                    <div className='anwser'>{item.careAddr}</div>
                                </div>

                                <div className='boxInfo'>
                                    <div className='name'>전화번호</div>
                                    <div className='anwser'>{item.careTel}</div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Find