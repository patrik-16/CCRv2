<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Header from "./components/Header.vue";
// import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <Header/>

  <main>
    <TheWelcome/>
    <HelloWorld/>

  </main>
</template>

<style>
@import './assets/base.css';

</style>
