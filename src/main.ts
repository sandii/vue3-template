import { createApp } from 'vue';
import App from '/@/app.vue';
import router from '/@/router';
import 'normalize.css';
import '/@/styles/common.scss';

const app = createApp(App);
app.use(router);
app.mount('#app');
