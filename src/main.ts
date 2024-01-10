import { createApp } from 'vue';
import './styles/main.css';
import Toast from 'vue-toastification';
import App from './App.vue';
import initializeRouter from './router';
import 'vue-toastification/dist/index.css';

const app = createApp(App);

const options = {
    draggable: false,
    position: 'bottom-center',
};

app.use(Toast, options);

initializeRouter(app);

app.mount('#app');
