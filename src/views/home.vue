<template>
<div class="home">
  <p>{{info.state.name}}</p>
  <p>{{info.state.count}}</p>
  <button @click="info.increment">increment</button>
</div>
</template>

<script lang="ts">
import {
  Vue,
  Options,
  setup,
} from 'vue-class-component';
import { namespace } from 'vuex-class';
import homeInfo from '/@/composables/home/home-info';

const userVuex = namespace('user');

@Options({})
export default class Home extends Vue {
  private info = setup(() => homeInfo());
  @userVuex.State('username') username!: string;
  public created (): void {
    this.info.request();
    this.$message.success(this.username);
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
