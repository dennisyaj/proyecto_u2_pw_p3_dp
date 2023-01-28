<template >
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
        <button v-on:click="limpiar()">Reiniciar</button>
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
            mensaje: null
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
            console.log("prueba evento");
            console.log(pokemonSeleccionadoHijo)
            this.mostrarPokemon = true
            const idSeleccionado = pokemonSeleccionadoHijo.idPokemon
            console.log(this.pokemonCorrecto.id);
            console.log(idSeleccionado);
            if (idSeleccionado == this.pokemonCorrecto.id) {
                console.log("Correcto");
                this.mensaje = "Correcto"
            } else {
                this.mensaje = "Incorrecto"
                console.log("Incorrecto");
            }

        },
        limpiar() {
            this.cargaPokemonInicial()
            this.mensaje = null

        }
    },

}
</script>
<style >

</style>