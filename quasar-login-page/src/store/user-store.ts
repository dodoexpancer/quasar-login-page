import {defineStore} from 'pinia';
import {ref} from "vue";

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
        nome: ref<string>(),
        cpf: ref<number>(),
        rg: ref<string>(),
        email: ref<string>(),
        emailRepet: ref<string>(),
        celular: ref<string>(),
        senhaOne: ref<string>(),
        senhaTwo: ref<string>(),
    }),

    getters: {
        getUser(state) {
            return [
                state.nome,
                state.cpf,
                state.rg,
                state.celular,
                state.email,
                state.emailRepet,
                state.senhaOne,
                state.senhaTwo]
        },
    }
});
