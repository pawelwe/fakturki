<template>
  <div id="app">
    <header class="container">
      <img src="./assets/logo.png">
    </header>
    <main class="container">
      <comp-1></comp-1>
      <comp-1></comp-1>
      <comp-1></comp-1>
      <comp-1></comp-1>
    </main>
    <footer class="container">
      Copyright
    </footer>


  </div>

</template>

<script>
  import comp1 from './Components/Comp1.vue'

  export default {
    name: 'app',
    components: {
      'comp-1': comp1
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style lang="scss">
  @import './scss/_custom.scss';
</style>
