<template>
<div class="home">
  <p>{{user.state.name}}</p>
  <p>{{user.state.count}}</p>
  <button @click="user.increment">increment</button>
</div>
</template>

<script lang="ts">
import {
  Vue,
  Options,
  setup,
} from 'vue-class-component';
import homeUser from '/@/composables/home/home-user';

@Options({})
export default class Home extends Vue {
  private user = setup(() => homeUser());
  public created (): void {
    this.user.request();
  }
};
</script>

<style lang="scss" scoped>
$purple: #6c02d6;
.home {
  > p {
    &:nth-child(1) { color: $purple; }
    &:nth-child(2) { color: $blue; }
  }
}
</style>
