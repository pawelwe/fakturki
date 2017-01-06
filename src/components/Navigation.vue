<template>
  <aside class="main-nav">
    <router-link class="main-nav-menu-list-item-link" to="/">
      <img class="main-nav-logo" src="../assets/images/logo-owl.svg">
    </router-link>
    <h1 class="main-nav-header">{{ appName }}</h1>
    <nav class="main-nav-menu">
      <ul class="main-nav-menu-list">
        <li class="main-nav-menu-list-item" @click="resetTemplate"  v-if="$route.path === '/' || $route.path === '/lista-fakturek'">
          <router-link class="main-nav-menu-list-item-link" to="/nowa-fakturka">Nowa fakturka</router-link>
        </li>
        <li class="main-nav-menu-list-item" @click="loadTemplate" v-if="$route.path === '/nowa-fakturka' || $route.path === '/fakturka-' + $route.params.id">
          <router-link class="main-nav-menu-list-item-link" to="/nowa-fakturka">Nowa fakturka</router-link>
        </li>
        <li class="main-nav-menu-list-item" v-if="$route.path === '/nowa-fakturka' || $route.path === '/fakturka-' + $route.params.id">
          <a href="#" class="main-nav-menu-list-item-link" @click="saveTemplate">Zapisz jako wzór</a>
        </li>
        <li class="main-nav-menu-list-item" v-if="$route.path === '/nowa-fakturka' || $route.path === '/fakturka-' + $route.params.id">
          <a href="#" class="main-nav-menu-list-item-link" @click="saveInvoice($route.params.id - 1, $event)">Zapisz</a>
        </li>
        <li class="main-nav-menu-list-item" @click="resetTemplate">
          <router-link class="main-nav-menu-list-item-link" to="/lista-fakturek">Lista</router-link>
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
  vex.registerPlugin(vexdialog)
  vex.defaultOptions.className = 'vex-theme-wireframe'

  export default {
    data () {
      return {
        appName: 'FAKTURKI',
        id: this.$route.params.id
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
              that.$store.dispatch('saveInvoiceTemplate', that.$store.getters.getActiveTemplate)
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
              that.$store.dispatch('loadInvoiceTemplate')
            }
          }
        })
      },
      resetTemplate (e) {
        e.preventDefault()
        this.$store.dispatch('loadInvoiceTemplate')
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
            }
          }
        })
      }
    }
  }
</script>
