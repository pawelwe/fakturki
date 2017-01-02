<template>
    <main class="invoice">
      <!-- COMPANY DATA SECTION -->
      <header>
        <invoice-from :invoiceTemplate="invoiceTemplate"></invoice-from>
        <invoice-to :invoiceTemplate="invoiceTemplate"></invoice-to>
      </header>

      <!-- DATA SECTION -->
      <section class="invoice-data">

        <!-- INVOICE HEADER -->
        <invoice-header :invoiceTemplate="invoiceTemplate"></invoice-header>

        <!-- INVOICE DATE -->
        <invoice-date :invoiceTemplate="invoiceTemplate"></invoice-date>

        <!-- CALC SECTION -->
        <div class="invoice-calc">
          <invoice-header-row :invoiceTemplate="invoiceTemplate"></invoice-header-row>
          <!--<transition-group appear name="list" tag="ul" mode="out-in">-->
          <ul>
            <invoice-row v-for="(service, index, key) in invoiceTemplate.services" :service="service" :index="index" :key="service" v-on:removeRow="removeInvoiceRow(index)"></invoice-row>
          </ul>
          <!--</transition-group>-->
          <a href="#" class="invoice-calc-add-row-btn" @click="addInvoiceRow">+</a>
        </div>

        <!-- CALC SUMMARY SECTION -->
        <calc-summary :invoiceTemplate="invoiceTemplate"></calc-summary>

        <!-- MAIN SUMMARY SECTION -->
        <main-summary :invoiceTemplate="invoiceTemplate"></main-summary>

      </section>

      <!-- FOOTER PLACEHOLDER (FLEX) -->
      <footer class="placeholder"></footer>
    </main>
</template>

<script>
  import invoiceFrom from './NewInvoiceFrom'
  import invoiceTo from './NewInvoiceTo'
  import invoiceHeader from './NewInvoiceHeader'
  import invoiceDate from './NewInvoiceDate'
  import invoiceHeaderRow from './NewInvoiceHeaderRow'
  import invoiceRow from './NewInvoiceRow'
  import calcSummary from './NewInvoiceCalcSummary'
  import mainSummary from './NewInvoiceMainSummary'
  import { mapActions } from 'vuex'

  export default {
    components: {
      invoiceFrom,
      invoiceTo,
      invoiceHeader,
      invoiceDate,
      invoiceHeaderRow,
      invoiceRow,
      calcSummary,
      mainSummary
    },
    computed: {
      invoiceTemplate () {
        return this.$store.getters.getTemplate
      }
    },
    methods: {
      ...mapActions([
        'addInvoiceRow',
        'removeInvoiceRow'
      ]),
      addInvoiceRow (e) {
        e.preventDefault()
        this.$store.dispatch('addInvoiceRow', {
          id: this.$store.getters.servicesLength + 1,
          name: this.invoiceTemplate.services[this.$store.getters.servicesLength - 1].name,
          ammount: this.invoiceTemplate.services[this.$store.getters.servicesLength - 1].ammount,
          priceNetto: this.invoiceTemplate.services[this.$store.getters.servicesLength - 1].priceNetto,
          vat: this.invoiceTemplate.services[this.$store.getters.servicesLength - 1].vat
        })
      },
      removeInvoiceRow (index) {
        this.$store.getters.servicesLength > 1 ? this.$store.dispatch('removeInvoiceRow', index) : false
      }
    }
  }
</script>


