<template>
    <h1>Mi primer componente!!!</h1>
    <h2>{{ valorTitulo }}</h2>
    <p>{{ numero }} <sup>2</sup> = {{ obtenerCuadradoComputado }}</p>
    <!-- <p>{{ numero }} <sup>2</sup> = {{ obtenerCuadradoComputado }}</p>
    <p>{{ numero }} <sup>2</sup> = {{ obtenerCuadradoComputado }}</p>
    <p>{{ numero }} <sup>2</sup> = {{ obtenerCuadradoComputado }}</p>
    <p>{{ numero }} <sup>2</sup> = {{ obtenerCuadradoComputado }}</p>
    <p>{{ numero }} <sup>2</sup> = {{ obtenerCuadradoComputado }}</p> -->
    <div>
        <button v-on:click="decrementar">- 1</button>
        <button v-on:click="incrementar">+ 1</button>
    </div>
</template>

<script>
export default {
    //options API
    // 1.- forma basica
    //props: ['titulo', 'inicio'],

    //2.- Forma correcta
    /*props: {
        titulo: String,
        inicio: Number
    },*/
    //3.- forma avanzada
    props: {
        titulo: String,
        inicio: {
            type: Number,
            required: false,
            default: 67,
            validator(value) {
                return value > 0
            }
        }
    },
    name: "Patito",
    data() {
        return {
            numero: this.inicio
        }
    },
    methods: {
        obtenerCuadrado() {
            //poner el this aqui en el js
            console.log("se calcula el cuadrado")
            return this.numero * this.numero
        },
        incrementar() {
            //this.numero++
            this.numero = this.numero + 1

        },
        decrementar() {
            //this.numero--
            this.numero = this.numero - 1
        }
    },
    //estas propiedades se guardan en meria cache
    computed: {
        obtenerCuadradoComputado() {
            console.log("Se calcula el cuadrado computado")
            return this.numero * this.numero
        },
        valorTitulo() {
            return this.titulo || 'Valor por defecto...'
        }
    }
}
</script>

<style>
button {
    background-color: #44bc84;
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