<template>
  <div id='app'>
    <h1>unit testing vue with jest</h1>
    <img src="./assets/logo.png">
    <Counter :multiplier="4"/>
  </div>
</template>

<script>
import Counter from './components/Counter.vue'
export default {
  name: 'app',
  components: {
    Counter
  }
}
</script>

<style>
#app {
  font-family: Lobster, arial, helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  width: 90vw;
}

button {
  cursor: pointer;
}
</style>
