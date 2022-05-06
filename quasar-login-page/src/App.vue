<template>
  <q-layout view="hHh lpR fFf">
    <q-header>
      <q-toolbar class="toolbarStyled fixed-top left text-blue-grey-14 shadow-2 ">
        <q-btn flat round dense icon="menu" class="q-mr-sm" @click="drawer = !drawer;"/>
        <q-separator vertical inset/>
        <q-img style="height: 36px; width: 36px; position: center"
               src="src/assets/icons8-myspace-100.png"/>
        <q-space/>
        <q-tabs v-model="model" @click="model" shrink>
          <q-tab icon="fa-solid fa-house" name="home"/>
          <q-tab name="cadastrar" label="Cadastrar"/>
          <q-tab name="login" label="Login"/>
        </q-tabs>
      </q-toolbar>
    </q-header>
    <q-drawer v-model="drawer" side="left" bordered behavior="desktop">
      <!-- drawer content -->
    </q-drawer>
    <forms-cadastro v-if="model === 'cadastrar'">
    </forms-cadastro>
    <forms-login v-if="model === 'login'">
    </forms-login>
  </q-layout>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import FormsCadastro from './components/FormsCadastro.vue';
import FormsLogin from './components/FormsLogin.vue';

const drawer = ref(false);
const model = ref('login');
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
