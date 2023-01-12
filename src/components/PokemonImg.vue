<template >
    <div class="pokemon-container">
        <img v-if="true" class="ocultar-pokemon"
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
            alt="No se puede renderizar">
        <img v-if="true"
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
            alt="No se puede renderizar">
    </div>
</template>
<script>
export default {
    data() {
        return {
            idPokemon: 1,
            mostrarPokemon: true,
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