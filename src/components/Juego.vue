<template >
    <div v-if="mostrarJuego">
        <div id="contenedor-juego" v-if="banderajuego">
            <p>Puntaje:{{ puntaje }}</p>
            <p>Intento:{{ intento }}</p>
        </div>
        <div v-if="mostrarInicio">
            <img src="../img/megro.png" alt="n">
            <img src="../img/megro.png" alt="n">
            <img src="../img/megro.png" alt="n">
        </div>
        <div v-if="!mostrarInicio">
            <img :src="this.poke1.ruta" alt="n">
            <img :src="this.poke2.ruta" alt="n">
            <img :src="this.poke3.ruta" alt="n">
        </div>
        <div class="container-texto">
            <p>{{ pokemonTexto1 }}</p>
            <p>{{ pokemonTexto2 }}</p>
            <p>{{ pokemonTexto3 }}</p>
        </div>
        <button v-on:click="jugar()">Jugar</button>
    </div>
    <div v-if="mostrarPerdedor">
        <h1 class="perdedor">Haz utilizado tus 5 intentos</h1>
        <h2 class="perdedor">El juego ha terminado, intentalo nuevamente</h2>
        <button v-on:click="nuevoJuego">Nuevo Juego</button>
    </div>
    <div v-if="mostrarGanador">
        <h1 class="ganador">Puntaje: {{ puntaje }}</h1>
        <img src="../img/congratulations.gif" alt="Nose puede renderixar">
        <h1 class="ganador">Felicitaciones has ganado un premio de $10.000,00</h1>
        <button v-on:click="nuevoJuego">Nuevo Juego</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            puntaje: 0,
            intento: 0,
            banderajuego: true,
            pokemonTexto1: 'XXXXXXXXXXXXXXXX',
            pokemonTexto2: 'XXXXXXXXXXXXXXXX',
            pokemonTexto3: 'XXXXXXXXXXXXXXXX',
            poke1: null,
            poke2: null,
            poke3: null,
            mostrarInicio: true,
            mostrarJuego: true,
            mostrarGanador: false,
            mostrarPerdedor: false

        }
    }
    ,
    methods: {
        async jugar() {
            const numAle1 = this.obtenerAleatorio(3)
            const numAle2 = this.obtenerAleatorio(3)
            const numAle3 = this.obtenerAleatorio(3)

            const vectorPlantilla = await this.construirPokemon()
            this.poke1 = vectorPlantilla[numAle1]
            this.poke2 = vectorPlantilla[numAle2]
            this.poke3 = vectorPlantilla[numAle3]
            this.pokemonTexto1 = this.poke1.nombre
            this.pokemonTexto2 = this.poke2.nombre
            this.pokemonTexto3 = this.poke3.nombre
            this.mostrarInicio = false
            this.intento++
            if (numAle1 == numAle2 && numAle1 == numAle3) {
                this.puntaje += 5

            } else if (numAle1 == numAle2 || numAle2 == numAle3 || numAle1 == numAle3) {
                this.puntaje += 2
            }


            if (this.puntaje > 9 || this.intento == 5) {
                if (this.puntaje > 9) {
                    this.mostrarInicio = true
                    this.mostrarJuego = false
                    this.mostrarGanador = true
                } else {
                    this.mostrarInicio = true
                    this.mostrarJuego = false
                    this.mostrarPerdedor = true
                }
            } else {
                return
            }


        },
        nuevoJuego() {
            this.mostrarJuego = true
            this.mostrarPerdedor = false
            this.mostrarGanador = false
            this.pokemonTexto1 = 'XXXXXXXXXXXXXXXX'
            this.pokemonTexto2 = 'XXXXXXXXXXXXXXXX'
            this.pokemonTexto3 = 'XXXXXXXXXXXXXXXX'
            this.puntaje = 0
            this.intento = 0

        },
        obtenerAleatorio(max) {
            return Math.floor(Math.random() * max);
        },
        async consumirAPIPokemon(id) {
            const data = await fetch("https://pokeapi.co/api/v2/pokemon/" + id).then((r) => r.json())
            return data
        },
        definirPokemon() {
            const vectorPokemons = [2, 6, 80, 15];
            return vectorPokemons;
        },
        async construirPokemon() {
            const vectorRetornoObjetosPoke = []
            const vectorObjetosPoke = this.definirPokemon()
            for (let index = 0; index < 4; index++) {
                const idPokemon = vectorObjetosPoke[index];
                const objPokemon = await this.contruirObjetoPokemon(idPokemon)
                vectorRetornoObjetosPoke.unshift(objPokemon)
            }
            return vectorRetornoObjetosPoke
        },
        async contruirObjetoPokemon(id) {
            const { name } = await this.consumirAPIPokemon(id)
            const objetosP = { ruta: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/' + id + '.svg', nombre: name }
            return objetosP
        }
    }
}
</script>
<style >
img {
    margin-top: 15px;
    margin: 0px 40px;
    width: 120px;
    height: 120px;
}

p {
    display: inline;
    margin: 0px 120px;
}

button {
    margin-top: 40px;
}

.perdedor {
    color: red;
}

.ganador {
    color: blue;
}
</style>