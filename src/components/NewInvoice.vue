<template>
    <form class="invoice">
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
        <section class="invoice-calc">
          <invoice-header-row :invoiceTemplate="invoiceTemplate"></invoice-header-row>
          <!--{{ serviceRows }}-->
          <transition-group name="list" tag="ul" mode="out-in">
            <invoice-row v-for="(service, index) in serviceRows" :service="service" :key="service.id" :index="index" v-on:removeRow="removeInvoiceRow(index)"></invoice-row>
          </transition-group>
          <a href="#" class="invoice-calc-add-row-btn" @click="addInvoiceRow">+</a>
        </section>

        <!-- CALC SUMMARY SECTION -->
        <calc-summary :invoiceTemplate="invoiceTemplate"></calc-summary>

        <!-- MAIN SUMMARY SECTION -->
        <main-summary :invoiceTemplate="invoiceTemplate"></main-summary>

      </section>

      <!-- FOOTER PLACEHOLDER (FLEX) -->
      <footer class="placeholder"></footer>
    </form>
</template>

<script>
  import invoiceFrom from './new-invoice/NewInvoiceFrom'
  import invoiceTo from './new-invoice/NewInvoiceTo'
  import invoiceHeader from './new-invoice/NewInvoiceHeader'
  import invoiceDate from './new-invoice/NewInvoiceDate'
  import invoiceHeaderRow from './new-invoice/NewInvoiceHeaderRow'
  import invoiceRow from './new-invoice/NewInvoiceRow'
  import calcSummary from './new-invoice/NewInvoiceCalcSummary'
  import mainSummary from './new-invoice/NewInvoiceMainSummary'

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
        return this.$store.getters.activeInvoice
      },
      serviceRows () {
        return this.$store.getters.activeInvoice.services
      }
    },
    methods: {
      addInvoiceRow (e) {
        e.preventDefault()
        this.serviceRows.push({
          id: this.$store.getters.servicesLength + 1,
          name: this.invoiceTemplate.services[this.$store.getters.servicesLength - 1].name,
          amount: this.invoiceTemplate.services[this.$store.getters.servicesLength - 1].amount,
          priceNetto: this.invoiceTemplate.services[this.$store.getters.servicesLength - 1].priceNetto,
          vat: this.invoiceTemplate.services[this.$store.getters.servicesLength - 1].vat
        })
      },
      removeInvoiceRow (index) {
        this.serviceRows.length > 1 ? this.serviceRows.splice(index, 1) : false
      }
    }
  }
</script>
