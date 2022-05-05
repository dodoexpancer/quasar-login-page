<template>
  <div class="container">
    <div class="div">
      <q-toolbar class="toolbarStyled fixed-top left text-blue-grey-14 shadow-2 ">
        <q-btn flat round dense icon="menu" class="q-mr-sm"/>
        <q-space/>
        <q-tabs v-model="model" @click="model" shrink>
          <q-tab icon="fa-solid fa-house" name="home"/>
          <q-tab name="cadastrar" label="Cadastrar"/>
          <q-tab name="login" label="Login"/>
        </q-tabs>
      </q-toolbar>
      <forms-cadastro v-if="model === 'cadastrar'">
      </forms-cadastro>
      <forms-login v-if="model === 'login'">
      </forms-login>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import FormsCadastro from './components/FormsCadastro.vue';
import FormsLogin from './components/FormsLogin.vue';

const model = ref<string>('login');
</script>

<style scoped lang="scss">

.toolbarStyled {
  background: hsl(0deg 0% 100%);
  z-index: 1;
}

.container {
  background-color: #eeeeee;
  min-height: 1050px;
  max-width: 2500px;
}

.div {
  margin: auto;
  max-height: 800px;
  max-width: 800px;
  padding: 10px;
  box-decoration-break: clone;
}

</style>
