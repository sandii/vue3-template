import { reactive } from 'vue';

interface State {
  name: string;
  count: number;
}

export default () => {
  const state: State = reactive({
    name: '',
    count: 0,
  });
  const request = async () => {
    // todo ajax
    state.name = 'hello';
    state.count = 1;
  };
  const increment = () => {
    state.count++;
  };
  return {
    state,
    request,
    increment,
  };
};
