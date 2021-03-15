import { reactive } from 'vue';
import { useStore } from 'vuex';

interface State {
  name: string;
  count: number;
}
export interface HomeInfoReturn {
  state: State;
  request: () => Promise<any>;
  increment: () => any;
  doVuex: () => any;
}
export default (): HomeInfoReturn => {
  const state: State = reactive({
    name: '',
    count: 0,
  });
  const request = async (): Promise<void> => {
    // todo ajax
    state.name = 'hello';
    state.count = 1;
  };
  const increment = (): void => {
    state.count++;
  };
  const doVuex = (): void => {
    const store = useStore();
    console.log(store.state.user.id);
  };
  return {
    state,
    request,
    increment,
    doVuex,
  };
};
