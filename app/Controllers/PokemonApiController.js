import { ProxyState } from '../AppState.js';
import { pokemonApiService } from '../Services/PokemonApiService.js';

function _draw() {
    let template = '';
    ProxyState.apiPokemon.forEach(pokemon => template += `<li class="action hover-action" onclick="app.pokemonApiController.getApiPokemon('${pokemon.name}')">${pokemon.name}</li>`)
    document.getElementById('api-pokemon').innerHTML = template
}

function _drawCurrentPokemon() {
    console.log(ProxyState.currentPokemon);
    document.getElementById('current-pokemon').innerHTML = ProxyState.currentPokemon ? ProxyState.currentPokemon.Template : 'No Pokemon Selected';

}

export default class PokemonApiController {
    constructor() {
        ProxyState.on('apiPokemon', _draw);
        ProxyState.on('currentPokemon', _drawCurrentPokemon);

        this.getAllPokemonApi();
    }

    async getAllPokemonApi() {
        try {
            await pokemonApiService.getAllPokemonApi();
        } catch(error) {
            console.log(error);
        }
    }

    async getApiPokemon(pokemonName) {
        try {
            await pokemonApiService.getApiPokemon(pokemonName);
        } catch(error) {
            console.log(error);
        }
    }
}




