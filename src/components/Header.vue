<template>
  <div class="header">
    <a v-for="r in routes" :href="r.path">{{ r.path }}</a>
  </div>
</template>

<script setup>
import { ref } from "vue";
import router from "../router";
let routes = ref(router.options.routes[0].children);
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-around;
}
</style>
