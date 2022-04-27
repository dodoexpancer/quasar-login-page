<template>
  <div class="fixed-top">
    <q-toolbar  class="left text-primary shadow-2">
      <q-btn flat round dense icon="menu" class="q-mr-sm" />
      <q-space />
      <q-tabs v-model="model" @click="model" shrink>
        <q-tab icon="fa-solid fa-house" name="home"/>
        <q-tab name="cadastrar" label="Cadastrar" />
        <q-tab name="login" label="Login" />
      </q-tabs>
    </q-toolbar>
  </div>

  <div class="divOne">
    <div>
    <forms-login-component>

    </forms-login-component>
    </div>
  </div>

</template>
<script setup lang="ts">
const model = ref<string>('login')
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import FormsLoginComponent from './components/Formslogin.vue'
import { ref } from 'vue'

</script>

<style>


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.divOne{
  margin: 50px 200px 50px 200px;
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
