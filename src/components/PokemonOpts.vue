<template >
    <div class="options-container">
        <ul>
            <li v-for="poke in pokemons" :key="poke.id"
                @click="$emit('selectionPokemon', { idPokemon: poke.id, inventado: 20, nombre:poke.nombre })">{{ poke.nombre }}</li>
        </ul>
    </div>
</template>
<script>
export default {
    props: {
        pokemons: {
            type: Array,
            required: true
        }
    }, methods: {
        imprimir(id) {
            console.log(id)
        }
    },
}
</script>
<style >
ul {
    list-style-type: none;
}

li {
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    width: 250px;
    margin-top: 10px;
    cursor: pointer;
}

li:hover {
    background-color: #368056;
}

.options-container {
    justify-content: center;
    display: flex;
}
</style>