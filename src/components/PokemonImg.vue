<template >
    <div class="pokemon-container">
        <img v-if="!showPokemon" class="ocultar-pokemon" v-bind:src="obtenerImg" alt="No se puede renderizar">
        <img v-if="true" v-bind:src="obtenerImg" alt="No se puede renderizar">

    </div>
</template>
<script>

export default {
    data() {
        return {
            
        }
    },
    props: {
        idPokemon: {
            type: Number,
            required: true,
            default: 0
        },
        showPokemon: {
            type: Boolean,
            required: true,
            default: false
        }
    },
    computed: {
        /* se declara como metodo pero se usa como atributo**/
        obtenerImg() {
            return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" + this.idPokemon + ".svg"
        }
    }
}
</script>
<style >
.ocultar-pokemon {
    filter: brightness(0);
    position: absolute;
}

img {

    height: 200px;
    /**right: 32%;*/
    -webkit-user-drag: none;
}
</style>