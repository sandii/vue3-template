import { createStore } from 'vuex';
import user from '/@/store/user-store';

export default createStore({
  modules: {
    user,
  },
});
