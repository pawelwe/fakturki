<template>
  <aside class="main-nav">
    <router-link class="main-nav-menu-list-item-link" to="/">
      <img class="main-nav-logo" src="../assets/images/logo-owl.svg">
    </router-link>
    <h1 class="main-nav-header">{{ appName }}</h1>
    <nav class="main-nav-menu">
      <ul class="main-nav-menu-list">
        <li class="main-nav-menu-list-item" @click="loadTemplate">
          <router-link class="main-nav-menu-list-item-link" to="/new-invoice">Nowa fakturka</router-link>
        </li>
        <li class="main-nav-menu-list-item">
          <a href="#" class="main-nav-menu-list-item-link" @click="saveTemplate">Ustaw jako wzór</a>
        </li>
        <li class="main-nav-menu-list-item">
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
  import { mapActions } from 'vuex'

  export default {
    data () {
      return {
        appName: 'FAKTURKI'
      }
    },
    methods: {
      ...mapActions([
        'saveInvoiceTemplate'
      ]),
      saveTemplate (e) {
        e.preventDefault()
        this.$store.dispatch('saveInvoiceTemplate', this.$store.getters.getTemplate)
      },
      loadTemplate (e) {
        e.preventDefault()
        this.$store.dispatch('loadInvoiceTemplate')
      }
    }
  }
</script>


