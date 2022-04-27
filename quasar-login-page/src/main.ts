import { createApp } from 'vue'
import App from './App.vue'
import {createPinia} from "pinia";
import './plugins/quasar'
import {Quasar} from "quasar";
import {options} from "./plugins/quasar/options";

const app = createApp(App).use(Quasar, options).use(createPinia())

app.mount('#app')


