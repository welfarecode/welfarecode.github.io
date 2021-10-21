<template>
    <div id="app">
        <div class="center">
            <button type="button" v-animate-css.click="animationObject" class="btn1">HELLO</button>
        </div>
    </div>
</template>

<script>
    export default {
        components: {

        },
        data() {
            return {
                animationObject: {
                    classes: 'fadeIn',
                    duration: 3000, 
                }
            }
        }
    }
</script>

<style scoped>
    .btn1 {
        width: 300px;
        height: 100px;
        color: white;
        background-color: black;
        font-size: 30px;
    }
</style>