import { defineStore } from 'pinia';

export type User = {
    nome: string,
    cpf: number,
    rg: string,
    email: string,
    emailRepet: string,
    celular: string,
    senhaOne: string,
    senhaTwo: string
}

export const useUsuarioStore = defineStore('usuario', {
  state: () => ({
    usuario: {} as User,
  }),
  getters: {
    get_usuario: (state) => state.usuario,
  },
});
