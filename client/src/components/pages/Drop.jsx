import React, { useState, useEffect } from 'react';

const Drop = () => {
  const [sidoCategories, setSidoCategories] = useState([]);
  const [selectedSido, setSelectedSido] = useState('');
  const [gunguCategories, setGunguCategories] = useState([]);
  const [selectedGungu, setSelectedGungu] = useState('');
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    const fetchSidoCategories = async () => {
      try {
        const response = await fetch('http://apis.data.go.kr/1543061/abandonmentPublicSrvc/sido?serviceKey=vVLyFAo8K6jmbjIH0aA787B2DWHjQZ0UP2%2BK73Pga%2BeZ2jLsN1YoyZi0sIPYQSBt6H%2FIOspXRxGvTrPK3zXIkQ%3D%3D&_type=json');
        const data = await response.json();
        setSidoCategories(data.response.body.items.item);
      } catch (error) {
        console.error('Error fetching sido categories:', error);
      }
    };

    fetchSidoCategories();
  }, []);

  useEffect(() => {
    if (selectedSido) {
      const fetchGunguCategories = async () => {
        try {
          const response = await fetch(`http://apis.data.go.kr/1543061/abandonmentPublicSrvc/sigungu?upr_cd=${selectedSido}&serviceKey=vVLyFAo8K6jmbjIH0aA787B2DWHjQZ0UP2%2BK73Pga%2BeZ2jLsN1YoyZi0sIPYQSBt6H%2FIOspXRxGvTrPK3zXIkQ%3D%3D&_type=json`);
          const data = await response.json();
          setGunguCategories(data.response.body.items.item);
        } catch (error) {
          console.error('Error fetching gungu categories:', error);
        }
      };

      fetchGunguCategories();
    }
  }, [selectedSido]);

  const handleSidoChange = (event) => {
    const selectedSidoValue = event.target.value;
    console.log('Selected Sido:', selectedSidoValue);
    setSelectedSido(selectedSidoValue);
  };

  const handleGunguChange = (event) => {
    const selectedGunguValue = event.target.value;
    console.log('Selected Gungu:', selectedGunguValue);
    setSelectedGungu(selectedGunguValue);

    // 여기서 선택된 군구에 대한 데이터를 서버에서 가져오는 요청을 추가
    if (selectedSido && selectedGunguValue) {
      fetchShelterData(selectedSido, selectedGunguValue);
    }
  };

  const fetchShelterData = async (selectedSido, selectedGunguValue) => {
    try {
      const response = await fetch(`http://apis.data.go.kr/1543061/abandonmentPublicSrvc/shelter?upr_cd=${selectedSido}&org_cd=${selectedGunguValue}&serviceKey=vVLyFAo8K6jmbjIH0aA787B2DWHjQZ0UP2%2BK73Pga%2BeZ2jLsN1YoyZi0sIPYQSBt6H%2FIOspXRxGvTrPK3zXIkQ%3D%3D&_type=json`);
      const data = await response.json();
      
      // items 배열이 있는지 확인 후 careRegNo 값을 가져옴
      const items = data.response.body.items.item;
      if (items && items.length > 0) {
        const careRegNoValue = items[0].careRegNo;
        console.log('careRegNo Value:', careRegNoValue);
        // 가져온 값으로 원하는 처리 수행
      } else {
        console.error('No items or empty items array in the response.');
      }
    } catch (error) {
      console.error('Error fetching shelter data:', error);
    }
  };

  return (
    <div>
      {/* 시도 선택 드롭다운 */}
      <select onChange={handleSidoChange} value={selectedSido}>
        <option value="">시도 선택</option>
        {sidoCategories.map((sido) => (
          <option key={sido.orgCd} value={sido.orgCd}>
            {sido.orgdownNm}
          </option>
        ))}
      </select>

      {/* 군구 선택 드롭다운 */}
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

      {/* 선택된 군구에 대한 데이터 출력 */}
      {selectedGungu && (
  <div>
    <h3>{selectedGungu}에 대한 데이터:</h3>
    <ul>
      {categoryData.map((item) => (
        <li key={item.orgCd}>{item.careNm}</li>
      ))}
    </ul>
  </div>
)}
    </div>
  );
};

export default Drop;
