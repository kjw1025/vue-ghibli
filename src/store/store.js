import { createStore } from 'vuex';
import {fetchAllApi, fetchDetailInfo} from '../api/index.js';

export default createStore({

    // 데이터
    state: {
        movieList: [],
        movieInfo: {}
    },
    // API 연동
    actions: {
        fetchMovieList({commit}){
            fetchAllApi()
            .then(res => {
                commit('MOVIE_LIST_INIT', res.data)
            })
            .catch(err => console.log(err))
        },
        fetchMovieInfo({commit}, _id){
            fetchDetailInfo(_id)
            .then(res => {
                commit('MOVIE_INFO', res.data)
            })
            .catch(err => console.log(err))
        },
    },
    // 데이터 저장
    mutations: {
        MOVIE_LIST_INIT(state, payload) {
            state.movieList = payload;
        },
        MOVIE_INFO(state, payload) {
            state.movieInfo = payload;
        }
    },
    // 데이터 참조
    getters: {
        getMovieList(state) {
            return state.movieList
        },
        getMovieInfo(state) {
            return state.movieInfo
        }
    }
});