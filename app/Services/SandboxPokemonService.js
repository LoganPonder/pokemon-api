import { ProxyState } from "../AppState.js";
import Pokemon from "../Models/Pokemon.js";
import { sandboxApi } from "./AxiosService.js";

class SandboxPokemonService {
    async getAllPokemon() {
        let res = await sandboxApi.get();
        console.log(res.data);
        ProxyState.myPokemon = res.data.map(p => new Pokemon(p));
    }

    async addPokemon() {
        console.log('hi');
        let res = await sandboxApi.post('', ProxyState.currentPokemon);
        console.log(res.data);
        ProxyState.myPokemon = [...ProxyState.myPokemon, new Pokemon(res.data)];
    }

    async removePokemon() {
        await sandboxApi.delete(ProxyState.currentPokemon.id);
        ProxyState.myPokemon = ProxyState.myPokemon.filter(p => p.id != ProxyState.currentPokemon.id);
        ProxyState.currentPokemon = null;
    }

    async setCurrent(id) {
        let pokemon = ProxyState.myPokemon.find(p => p.id == id);
        ProxyState.currentPokemon = pokemon;
    }
}

export const sandboxPokemonService = new SandboxPokemonService();
