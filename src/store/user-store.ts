import {
  GetterTree,
  MutationTree,
  ActionTree,
  ActionContext,
} from 'vuex';

interface State {
  id: number;
  username: string;
  nickname: string;
}
const state: State = {
  id: 0,
  username: '',
  nickname: '',
};
const getters: GetterTree<State, any> = {
  name (state: State): string {
    return state.username || state.nickname;
  },
};
const mutations: MutationTree<State> = {
  updateUser (
    state: State,
    payload: State,
  ): void {
    state.id = payload.id;
    state.username = payload.username;
    state.nickname = payload.nickname;
  },
};
const actions: ActionTree<State, any> = {
  async requestUser (
    ctx: ActionContext<State, any>,
  ): Promise<void> {
    // todo request
    ctx.commit('updateUser', {
      id: 1,
      username: 'hello',
      nickname: 'world',
    });
  }
};
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
