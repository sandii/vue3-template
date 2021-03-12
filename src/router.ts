import {
  createRouter,
  RouteRecordRaw,
  createWebHashHistory,
} from 'vue-router';
import Home from '/@/views/home.vue';

const routes: RouteRecordRaw[] = [{
  path: '/',
  redirect: { name: 'home' },
}, {
  path: '/home',
  name: 'home',
  component: Home,
}];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
