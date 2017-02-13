<template>
  <aside class="main-nav">
    <router-link class="main-nav-menu-list-item-link" to="/">
      <img class="main-nav-logo" src="../assets/images/logo-owl.svg">
    </router-link>
    <h1 class="main-nav-header">{{ appName }}</h1>
    <nav class="main-nav-menu">
      <ul class="main-nav-menu-list">
        <li class="main-nav-menu-list-item" @click="resetTemplate"  key="1"  v-if="$route.path === '/' || $route.path === '/lista-fakturek'">
          <router-link class="main-nav-menu-list-item-link" to="/nowa-fakturka">Nowa fakturka</router-link>
        </li>
        <li class="main-nav-menu-list-item" @click="loadTemplate" key="2" v-if="$route.path === '/nowa-fakturka' || $route.path === '/fakturka-' + $route.params.id">
          <router-link class="main-nav-menu-list-item-link" to="/nowa-fakturka">Nowa fakturka</router-link>
        </li>
        <transition-group appear name="list" mode="out-in">
          <li class="main-nav-menu-list-item" key="3" v-if="$route.path === '/nowa-fakturka' || $route.path === '/fakturka-' + $route.params.id">
            <a href="#" class="main-nav-menu-list-item-link" @click="saveTemplate">Zapisz jako wzór</a>
          </li>
          <li class="main-nav-menu-list-item" key="4" v-if="$route.path === '/nowa-fakturka' || $route.path === '/fakturka-' + $route.params.id">
            <a href="#" class="main-nav-menu-list-item-link" @click="saveInvoice($route.params.id - 1, $event)">Zapisz</a>
          </li>
        </transition-group>
        <li class="main-nav-menu-list-item" key="5" @click="loadInvoices">
          <router-link class="main-nav-menu-list-item-link" to="/lista-fakturek">Lista</router-link>
        </li>
        <li class="main-nav-menu-list-item" key="6">
          <a href="#" @click="clearLocalStorage" class="main-nav-menu-list-item-link">Wyczyść dane</a>
        </li>

      </ul>
    </nav>
    <footer class="main-nav-footer">
      Copyright Sopi
      <span class="u-violet">&</span>
      Pablo
    </footer>
  </aside>
</template>

<script>
  import vex from 'vex-js/src/vex'
  import vexdialog from 'vex-dialog/src/vex.dialog'

  export default {
    data () {
      return {
        appName: 'FAKTURKI',
        id: this.$route.params.id
      }
    },
    computed: {
      firebaseUrl () {
        return this.$store.getters.fireBaseUrl
      }
    },
    methods: {
      saveTemplate (e) {
        e.preventDefault()
        var that = this
        vex.dialog.buttons.YES.text = 'Tak'
        vex.dialog.buttons.NO.text = 'Nie'
        vex.dialog.confirm({
          message: 'Zapisać jako wzór?',
          callback: function (value) {
            if (value) {
              that.$store.dispatch('saveInvoiceTemplate', that.$store.getters.activeInvoice)
              that.$emit('saveTemplate')
            }
          }
        })
      },
      loadTemplate (e) {
        e.preventDefault()
        var that = this
        vex.dialog.buttons.YES.text = 'Tak'
        vex.dialog.buttons.NO.text = 'Nie'
        vex.dialog.confirm({
          message: 'Nowa Fakturka?',
          callback: function (value) {
            if (value) {
              e.preventDefault()
              that.$emit('resetTemplate')
            }
          }
        })
      },
      resetTemplate (e) {
        e.preventDefault()
        this.$emit('resetTemplate')
      },
      loadInvoices (e) {
        e.preventDefault()
        this.$emit('fetchInvoicesList')
      },
      saveInvoice (invoiceId, e) {
        e.preventDefault()
        var that = this
        vex.dialog.buttons.YES.text = 'Tak'
        vex.dialog.buttons.NO.text = 'Nie'
        vex.dialog.confirm({
          message: 'Zapisać fakturkę?',
          callback: function (value) {
            if (value) {
              that.$store.dispatch('saveInvoice', invoiceId)
              that.$emit('saveInvoicesList')
            }
          }
        })
      },
      clearLocalStorage (e) {
        e.preventDefault()
        var that = this
        vex.dialog.buttons.YES.text = 'Tak'
        vex.dialog.buttons.NO.text = 'Nie'
        vex.dialog.confirm({
          message: 'Wyczyścić dane lokalne?',
          callback: function (value) {
            if (value) {
              that.$store.dispatch('checkFirebaseConnection', false)
              window.localStorage.removeItem('vuex')
              that.$router.push('/')
            }
          }
        })
      }

    }
  }
</script>
