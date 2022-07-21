<template>
  <div class="about">
    <h1>{{ route.name }}</h1>
    <ul>
      <transition v-for="(item, i) in list" mode="out-in" :key="i" appear>
        <li class="role" v-if="item.type === 'role'"  @click="handleClick(item)">{{ item.title }}</li>
        <li class="product" v-else-if="item.type === 'product'" >{{ item.title }}</li>
      </transition>
    </ul>
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
  // { id: 'p4', type: 'product', title: 'Product4' },
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
ul {
  height: 280px;
  border: 1px solid #000;
  margin: 0;
  padding: 10px;
  list-style: none;
  display: flex;
}

.role,
.product {
  line-height: 40px;
  margin-top: 10px;
  color: white;
  text-align: center;
  margin-right: 10px;
  width: 150px;
}

.role {
  background-color: red;
  cursor: pointer;
}

.product {
  background-color: green;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 2s linear;
}

.v-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.v-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
