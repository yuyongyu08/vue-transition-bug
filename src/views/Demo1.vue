<template>
  <div class="about">
    <h1>{{ route.name }}</h1>
    <transition-group tag="ul">
      <template v-for="item in list">
        <li :key="item.id" v-if="item.type === 'role'" class="role"
          @click="handleClick(item)">{{
              item.title
          }}</li>
        <li :key="item.id" v-if="item.type === 'product'" class="product">{{
            item.title
        }}</li>
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
    if (roleSlected.value) {
      roleSlected.value = false;
      list.value = products;
      list.value.unshift(item);
    } else {
      roleSlected.value = true;
      list.value = roles;
    }
  }
}

</script>
<style lang="scss">
.role,
.product {
  line-height: 40px;
  margin-top: 10px;
  color: white;
  text-align: center;
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
  transition: opacity 5s linear;
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
