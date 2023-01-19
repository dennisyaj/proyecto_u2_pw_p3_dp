<template >

    <div id="contenedor-juego" v-if="banderajuego">
        <p>Puntaje:{{ puntaje }}</p>
        <p>Intento:{{ intento }}</p>
    </div>
    <div>
        <img src="../img/megro.png" alt="n">
        <img src="../img/megro.png" alt="n">
        <img src="../img/megro.png" alt="">
    </div>
    <div class="container-texto">
        <p>{{ pokemonTexto1 }}</p>
        <p>{{ pokemonTexto2 }}</p>
        <p>{{ pokemonTexto3 }}</p>
    </div>
    <button v-on:click="jugar()">Jugar</button>
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
            pokemonTexto3: 'XXXXXXXXXXXXXXXX'
        }
    },
    methods: {
        jugar() {

        },
        obtenerAleatorio(max) {
            return Math.floor(Math.random() * max) + 1;
        },
        async consumirAPIPokemon() {
            
        },
        definirPokemon() {
            const vectorPökemons = [2, 6, 80, 15];
            return vectorPökemons;
        },
        construirPokemon() {
            const vector =this.definirPokemon()
            const vectorPokemons =[]
        },
        contruirJuego() {

        }

    }
}
</script>
<style >
img {
    margin-top: 15px;
    margin: 0px 50px;
}

p {
    display: inline;
    margin: 0px 50px;
}

button {
    margin-top: 40px;
}
</style>