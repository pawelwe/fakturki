<template>
  <div id="app" class="container" v-cloak>
    <navigation></navigation>
    <new-invoice></new-invoice>
  </div>
</template>

<script>
  import navigation from './components/Navigation.vue'
  import newInvoice from './components/new-invoice/NewInvoice.vue'

  export default {
    name: 'app',
    components: {
      navigation,
      newInvoice
    },
    created () {
      this.$store.dispatch('loadTemplate')
    }
  }
</script>

<style lang="scss">
  @import './scss/_custom.scss';
  @import 'scss/global/_fonts.scss';
</style>
