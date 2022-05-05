<template>
  <div class="div-10">
    <q-card class="card-10">
      <q-card-section>
        <div class="div-11">
          <q-img
              style="height: 100px; width: 100px; position: center"
              src="src/assets/icons8-myspace-100.png"/>
        </div>
      </q-card-section>
      <q-card-section>
        <q-form
        >
          <q-input
              dense
              rounded
              v-model="login.user"
              label="Email"
              filled
              :rules="[ val => val && val.length > 0 || 'Usuario Obrigatorio']"/>
          <q-input
              dense
              rounded
              v-model="login.senha"
              label="Senha"
              filled
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Senha Obrigatorio']"/>
        </q-form>
        <div class="col-8">
          <a style="display: flex;  align-items: end; justify-content: end;"
             href="https://google.com.br" v-text="'Esquci minha senha'"></a>
        </div>
      </q-card-section>
      <q-card-actions>
        <div>
          <q-btn
              icon="fab fa-solid fa-bomb"
              class="#483D8B text-primary"
              @click.prevent="puxar"
              label=" Login"
          />
          <q-btn @click.prevent="puxar"
                 label="Cancelar"
                 type="reset"
                 color="primary"
                 flat
                 class="q-ml-sm"/>
        </div>
        <div>
          <q-img
              style="height: 32px; width: 32px"
              src="src/assets/icons8-whatsapp.gif"/>
        </div>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
// eslint-disable-next-line import/extensions,import/no-unresolved
import { useUsuarioStore } from '../store/user-store';

const login = ref(useUsuarioStore());

</script>

<style scoped lang="scss">
.div-10 {
  padding: 150px 150px 150px 150px;
  align-items: center;
  display: flex;
  justify-content: center;
}

.card-10 {
  width: 400px;
  height: 500px;
}

.div-11 {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
