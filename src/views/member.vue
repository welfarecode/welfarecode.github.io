<template>
    <div id="app">
        <button @click="show = ! show">DISAPPEAR</button>
        <transition name="fade">
            <img v-if="show" src="https://imgur.com/eEcajIt.png" />
        </transition>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show: true,
            }
        },
    }
</script>

<style>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>