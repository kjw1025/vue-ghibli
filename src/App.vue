<template>
  <div class="container">
    <RouterView />
    </div>
</template>

<script>
import { useStore } from 'vuex';

export default {
  components: {

  },
  setup() {

    const store = useStore();
    store.dispatch('fetchMovieList');

    return {}
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
html {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 16px;
  background: #eff3f7;
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
</style>