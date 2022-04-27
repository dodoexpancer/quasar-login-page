<template>
<q-card>
  <h1>{{ user_count.counter }}</h1>
  <q-btn @click.prevent="user_count.increment()">
    <q-icon class="fab fa-plus" />
  </q-btn>
  <q-btn @click.prevent="user_count.decrement()">
    <q-icon class="fab fa-solid fa-bomb"/>
  </q-btn>
</q-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {useCounterStore} from "../store/user-store";

const user_count = useCounterStore()

defineProps<{ msg: string }>()

const count = ref(10)
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
