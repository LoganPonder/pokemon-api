export default class Pokemon {
    constructor({ id, name, height, weight, sprites, img, types }) {
        this.id = id
        this.name = name 
        this.height = height
        this.weight = weight
        // go back to here
        this.types = types || types[0].type.name 
        this.img = img || sprites.other.dream_world['front_default']
    }

    get Template() {
        return /*html*/`
            <div class="bg-white px-3 py-5 shadow spell-card text-center">
                <h1>${this.name.toUpperCase()}</h1>
                <hr>
                <img src="${this.img}" class="img-fluid">
                <hr>
                <h4>Height: ${this.height}ft
                <hr>
                Weight: ${this.weight}lbs</h4>
                <hr>
                <h4>Type: ${this.Type}</h4>
            </div>
            ${this.Button}
        `;
    }

    get Button() {
        if (this.id) {
          return '<button class="btn btn-danger mt-2 btn-lg" onclick="app.sandboxPokemonController.removePokemon()">Release!</button>';
        }
        return '<button class="btn btn-light mt-2 btn-lg" onclick="app.sandboxPokemonController.addPokemon()">Capture!</button>';
    }
    // go back to here
    get Type() {
        let template = '';
        console.log(this.types)
        this.types.forEach(t => template += `| ${t.type.name} `);
        return template;
    }
}