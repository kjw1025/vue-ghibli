import { createStore } from 'vuex'
// js 확장자 생략 가능

import { fetchAllApi, fetchDetailInfo } from '../api/index'

export default createStore({
  // 데이터 
  state: {
    movieList: [],
    movieInfo: {}
  },
  // API 연동
  actions: {
    // 전체 데이터 호출
    fetchMovieList( { commit } ){
      fetchAllApi()
      .then(res => {
        // commit 으로 결과 전송
        commit('MOVIE_LIST_INIT', res.data)
      })
      .catch(err => console.log(err))
    },
    // 상세 데이터 호출
    fetchMovieInfo( { commit }, _id) {

      fetchDetailInfo(_id)
      .then(res => {
        commit('MOVIE_INFO', res.data)
      })
      .catch(err => console.log(err))

    }
  },
  // 데이터 저장
  mutations: {
    // actions 에서 전송된 데이터 저장 
    MOVIE_LIST_INIT(state, payload) {      
      state.movieList = payload;
    },
    MOVIE_INFO(state, payload) {
      state.movieInfo = payload
    }
  },
  // 데이터 참조
  getters: {
    // 전체 데이터 출력/참조
    getMovieList(state) {
      return state.movieList
    },
    // 상세 데이터 출력/참조
    getMovieInfo(state) {
      return state.movieInfo
    }
  }
})