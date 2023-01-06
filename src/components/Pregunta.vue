<template >
    <h1>Pregunta:</h1>
    <img src="https://via.placeholder.com/250" alt="No se puede visualizar">
    <div class="fondo-dark"></div>
    <div class="container"></div>
    <div>
        <input type="text" placeholder="Hazme una pregunta">
        <p>Recuerda terminar con un signo de interrogación (?)</p>
    </div>

    <div >
        <h2> Voy a pasar el año?</h2>
        <h1>Si, No, ...</h1>
    </div>
</template>

<script>
export default {
    name: "Pregunta"
}
</script>
<style>
img {
    height: 100vh;
    width: 100vw;
}

input {
    width: 250px;
    padding: 15px 10px;
    border-radius: 7px;
    border: none;
}
p{
    color: red;
    font-size: 20px;
    margin-top: 10px;
}
h1,h2{
color: red;

}
h2{
   margin-top: 150px; 
}
</style>
