<template>
  <div class="div-20">
    <q-card class="card-20">
      <q-card-section>
        <div class="div-21">
          <q-img style="height: 80px; width: 80px; position: center"
                 src="src/assets/icons8-myspace-100.png"/>
        </div>
      </q-card-section>
      <q-card-section>
        <q-form>
          <q-input rounded
                   dense
                   v-model="user.get_cadastro.nome"
                   label="Nome Completo*"
                   filled
                   small
                   lazy-rules
                   :rules="[ val => val && val.length > 0 || 'Nome Obrigatorio']"/>
          <q-input filled
                   dense
                   lazy-rules
                   rounded
                   v-model="user.get_cadastro.cpf"
                   label="CPF*"
                   :rules="[ val => val && val.length > 0 || 'CPF Obrigatorio']"
                   mask="###.###.###-##"/>
          <q-input filled
                   dense
                   lazy-rules
                   rounded
                   v-model="user.get_cadastro.rg"
                   label="RG*"
                   :rules="[ val => val && val.length > 0 || 'RG Obrigatorio']"
                   mask="##.###.###"/>
          <q-input filled
                   dense
                   lazy-rules
                   rounded
                   v-model="user.get_cadastro.dataNascimento"
                   label="Data de Nascimento*"
                   :rules="[ val => val && val.length > 0 || 'Data de Nascimento Obrigatorio']"
                   mask="##/##/####"/>
          <q-input filled
                   lazy-rules
                   dense
                   rounded
                   v-model="user.get_cadastro.email"
                   :rules="[ val => val && val.length > 0 || 'Email Obrigatorio']"
                   label="Email*"/>
          <q-input filled
                   lazy-rules
                   rounded
                   dense
                   v-model="user.get_cadastro.emailRepet"
                   :rules="[ val => val && val.length > 0 || 'Email Obrigatorio']"
                   label="Digite novamente o Email*"/>
          <q-input filled
                   lazy-rulesr
                   rounded
                   dense
                   ounded
                   mask="(##) #####-####"
                   :rules="[ val => val && val.length > 0 || 'Celular Obrigatorio']"
                   v-model="user.get_cadastro.celular"
                   label="Celular*"/>
          <q-input filled
                   lazy-rules
                   dense
                   rounded
                   v-model="user.get_cadastro.senhaOne"
                   :rules="[ val => val && val.length > 0 || 'Senha Obrigatoria']"
                   label="Insira uma senha*"/>
          <q-input rounded
                   filled
                   lazy-rules
                   dense
                   v-model="user.get_cadastro.senhaTwo"
                   :rules="[ val => val && val.length > 0 || 'Email Obrigatorio']"
                   label="Insira novamente a senha*"/>

          <q-toggle v-model="user.get_cadastro.accept"
                    label="Eu aceito os termos*"
                    :value="true" model-value="string"/>
        </q-form>
      </q-card-section>
      <q-card-actions>
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
      </q-card-actions>
    </q-card>
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
<style scoped lang="scss">
.div-20 {
  padding: 80px 80px 80px 80px;
  display: flex;
  justify-content: center;
}

.card-20 {
  width: 700px;
  height: 800px;
}

.div-21 {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
