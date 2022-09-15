<template>
    <div class="movie" v-for="(item, index) in movieList" v-bind:key="index">
      <MovieList v-bind:propsdata = "item"/>
    </div>

    <button class="gotop" ref="gotop" @click="moveTop">위로가기</button>

</template>

<script>
import { computed, onMounted, onUpdated, ref } from 'vue';
import {useStore} from 'vuex'
import MovieList from '../components/MovieList.vue'
export default {  
  components: {
    MovieList
  },
  setup(props, context) {
    const store = useStore();
    // 처음에는 computed 가 결과가 없는 상태
    const movieList = computed( () => store.getters.getMovieList )
    // html 태그의 속성으로 ref 를 활용하여 선택
    const gotop = ref(null);

    onMounted( () => {
      // console.log(gotop.value)
    })

    // axios 실행 > vuex : mutaion 실행    
    onUpdated( () => {
      // 내용물이 최종 업데이트가 되었다면 App 으로 
      // intro 사라지라고 신호를 보낸다.
      let delay = setTimeout( () => {
        clearTimeout(delay);
        context.emit('hide');        
      }, 1500)
      
    });

    const moveTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }

    return {  
      movieList,
      gotop,
      moveTop
    }
  }
}
</script>

<style scoped>
.movie {
  position: relative;
  display: block;
  width: 49%;
  background: #fff;
  margin-bottom: 70px;
  border-radius: 5px;
  color: #adaeb9;
  padding: 20px;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
            0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  cursor: pointer;
}

.gotop {
  position: fixed;
  right: 50px;
  bottom: 150px;
  width: 100px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  background: #f00;
  color: #fff;
  cursor: pointer;
  z-index: 9;
  border: 0;
  border-radius: 10px;
}

@media screen and (max-width: 1000px) {
    .movie {
      width: 95%;
    }
}
</style>