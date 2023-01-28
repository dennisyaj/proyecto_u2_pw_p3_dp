const obtenerPokemons = async () => {
    console.log("calculo de aleatorio")
    const vect = obtenerVectorNumerico()
    const vectNom = await obtenerVectorNombres(vect)
    console.table(vectNom)
    return vectNom
}

const obtenerVectorNumerico = () => {
    const arreglo = [obtenerAleatorio(1, 600), obtenerAleatorio(1, 600), obtenerAleatorio(1, 600), obtenerAleatorio(1, 600)]
    console.log(arreglo)
    return arreglo
}

function obtenerAleatorio(min, max) {
    max++
    return Math.floor(Math.random() * (max - min) + min)
}

const obtenerVectorNombres = async ([p1, p2, p3, p4] = []) => {
    console.log("transformando a nombres")
    console.log(p1)
    console.log(p2)
    console.log(p3)
    console.log(p4)
    const nombrep1 = await obtenerNombreApi(p1)
    const nombrep2 = await obtenerNombreApi(p2)
    const nombrep3 = await obtenerNombreApi(p3)
    const nombrep4 = await obtenerNombreApi(p4)
    console.log(nombrep1)
    const vectNombres = [
        {
            nombre: nombrep1,
            id: p1
        },
        {
            nombre: nombrep2,
            id: p2
        },
        {
            nombre: nombrep3,
            id: p3
        },
        {
            nombre: nombrep4,
            id: p4
        }]
    return vectNombres
}

const obtenerNombreApi = async (id) => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r => r.json())
    console.log(data.name)
    return data.name
}

const obtenerPokemonsFachada = async () => {
    return await obtenerPokemons()
}

export default obtenerPokemonsFachada