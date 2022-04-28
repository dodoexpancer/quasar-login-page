<template>
  <div class="cardOne" style="align-items: center; max-width: 500vh">
    <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md"
    >
      <q-input rounded
               v-model="user.nome"
               label="Nome Completo*"
               filled
               lazy-rules
               :rules="[ val => val && val.length > 0 || 'Nome Obrigatorio']"/>
      <q-input filled
               lazy-rules
               rounded
               v-model="user.cpf"
               label="CPF"
               mask="###.###.###-##"/>
      <q-input filled
               lazy-rules
               rounded
               v-model="user.rg"
               label="RG"
               mask="##.###.###"/>
      <q-input filled
               lazy-rules
               rounded
               v-model="user.email"
               label="Email"/>
      <q-input filled
               lazy-rules
               rounded
               v-model="user.emailRepet"
               label="Digite novamente o Email"/>
      <q-input filled
               lazy-rulesr
               rounded
               ounded
               v-model="user.celular"
               label="Celular"/>
      <q-input filled
               lazy-rules
               rounded
               v-model="user.senhaOne"
               label="Digite uma senha"/>
      <q-input rounded
               filled
               lazy-rules
               v-model="user.senhaTwo"
               label="Digite novamente a mesma Senha"/>
      <q-toggle v-model="user.accept"
                label="Eu aceito os termos"
                :value="true"/>
      <br/>
      <div>
      <q-btn icon="fab fa-solid fa-bomb"
             class="#483D8B text-primary"
             :disable="!user.accept"
             @click.prevent="puxar"
             label="Avançar"/>
      <q-btn @click.prevent="puxar"
             label="Cancelar"
             type="reset"
             color="primary"
             flat
             class="q-ml-sm"/>
        </div>
    </q-form>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
// eslint-disable-next-line import/extensions,import/no-unresolved
import { useUsuarioStore } from '../store/user-store';

export default defineComponent({
  name: 'FormsLoginComponent',

  setup() {
    const user = useUsuarioStore();
    return { user };
  },
  methods: {
    puxar() {
      const user = useUsuarioStore();
      console.log(user.getUser);
    },
  },

});

</script>
<style>
.cardOne {
  elevation: unset;
  color: #686868;
  min-height: 100vh;
  max-height: 200vh;
  max-width: 100vh;
  align-items: baseline;
  margin: 50px 100px 50px 100px;
}

.inputText {
  text-align-last: center;
}
</style>
