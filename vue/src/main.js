import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/saga-blue/theme.css'       
import 'primevue/resources/primevue.min.css'
import "primeflex/primeflex.css";
import 'primeicons/primeicons.css'
import Button from 'primevue/button';

const app = createApp(App);

app.component('PrimeButton', Button);

app.use(PrimeVue).use(store).use(router).mount('#app')
