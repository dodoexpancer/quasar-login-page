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

<style>

.toolbarStyled {
  background: hsl(0deg 0% 100%);
  z-index: 1;
}

.container {
  background-color: #eeeeee;
  color: #56e8f2;
  min-height: 100vh;
}

.div {
  margin: auto;
  max-height: 800px;
  max-width: 800px;
  padding: 10px;
  box-decoration-break: clone;
}

.box {
  position: relative;
  border: 0ex;
  width: 300px;
  background-color: #141922;
  transition: 0.3s;
  overflow: hidden;
}

.box:hover {
  transform: translateY(-15px);
}

.box::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 560px;
  height: 50px;
  transform: rotate(-40deg) translateY(-100px);
  background: linear-gradient(to rigth, #56e8f2, #2f80ed);
}

.box:hover::after {
  animation: border-efect 1, 2s ease;
}

@keyframes border-effect {
  0% {
    transform: rotate(-40deg) translateY(-100px);
  }
  100% {
    transform: rotate(-40deg) translateY(530px);
  }
}

.text-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #141922;
  width: 295px;
  height: 415px;
  z-index: 10;
  color: #FFF;
  padding: 0 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.text-content a {
  text-decoration: none;
  display: block;
  width: 140px;
  text-align: center;
  color: #FFF;
  line-height: 43px;
  border: 2px solid #FFF;
}
</style>
