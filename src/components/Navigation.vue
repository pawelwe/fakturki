<template>
  <aside class="main-nav">
    <img class="main-nav-logo" src="../assets/images/logo-owl.svg">
    <h1 class="main-nav-header">{{ appName }}</h1>
    <nav class="main-nav-menu">
      <ul class="main-nav-menu-list">
        <li class="main-nav-menu-list-item">
          <a href="#" class="main-nav-menu-list-item-link">Nowa fakturka</a>
        </li>
        <li class="main-nav-menu-list-item">
          <a href="#" class="main-nav-menu-list-item-link">Zapisz</a>
        </li>
        <li class="main-nav-menu-list-item">
          <a href="#" class="main-nav-menu-list-item-link">Ustaw jako wzór</a>
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
  export default {
    data () {
      return {
        appName: 'FAKTURKI'
      }
    }
  }
</script>

<style lang="scss">
  @import '../scss/_custom.scss';
</style>


