<template >
    <div v-if="!mensajeGeneral" class="container-datos">
        <h3>Numero de Juego: {{ numJuego }}</h3>
        <h1>Puntaje: {{ puntaje }}</h1>
        <h3>Numero de Intento: {{ intento }}</h3>
    </div>

    <h1 v-if="!pokemonCorrecto">Espere por favor....</h1>
    <div v-else>
        <h1>¿Cual es el Pokemon?</h1>
        <PokemonImg :idPokemon="pokemonCorrecto.id" :showPokemon="mostrarPokemon"></PokemonImg>
        <!-- $event es el segundo dato que se envia  ctrl k + u-->
        <PokemonOpts v-if="!mensaje" :pokemons="pokemonArr" v-on:selectionPokemon="validarRespuesta($event)">
        </PokemonOpts>
    </div>
    <div v-if="mensaje">
        <h1>{{ mensaje }}</h1>
        <button v-on:click="limpiar()">Siguiente</button>
    </div>
    <div v-if="mensajeGeneral" class="container-resultado">
        <h1 v-bind:id="styleMensaje">{{ mensajeGeneral }}</h1>
        <h1>Obtuviste {{ puntaje }} puntos</h1>
        <button v-on:click="comenzarNuevo">Juego Nuevo</button>
    </div>
</template>
<script>
import PokemonImg from '../components/PokemonImg.vue'
import PokemonOpts from '../components/PokemonOpts.vue'
import obtenerPokemonsFachada from '../js/obtenerPokemons.js'
export default {
    data() {
        return {
            pokemonArr: [],
            pokemonCorrecto: null,
            mostrarPokemon: false,
            mensaje: null,
            puntaje: 0,
            intento: 0,
            numJuego: 1,
            mensajeGeneral: null,
            styleMensaje: null
        }
    },
    components: {
        PokemonImg,
        PokemonOpts
    },
    mounted() {
        this.cargaPokemonInicial()
    },
    methods: {
        async cargaPokemonInicial() {
            const vect = await obtenerPokemonsFachada()
            this.pokemonArr = vect
            const numeroAl = Math.floor(Math.random() * 4)
            this.pokemonCorrecto = this.pokemonArr[numeroAl]
        },
        validarRespuesta(pokemonSeleccionadoHijo) {
            this.intento++
            const idSeleccionado = pokemonSeleccionadoHijo.idPokemon
            console.log(idSeleccionado);

            if (idSeleccionado == this.pokemonCorrecto.id) {
                if (this.intento == 1) {
                    this.puntaje += 5
                } else {
                    this.puntaje += 2
                }
                this.mostrarPokemon = true
                this.intento = 0
                this.mensaje = "Correcto"

            } else {
                if (this.intento < 2) {
                    return
                }
                this.mostrarPokemon = true
                this.mensaje = "Incorrecto"
            }
            this.validarPuntuacion()
            this.intento = 0
        },
        limpiar() {
            this.numJuego++
            this.validarPuntuacion()
            if (!(this.numJuego > 3 && this.puntaje < 10)) {
                this.cargaPokemonInicial()
            }
            this.mensaje = null
            this.mostrarPokemon = false
        },
        validarPuntuacion() {
            if (this.puntaje >= 10 || (this.numJuego >= 3 && this.intento == 2) || (this.numJuego > 3 && this.puntaje < 10)) {
                if (this.puntaje >= 10) {
                    this.styleMensaje = "ganador"
                    this.mensajeGeneral = "Felicidades ganaste."
                    this.pokemonCorrecto = null
                    this.mensaje = null
                    return
                } else {
                    this.styleMensaje = "perdedor"
                    this.mensajeGeneral = "Perdiste."
                    this.pokemonCorrecto = null
                    this.mensaje = null
                    return
                }
            }

        },
        comenzarNuevo() {
            this.cargaPokemonInicial()
            this.mostrarPokemon = false
            this.mensaje = null
            this.puntaje = 0
            this.intento = 0
            this.numJuego = 1
            this.mensajeGeneral = null
        }
    },

}
</script>
<style >
.container-datos {
    display: inline-flex;
    background-color: rgb(165, 236, 165);
    color: white;
}

h3 {
    margin-inline: 10vw;
}


#perdedor {
    color: red;
}

#ganador {
    color: rgb(18, 245, 18);
}

.container-resultado,
.container-resultado button {
    margin-top: 30px;
}
</style>