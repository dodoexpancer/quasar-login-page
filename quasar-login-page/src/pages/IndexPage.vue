<template>
  <q-page class="row items-center justify-evenly">
    <forms-login-component></forms-login-component>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FormsLoginComponent from 'src/components/FormLogin.vue';

export default defineComponent({
  name: 'IndexPage',
  components: { FormsLoginComponent },
  setup() {

    const trabalhando = 'Estamos trabalhando - codigo em andamento'
    return { trabalhando };
  }
});
</script>
