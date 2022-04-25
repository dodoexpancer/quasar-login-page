<template>
<div class="divOne">
  <q-card>
  <q-card-section>
  <q-input rounded v-model="user" label="Nome Completo" />
    <q-input rounded v-model="user" label="CPF" />
      <q-input rounded v-model="user" label="RG" />
        <q-input rounded v-model="user" label="Email" />
          <q-input rounded v-model="user" label="Digite novamente o Email" />
          <q-input rounded v-model="user" label="Celular" />
            <q-input rounded v-model="user" label="Digite uma senha" />
              <q-input rounded v-model="user" label="Digite novamente a mesma Senha" />
  </q-card-section>
    <q-card-actions>
      <q-btn color="blue">
       Avançar
      </q-btn>
    </q-card-actions>
  </q-card>


</div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
name: 'FormsLoginComponent',

setup(){
  const user = ''
  const senha = ''

return {user, senha}
}
})
</script>
<style>
.divOne{
  border: 0ex;
}

</style>
