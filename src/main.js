import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import ColchonesComponent from './components/ColchonesComponent.vue'

const app = createApp(App).use(router);
app.use(VueAxios, axios);

app.use(PrimeVue, {
    theme: {
        preset: Aura
    },
    license: 'PRIMEUI-LICENSE-KEY'
});
app.component("ColchonesComponent", ColchonesComponent)
app.mount('#app');
