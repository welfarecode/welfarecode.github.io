<template>
  <div id="app">
    <Navbar />
    <div id="content">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
    <Footer />
  </div>
</template>
<script>  
  import Navbar from './components/layout/Header';
  import Footer from './components/layout/footer';

  export default {
    name: "App",
    components: {
      Navbar,
      Footer,
    },
    data() {
      return {
      }
    },
    methods: {
      
    }
  };
</script>
<style>
  .fade-enter,
  .fade-leave {
    opacity: 0;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }
</style>
