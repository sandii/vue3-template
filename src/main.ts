import { createApp } from 'vue';
import 'normalize.css';
import {
  ElLoading,
  ElMessage,
} from 'element-plus';
import App from '/@/app.vue';
import router from '/@/router';
import store from '/@/store';
import '/@/styles/common.scss';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $message: typeof ElMessage;
  }
}
const app = createApp(App);
app.use(router);
app.use(store);
app.use(ElLoading);
app.use(ElMessage as any); // type bug
app.mount('#app');
