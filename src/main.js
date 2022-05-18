import { createApp } from 'vue'
import App from './App.vue'
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

createApp(App).mount('#app')

new Vue({
    render: h => h(App),
}).$mount('#app');