<template>
  <div class="wrap">
    <div class="container">

      <Transition name="fade">
        <div class="intro" v-if="show" ></div>
      </Transition>
      
      <RouterView v-on:hide="hideIntro"/>

      
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import {ref} from 'vue';

export default {
  components: {
  },
  setup() {   

    // vuex 에 dispatch 전송
    const store = useStore();
    // 각각의 페이지에서 자료 호출 할지는 개인의 판단
    store.dispatch('fetchMovieList')
    // 인트로 화면 관련
    // show 가 true면 보이고, false 사라진다.
    const show = ref(true)

    const hideIntro = () => {
      show.value = false;
      // html 에 overflow-y를 auto
      document.querySelector('html').style.overflowY= 'auto';
    }

    return { 
          show,
          hideIntro
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ul,li {
  list-style: none;
}
a {
  color: #333;
  text-decoration: none;
}

/* scrollbar */
::-webkit-scrollbar {
  width: 8px;
  height: 5px;
  background-color: #f7f7f7;
  -moz-border-radius: 0px;
  -webkit-border-radius: 0px;
  border-radius: 0px;
}

::-webkit-scrollbar-thumb {
  background-color: #aaa;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
}



html {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 16px;
  background: #eff3f7;
  overflow-x: hidden;
  overflow-y: hidden;
}
.wrap {
  position: relative;
  display: block;
}
.container {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.intro {
  position: fixed;
  left:0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  background: url('@/assets/intro.jpg') no-repeat center;
  background-size: cover;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>