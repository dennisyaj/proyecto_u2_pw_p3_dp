<template>
    <h1>Mi primer componente!!!</h1>
    <h2>Info estudiante</h2>
    <p>{{ numero }} <sup>2</sup> = {{ obtenerCuadradoComputado }}</p>
    <!-- <p>{{ numero }} <sup>2</sup> = {{ obtenerCuadradoComputado }}</p>
    <p>{{ numero }} <sup>2</sup> = {{ obtenerCuadradoComputado }}</p>
    <p>{{ numero }} <sup>2</sup> = {{ obtenerCuadradoComputado }}</p>
    <p>{{ numero }} <sup>2</sup> = {{ obtenerCuadradoComputado }}</p>
    <p>{{ numero }} <sup>2</sup> = {{ obtenerCuadradoComputado }}</p> -->
    <div>
        <button v-on:click="decrementar">-1</button>
        <button v-on:click="incrementar">+1</button>
    </div>
</template>

<script>
export default {
    props:['titulo'],
    
    name: "Patito",
    data() {
        return {
            numero: 2
        }
    },
    methods: {
        obtenerCuadrado() {
            //poner el this aqui en el js
            console.log("se calcula el cuadrado")
            return this.numero * this.numero
        },
        incrementar() {
            this.numero++
        },
        decrementar() {
            this.numero--
        }
    },
    //estas propiedades se guardan en meria cache
    computed: {
        obtenerCuadradoComputado() {
            console.log("se calcula el cuadrado computado")
            return this.numero * this.numero
        }
    }
}
</script>

<style>

button {
    background-color: #64B687;
    border-radius: 5px;
    border: 1px solid white;
    margin: 0px 5px;
    cursor: pointer;
    padding: 5px 20px;
}

button:hover {
    background-color: #368056;
}
</style>