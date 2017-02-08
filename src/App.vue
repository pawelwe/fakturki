<template>
  <div id="app" class="container" v-cloak>
    <navigation></navigation>
    <transition appear name="slide-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import navigation from './components/Navigation.vue'
  import newInvoice from './components/NewInvoice.vue'

  export default {
    name: 'app',
    components: {
      navigation,
      newInvoice
    },
    created: function () {
      this.fetchInvoicesList()
    },
    methods: {
      fetchInvoicesList () {
        this.$http.get('')
          .then(response => {
            return response.json()
          })
          .then(data => console.log(data))
      }
    }
  }
</script>

<style lang="scss">
  @import './scss/_custom.scss';
  @import 'scss/global/_fonts.scss';
</style>
