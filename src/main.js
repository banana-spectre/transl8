import _ from 'lodash';
window._ = _ ;
import axios from 'axios';
window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')

