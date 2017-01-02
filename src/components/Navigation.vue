<template>
  <aside class="main-nav">
    <router-link class="main-nav-menu-list-item-link" to="/">
      <img class="main-nav-logo" src="../assets/images/logo-owl.svg">
    </router-link>
    <h1 class="main-nav-header">{{ appName }}</h1>
    <nav class="main-nav-menu">
      <ul class="main-nav-menu-list">
        <li class="main-nav-menu-list-item">
          <router-link class="main-nav-menu-list-item-link" v-if="$route.path !== '/new-invoice'" to="/new-invoice">Nowa fakturka</router-link>
        </li>
        <!-- Start a new invoice -->
        <li class="main-nav-menu-list-item" @click="loadTemplate" v-if="$route.path === '/new-invoice'">
          <router-link class="main-nav-menu-list-item-link" to="/new-invoice">Nowa fakturka</router-link>
        </li>
        <li class="main-nav-menu-list-item" v-if="$route.path === '/new-invoice'">
          <a href="#" class="main-nav-menu-list-item-link" @click="saveTemplate">Zapisz jako wzór</a>
        </li>
        <li class="main-nav-menu-list-item" v-if="$route.path === '/new-invoice'">
          <a href="#" class="main-nav-menu-list-item-link">Zapisz</a>
        </li>
        <li class="main-nav-menu-list-item">
          <a href="#" class="main-nav-menu-list-item-link">Lista</a>
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
  import invoiceTemplate from '../data/invoiceTemplate'
  vex.registerPlugin(vexdialog)
  vex.defaultOptions.className = 'vex-theme-wireframe'

  export default {
    data () {
      return {
        appName: 'FAKTURKI',
        newInvoicePage: false
      }
    },
    methods: {
      saveTemplate (e) {
        e.preventDefault()
        // TODO get rid of that
        var that = this
        vex.dialog.buttons.YES.text = 'Tak'
        vex.dialog.buttons.NO.text = 'Nie'
        vex.dialog.confirm({
          message: 'Zapisać jako wzór?',
          callback: function (value) {
            if (value) {
              console.info('Template saved...')
              that.$store.dispatch('saveInvoiceTemplate', that.$store.getters.getActiveTemplate)
            }
          }
        })
      },
      loadTemplate (e) {
        e.preventDefault()
        // TODO get rid of that
        // console.info(this.$store.getters.getActiveTemplate !== this.$store.getters.getSavedTemplate)
        var that = this
        console.info(this.$route.path, that.$store.getters.getActiveTemplate !== invoiceTemplate)
//        if (this.$route.path === '/new-invoice') {
        vex.dialog.buttons.YES.text = 'Tak'
        vex.dialog.buttons.NO.text = 'Nie'
        vex.dialog.confirm({
          message: 'Nowa Fakturka?',
          callback: function (value) {
            if (value) {
              console.info('Template Loaded...')
              that.$store.dispatch('loadInvoiceTemplate')
            }
          }
        })

//        if (that.$store.getters.getActiveTemplate !== invoiceTemplate) {
//          vex.dialog.confirm({
//            message: 'Start a new Fakturka?',
//            callback: function (value) {
//              if (value) {
//                console.info('Template Loaded...')
//                that.$store.dispatch('loadInvoiceTemplate')
//              }
//            }
//          })
//        } else {
//          that.$store.dispatch('loadInvoiceTemplate')
//        }
      }
    }
  }
</script>


