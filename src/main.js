import { createApp } from 'vue'
import App from './App.vue'

// 확장자 .js 는 생략 가능
import router from './router/index'
import store from './store/store'

createApp(App).use(router).use(store).mount('#app')
