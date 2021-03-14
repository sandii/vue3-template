<template>
<div class="home">
  <span>home</span>
  <span>home</span>
</div>
</template>

<style lang="scss" scoped>
$purple: #6c02d6;
.home {
  > span {
    &:nth-child(1) { color: $purple; }
    &:nth-child(2) { color: $blue; }
  }
}
</style>
