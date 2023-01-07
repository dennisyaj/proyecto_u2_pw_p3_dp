<template >
    <h1>Pregunta:</h1>
    <img v-bind:src="img" v-if="img" alt="No se puede visualizar">
    <div class="fondo-dark"></div>
    <div class="container">
        <input type="text" placeholder="Hazme una pregunta" v-model="question">
        <p>Recuerda terminar con un signo de interrogación (?)</p>

        <div>
            <h2> {{ question }}</h2>
            <h1>{{ respuesta }}</h1>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            question: null,
            respuesta: null,
            img: null
        }
    },
    watch: {
        question(value, oldValue) {
            console.log(value)
            console.log(oldValue)
            if (!value.includes('?')) return;

            //consumo api
            console.log("Vamos a consumir el api")
            this.consumirAPI()

        }
    },
    methods: {
        async consumirAPI() {
            this.respuesta= 'Pensando.'
            this.respuesta= 'Pensando..'
            const { answer, forced, image } = await fetch('https://yesno.wtf/api').then(r => r.json())
            this.respuesta= 'Pensando...'
            console.log(answer);
            console.log(forced);
            console.log(image);
            this.respuesta = answer
            this.img = image
            console.log(this.img);
        }
    }
}
</script>

<style>
img,
.fondo-dark {
    height: 100vh;
    width: 100vw;
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

p {
    color: white;
    font-size: 20px;
    margin-top: 10px;
}

h1,
h2 {
    color: white;

}

h2 {
    margin-top: 150px;
}

/* el z-index para darle un identificador 
al elemetno que lo sacamos*/
.container {
    position: relative;
    z-index: 99;
}
</style>
