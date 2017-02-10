<template>
  <div id="app" class="container" v-cloak>
    <navigation v-on:resetTemplate="fetchInvoiceTemplate()" v-if="fireBaseVerified"></navigation>
    <transition appear name="slide-fade" mode="out-in">
      <router-view></router-view>
    </transition>

  </div>
</template>

<script>
  import navigation from './components/Navigation.vue'
  import newInvoice from './components/NewInvoice.vue'
  import staticInvoiceTemplate from './data/invoiceTemplate'

  export default {
    name: 'app',
    components: {
      navigation,
      newInvoice
    },
    computed: {
      fireBaseVerified () {
        return this.$store.getters.fireBaseVerified
      },
      firebaseUrl () {
        return this.$store.getters.fireBaseUrl
      }
    },
    updated () {
      if (this.fireBaseVerified !== false) {
        this.fetchInvoicesList()
        this.fetchInvoiceTemplate()
      }
    },
    methods: {
      fetchInvoicesList () {
        this.$http.get(this.firebaseUrl + '/invoices-list.json')
          .then(response => {
            return response.json()
          }, (error) => {
            console.log(error)
          })
          .then(data => {
            this.$store.dispatch('setInvoicesList', data !== null ? data : [])
          }, (error) => { console.log(error) })
      },
      fetchInvoiceTemplate () {
        this.$http.get(this.firebaseUrl + '/invoice-template.json')
          .then(response => {
            return response.json()
          }, (error) => {
            console.log(error)
          })
          .then(data => {
            if (data !== null) {
              this.$store.dispatch('setInvoiceTemplate', data)
            } else {
              this.$store.dispatch('setInvoiceTemplate', staticInvoiceTemplate)
            }
          }, (error) => {
            console.log(error)
          })
      }
    }
  }
</script>

<style lang="scss">
  @import './scss/_custom.scss';
  @import 'scss/global/_fonts.scss';
</style>
