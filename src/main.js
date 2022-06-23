import { createApp } from 'vue'
import App from './App.vue'
import './assets/scss/global.scss'
// 导入vue-router
import router from "./router/index"

import * as Cesium from 'cesium';
// 添加自己的Token
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIwMzI3OTI0Ni1lZmI0LTQzY2UtYmNlNC1iNWQ4ZDk2MWI5YjIiLCJpZCI6MTA4OTQsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1NTc3MDkzMTl9.M8p-f5k9GnVTXq8GUKAX_ZWOWDKQGJ96yjy0iXieY9E';

const app = createApp(App);
app.use(router)
app.mount('#app')

