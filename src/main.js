import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Maska from 'maska'

createApp(App).use(Maska)

createApp(App).use(store).use(router).mount('#app')
