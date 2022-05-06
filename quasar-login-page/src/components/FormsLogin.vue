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
          <div class="col-0">
            <q-btn
                icon="fab fa-solid fa-bomb"
                class="#483D8B text-primary"
                @click.prevent="puxar"
                label=" Login"
            />
          </div>
        </div>
          </q-card-actions>
      <q-separator spaced inset/>
          <q-card-actions class="justify-end absolute-bottom">
            <div class="row">
              <div>
                <q-btn
                    align="right"
                    icon="fa-brands fa-whatsapp"
                    color="primary"
                />
              </div>
              <div >
                <q-btn
                    align="center"
                    icon="fa-brands fa-instagram"
                    color="primary"
                />
              </div>
              <div >
                <q-btn
                    align="left"
                    icon="fa-brands fa-twitter"
                    color="primary"
                />
              </div>
            </div>
      </q-card-actions>
      <q-card-actions align="right">

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
  height: 420px;
}

.div-11 {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
