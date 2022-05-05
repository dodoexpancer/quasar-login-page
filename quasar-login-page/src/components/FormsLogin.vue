<template>
  <div>
    <div class="cardOne" style="align-items: center; max-width: 500vh">
      <q-card>
        <q-card-section>
          <q-form
              class="q-gutter-md"
          >
            <q-input
                rounded
                v-model="login.get_login.user"
                label="Login"
                filled
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Usuario Obrigatorio']"/>
            <q-input
                rounded
                v-model="login.get_login.senha"
                label="Senha"
                filled
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Senha Obrigatorio']"/>
          </q-form>
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
        </q-card-actions>
      </q-card>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// eslint-disable-next-line import/extensions,import/no-unresolved
import { useUsuarioStore } from '../store/user-store';

export default defineComponent({
  name: 'FormsLogin.vue',

  setup() {
    const login = useUsuarioStore();
    return { login };
  },
});

</script>

<style scoped>

</style>
