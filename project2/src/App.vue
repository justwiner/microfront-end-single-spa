<template>
  <div id="vue">
    <img alt="Vue logo" src="http://localhost:8237/img/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import logo from './assets/logo.png'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#vue {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
