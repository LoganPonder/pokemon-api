import { ProxyState } from '../AppState.js';
import Pokemon from '../Models/Pokemon.js';
import { pokemonApi } from '../Services/AxiosService.js'

class PokemonApiService {

    async getAllPokemonApi() {
        let res = await pokemonApi.get();
        // console.log(res.data.results);
        ProxyState.apiPokemon = res.data.results;
    }

    async getApiPokemon(pokemonName) {
        let res = await pokemonApi.get(pokemonName)
        res.data.id = null;
        // console.log(res.data);
        ProxyState.currentPokemon = new Pokemon(res.data);
    }
}

export const pokemonApiService = new PokemonApiService();