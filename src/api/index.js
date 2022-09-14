import axios from "axios";

// http reqeust 밑 response URL
const config = {
    baseUrl: 'https://ghibliapi.herokuapp.com'
}
// 전체 API 데이터 호출 함수
function fetchAllApi() {
    return axios.get(`${config.baseUrl}/films`)
}
function fetchDetailInfo(_id) {
    return axios.get(`${config.baseUrl}/films/${_id}`);
}

export {fetchAllApi, fetchDetailInfo} 