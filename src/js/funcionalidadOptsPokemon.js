function obtenerAleatorio(max) {
    return Math.floor(Math.random() * max) + 1;
}

const consumirAPI = (idPokemon){

}

function crearArregloPokemon() {
    const arreglo = []
    arreglo[0] = obtenerAleatorio(600)
    arreglo[1] = obtenerAleatorio(600)
    arreglo[2] = obtenerAleatorio(600)
    arreglo[3] = obtenerAleatorio(600)
    return arreglo;
} 