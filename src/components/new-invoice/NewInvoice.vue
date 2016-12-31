<template>
  <main class="invoice">

    <!-- COMPANY DATA SECTION -->
    <section>
      <invoice-from :invoiceTemplate="invoiceTemplate"></invoice-from>
      <invoice-to :invoiceTemplate="invoiceTemplate"></invoice-to>
    </section>

    <!-- DATA SECTION -->
    <section class="invoice-data">

      <!-- INVOICE HEADER -->
      <invoice-header :invoiceTemplate="invoiceTemplate"></invoice-header>

      <!-- INVOICE DATE -->
      <invoice-date :invoiceTemplate="invoiceTemplate"></invoice-date>

      <!-- CALC SECTION -->
      <div class="invoice-calc">
        <invoice-header-row :invoiceTemplate="invoiceTemplate"></invoice-header-row>
        <invoice-row v-for="(service, index, key) in invoiceTemplate.services" :service="service" :index="index" v-on:removeRow="removeRow(index)"  ></invoice-row>
        <a href="#" class="invoice-calc-add-row-btn" @click="addInvoiceRow">+</a>
      </div>

      <!-- CALC SUMMARY SECTION -->
      <calc-summary :invoiceTemplate="invoiceTemplate" :nettoValue="nettoValue" :vatValue="vatValue" :bruttoValue="bruttoValue"></calc-summary>

      <!-- MAIN SUMMARY SECTION -->
      <main-summary :invoiceTemplate="invoiceTemplate" :bruttoValue="bruttoValue"></main-summary>

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
//  import invoiceTemplate from '../../data/invoiceTemplate'
  import invoiceHeaderRow from './NewInvoiceHeaderRow'
  import invoiceRow from './NewInvoiceRow'
  import calcSummary from './NewInvoiceCalcSummary'
  import mainSummary from './NewInvoiceMainSummary'

  export default {
    data: function () {
      return {
        template: {}
      }
    },
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
      },
      nettoValue () {
        let fullNettoValue = 0
        for (let i = 0; i < this.invoiceTemplate.services.length; i++) {
          fullNettoValue += this.invoiceTemplate.services[i].priceNetto * this.invoiceTemplate.services[i].ammount
        }
        return fullNettoValue.toFixed(2)
      },
      vatValue () {
        let fullVatValue = 0
        for (let i = 0; i < this.invoiceTemplate.services.length; i++) {
          fullVatValue += (this.invoiceTemplate.services[i].priceNetto * this.invoiceTemplate.services[i].ammount) * (0 + '.' + parseInt(this.invoiceTemplate.services[i].vat.replace(/%/g, '')))
        }
        return parseInt(fullVatValue).toFixed(2)
      },
      bruttoValue () {
        return (parseInt(this.nettoValue) + parseInt(this.vatValue)).toFixed(2)
      }
    },
    methods: {
      addInvoiceRow (e) {
        e.preventDefault()
        this.$store.commit('ADD_ROW', {
          id: this.$store.getters.getTemplate.services.length + 1,
          name: 'Pielenie ogródka',
          ammount: 1,
          priceNetto: 1,
          vat: '23%'
        })
      },
      removeRow (index) {
        this.$store.commit('REMOVE_ROW', index)
      }
    }
  }
</script>

<style lang="scss">
  @import '../../scss/_custom.scss';
</style>


