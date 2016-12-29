<template>
  <div id="app" class="container" v-cloak>
    <navigation></navigation>
    <invoice></invoice>
  </div>
</template>

<script>
  import navigation from './components/Navigation.vue'
  import invoice from './components/Invoice.vue'

  export default {
    name: 'app',
    components: {
      navigation,
      invoice
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
  @import 'scss/global/_fonts.scss';
</style>
