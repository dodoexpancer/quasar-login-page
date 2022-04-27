<template>
  <q-card class="cardOne">
  <q-card-section>
  <q-input autofocus rounded v-model="user.nome" label="Nome Completo" />
    <q-input rounded v-model="user.cpf" label="CPF" />
      <q-input rounded v-model="user.rg" label="RG" />
        <q-input rounded v-model="user.email" label="Email" />
          <q-input rounded v-model="user.emailRepet" label="Digite novamente o Email" />
          <q-input rounded v-model="user.celular" label="Celular" />
            <q-input rounded v-model="user.senhaOne" label="Digite uma senha" />
              <q-input rounded v-model="user.senhaTwo" label="Digite novamente a mesma Senha" />
  </q-card-section>
    <q-card-actions>
      <q-btn class="#483D8B text-primary" @click.prevent="puxar">
       Avançar
      </q-btn>
      <q-btn class="blue" @click.prevent="puxar">
        Cancelar
      </q-btn>
    </q-card-actions>
  </q-card>
</template>

<script lang="ts">
import { useUsuarioStore} from "../store/user-store";
import {defineComponent} from "vue";

export default defineComponent({
  name: 'FormsLoginComponent',

  setup(){
    const user = useUsuarioStore();
    return {user}
  },
  methods:{
   puxar(){
      const user = useUsuarioStore();
      console.log(user.getUser)
    }
  }

})




</script>
<style>
.cardOne{
  background: white;
}

.imputText{
  background: #483D8B;
}
</style>
