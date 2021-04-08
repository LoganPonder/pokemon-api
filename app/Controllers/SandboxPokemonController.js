import { ProxyState } from "../AppState.js";
import { sandboxPokemonService } from "../Services/sandboxPokemonService.js";

function _draw() {
    let template = '';
    ProxyState.myPokemon.forEach(p => template += `<li class="action hover-action" onclick="app.sandboxPokemonController.setCurrent('${p.id}')">${p.name}</li>`);
    document.getElementById('my-pokemon').innerHTML = template;
}

export default class SandboxPokemonController {
    constructor() {
        ProxyState.on('myPokemon', _draw);

        this.getAllPokemon();
    }

    async getAllPokemon() {
        try {
            await sandboxPokemonService.getAllPokemon();
        } catch(error) {
            console.log(error)
        }
    }

    async addPokemon() {
        try {
            await sandboxPokemonService.addPokemon();
        } catch(error) {
            console.log(error);
        }
    }

    async removePokemon() {
        try {
            await sandboxPokemonService.removePokemon();
        } catch(error) {
            console.log(error);
        }
    }

    async setCurrent(id) {
        try {
            await sandboxPokemonService.setCurrent(id);
        } catch(error) {
            console.log(error);
        }
    }
}
