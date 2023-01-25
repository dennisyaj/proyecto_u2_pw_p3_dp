<template >
    <img v-bind:src="imPokemon" v-if="imPokemon" alt="Imagen pokemon">
    <div class="fondo-dark"></div>
    <div class="container">
        <h1>Ingresa el nombre del Pokemon</h1>
        <input v-model="nombreBuscar" type="text" />
        <button v-on:click="buscar()">Buscar</button>
        <div class="resultado" v-if="idPokemon">
            <h1>Nombre: {{ nombrePokemon }}</h1>
            <h1>ID: {{ idPokemon }}</h1>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            nombrePokemon: null,
            nombreBuscar: null,
            idPokemon: null,
            imPokemon: null
        }
    }, methods: {
        async buscar() {
            this.contruirPokemon(this.nombreBuscar)
        },
        async buscarApi(nombre) {
            const data = await fetch("https://pokeapi.co/api/v2/pokemon/" + nombre).then((r) => r.json())
            return data
        },
        async contruirPokemon(nombre) {
            const { name, id } = await this.buscarApi(nombre)
            this.idPokemon = id
            this.nombrePokemon = name
            this.imPokemon = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" + this.idPokemon + ".svg"
        }
    },
}
</script>
<style >
img,
.fondo-dark {
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0px;
    top: 0px;
}

.fondo-dark {
    background-color: rgba(0, 0, 0, 0.5);
}

input {
    width: 250px;
    padding: 15px 10px;
    border-radius: 7px;
    border: none;
}

button {
    width: 80px;
    padding: 15px 10px;
    border-radius: 7px;
    border: none;
    margin-left: 10px;
}

button:hover {
    background-color: blueviolet;
}

h1 {
    color: white;
}

.container {
    position: relative;
    z-index: 99;
}

.resultado {
    margin-top: 50px;
}
</style>