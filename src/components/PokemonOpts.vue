<template >
    <div class="options-container">
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    </div>
</template>
<script>
export default {

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

.options-container {
    justify-content: center;
    display: flex;
}
</style>