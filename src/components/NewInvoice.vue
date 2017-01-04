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
            <invoice-row v-for="(service, index, key) in serviceRows" :service="service" :index="index" :key="service" v-on:removeRow="removeInvoiceRow(index)"></invoice-row>
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
        return this.$store.getters.getActiveTemplate
      },
      serviceRows () {
        return this.$store.getters.getActiveTemplate.services
      }
    },
    methods: {
      addInvoiceRow (e) {
        e.preventDefault()
        this.serviceRows.push({
          id: this.$store.getters.servicesLength + 1,
          name: this.invoiceTemplate.services[this.$store.getters.servicesLength - 1].name,
          ammount: this.invoiceTemplate.services[this.$store.getters.servicesLength - 1].ammount,
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
