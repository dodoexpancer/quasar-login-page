<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="toolbarFirst">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
         Expancer Snikeers
        </q-toolbar-title>
        <div class="q-pa-md">
    <q-btn-dropdown color="primary" label="Seja Bem-Vindo" no-caps>
      <q-list>
        <q-item clickable v-close-popup @click="cadastrarInterno">
          <q-item-section>
            <q-tooltip>Cadastrar</q-tooltip>
            <q-item-label>Cadastrar</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-close-popup @click="loginInterno">
          <q-item-section>
            <q-item-label>Fazer Login</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </div>
  </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';

const linksList = [
  {
    title: 'Github Overview Douglas Neves',
    icon: 'code',
    link: 'https://github.com/dodoexpancer'
  }
];


export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {

    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
});
</script>
<style>
.toolbarFirst{
  background-color: cornflowerblue;
}
</style>
