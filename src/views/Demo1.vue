<template>
  <div class="demo">
    <h1>{{ route.name }}</h1>
    <transition-group tag="ul">
      <template v-for="item in list" :key="item.id">
        <li class="role" v-if="item.type === 'role'" @click="handleClick(item)">
          {{ item.title }}</li>
        <li class="product" v-else-if="item.type === 'product'">
          {{ item.title }} for {{ list[0].title }}
        </li>
      </template>
    </transition-group>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRoute } from 'vue-router'

const route = useRoute()

let roleSlected = ref(false);

const roles = [
  { id: 'r1', type: 'role', title: 'Role1' },
  { id: 'r2', type: 'role', title: 'Role2' },
  { id: 'r3', type: 'role', title: 'Role3' },
  { id: 'r4', type: 'role', title: 'Role4' },
  { id: 'r5', type: 'role', title: 'Role5' },
];

const products = [
  { id: 'p1', type: 'product', title: 'Product1' },
  { id: 'p2', type: 'product', title: 'Product2' },
  { id: 'p3', type: 'product', title: 'Product3' },
  { id: 'p4', type: 'product', title: 'Product4' },
  // {id: 'p5', type: 'product', title: 'Product5'},
]

let list = ref(roles);

function handleClick(item) {
  if (item.type === 'role') {
    if (!roleSlected.value) {
      roleSlected.value = true;
      list.value = [...products];
      list.value.unshift(item);
    } else {
      roleSlected.value = false;
      list.value = roles;
    }
  }
}

</script>
<style lang="scss">
@import '../assets/component.scss'
</style>
