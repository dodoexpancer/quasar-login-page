import { defineStore } from 'pinia';

export type User = {
    nome: string,
    cpf: number,
    rg: string,
    dataNascimento: string,
    email: string,
    emailRepet: string,
    celular: string,
    senhaOne: string,
    senhaTwo: string
    accept: boolean,
}

export type Login = {
    user: string,
    senha: string,
}

export const useUsuarioStore = defineStore('usuario', {
  state: () => ({
    cadastro: { accept: false } as User,
    login: {} as Login,

  }),
  getters: {
    get_cadastro: (state) => state.cadastro,
    get_login: (state) => state.login,
  },
});
