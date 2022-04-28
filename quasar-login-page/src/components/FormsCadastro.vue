<template>
  <div class="cardOne" style="align-items: center; max-width: 200vh">
    <q-form
        class="q-gutter-md"
    >
      <q-input rounded
               v-model="user.get_cadastro.nome"
               label="Nome Completo*"
               filled
               lazy-rules
               :rules="[ val => val && val.length > 0 || 'Nome Obrigatorio']"/>
      <q-input filled
               lazy-rules
               rounded
               v-model="user.get_cadastro.cpf"
               label="CPF*"
               :rules="[ val => val && val.length > 0 || 'CPF Obrigatorio']"
               mask="###.###.###-##"/>
      <q-input filled
               lazy-rules
               rounded
               v-model="user.get_cadastro.rg"
               label="RG"
               :rules="[ val => val && val.length > 0 || 'RG Obrigatorio']"
               mask="##.###.###"/>
      <q-input filled
               lazy-rules
               rounded
               v-model="user.get_cadastro.email"
               :rules="[ val => val && val.length > 0 || 'Email Obrigatorio']"
               label="Email"/>
      <q-input filled
               lazy-rules
               rounded
               v-model="user.get_cadastro.emailRepet"
               :rules="[ val => val && val.length > 0 || 'Email Obrigatorio']"
               label="Digite novamente o Email"/>
      <q-input filled
               lazy-rulesr
               rounded
               ounded
               mask="(##) #####-####"
               v-model="user.get_cadastro.celular"
               label="Celular*"/>
      <q-input filled
               lazy-rules
               rounded
               v-model="user.get_cadastro.senhaOne"
               label="Digite uma senha*"/>
      <q-input rounded
               filled
               lazy-rules
               v-model="user.get_cadastro.senhaTwo"
               label="Digite novamente a mesma Senha*"/>
      <q-toggle v-model="user.get_cadastro.accept"
                label="Eu aceito os termos*"
                :value="true"/>
      <br/>
      <div>
        <q-btn icon="fab fa-solid fa-bomb"
               class="#483D8B text-primary"
               :disable="!user.get_cadastro.accept"
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
});

</script>
<style>
.cardOne {
  elevation: unset;
  color: #686868;
  max-width: 100vh;
  align-items: baseline;
  padding-top: 100px;
}

.inputText {
  text-align-last: center;
}
</style>
