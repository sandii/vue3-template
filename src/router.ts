import {
  createRouter,
  RouteRecordRaw,
  createWebHashHistory,
} from 'vue-router';

const routes: RouteRecordRaw[] = [{
  path: '/',
  redirect: { name: 'home' },
}, {
  path: '/home',
  name: 'home',
  component: () => import('/@/views/home.vue'),
}];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
