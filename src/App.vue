<template>
  <div id="app" class="container container_main" v-cloak>
    <transition appear name="slide-fade" mode="out-in">
      <navigation v-on:resetTemplate="fetchInvoiceTemplate()" v-on:fetchInvoicesList="fetchInvoicesList()" v-on:saveTemplate="sendTemplate()" v-on:saveInvoicesList="sendInvoicesList()" v-if="fireBaseVerified"></navigation>
    </transition>
    <transition appear name="slide-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import navigation from './components/Navigation.vue'
  import newInvoice from './components/NewInvoice.vue'
  import staticInvoiceTemplate from './data/invoiceTemplate'
  import vex from 'vex-js/src/vex'
  import vexdialog from 'vex-dialog/src/vex.dialog'
  vex.defaultOptions.className = 'vex-theme-wireframe'
  vex.registerPlugin(vexdialog)

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
    created: () => {
      console.info('Start Fakturki...')
    },
    methods: {
      fetchInvoicesList () {
        this.$http.get(`${this.firebaseUrl}/invoices-list.json`)
          .then(response => {
            return response.json()
          }, (error) => {
            console.log(error)
            vex.dialog.alert('Błąd przy wczytywaniu danych...')
          })
          .then(data => {
            this.$store.dispatch('setInvoicesList', data !== null ? data : [])
          }, (error) => {
            console.log(error)
            vex.dialog.alert('Błąd przy wczytywaniu danych...')
          })
      },
      fetchInvoiceTemplate () {
        this.$http.get(`${this.firebaseUrl}/invoice-template.json`)
          .then(response => {
            return response.json()
          }, (error) => {
            console.log(error)
            vex.dialog.alert('Błąd przy wczytywaniu danych...')
          })
          .then(data => {
            if (data !== null) {
              this.$store.dispatch('setInvoiceTemplate', data)
            } else {
              this.$store.dispatch('setInvoiceTemplate', staticInvoiceTemplate)
            }
          }, (error) => {
            console.log(error)
            vex.dialog.alert('Błąd przy wczytywaniu danych...')
          })
      },
      sendTemplate () {
        this.$http.put(`${this.firebaseUrl}/invoice-template.json`, this.$store.getters.activeInvoice)
          .then(response => {
            console.log(response)
          }, error => {
            console.log(error)
            vex.dialog.alert('Błąd przy wczytywaniu danych...')
          })
      },
      sendInvoicesList () {
        this.$http.put(`${this.firebaseUrl}/invoices-list.json`, this.$store.getters.invoicesList)
          .then(response => {
            console.log(response)
          }, error => {
            console.log(error)
            vex.dialog.alert('Błąd przy wczytywaniu danych...')
          })
      }
    }
  }
</script>

<style lang="scss">
  @import './scss/_custom.scss';
  @import 'scss/global/_fonts.scss';
</style>
