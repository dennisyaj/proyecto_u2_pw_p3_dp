<template >
    <h1 v-if="!pokemonCorrecto">Espere por favor....</h1>
    <div v-if="pokemonCorrecto">
        <h1>Cual es el Pokemon?</h1>
        <PokemonImg :idPokemon="pokemonCorrecto.id" :showPokemon="mostrarPokemon"></PokemonImg>
        <PokemonOpts :pokemons="pokemonArr"></PokemonOpts>
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
            mostrarPokemon: false
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
            console.log("mounted")
            const vect = await obtenerPokemonsFachada()
            console.log("desde pagina principal")
            console.log(vect)

            this.pokemonArr = vect
            const numeroAl = Math.floor(Math.random() * 4)
            console.log(numeroAl)
            this.pokemonCorrecto = this.pokemonArr[numeroAl]

        }
    },
}
</script>
<style >

</style>