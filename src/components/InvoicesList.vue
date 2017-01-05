<template>
  <main class="invoices-thumbs">
    <!-- COMPANY DATA SECTION -->
    <header>
      <h1 v-if="invoicesList.length">Lista fakturek:</h1>
      <h1 v-else>Nie masz fakturek!</h1>
    </header>
    <ul class="invoices-thumbs-list" v-if="invoicesList.length">
      <li class="invoice-thumb" v-for="(invoice, index, key) in invoicesList">
        <span @click="removeInvoice(index)" class="invoice-thumb-remove">X</span>

        <section class="invoice-thumb-content" @click="loadInvoice(index + 1)">
          <h6 class="invoice-thumb-id"><span class="u-violet">{{ index + 1 }})</span>. <span>{{ invoice.creationDate | moment('DD, MM, YYYY, kk:mm') }}</span></h6>

          <!-- COMPANY DATA SECTION -->
          <header class="u-text-left">
            <invoice-from :invoiceTemplate="invoice"></invoice-from>
            <invoice-to :invoiceTemplate="invoice"></invoice-to>
          </header>

          <!-- DATA SECTION -->
          <section class="invoice-thumb-data">

            <!-- INVOICE HEADER -->
            <invoice-header :invoiceTemplate="invoice"></invoice-header>

            <!-- INVOICE DATE -->
            <invoice-date :invoiceTemplate="invoice"></invoice-date>

            <!-- CALC SECTION -->
            <div class="invoice-calc">
              <invoice-header-row :invoiceTemplate="invoice"></invoice-header-row>
              <ul>
                <invoice-row v-for="(service, index, key) in invoice.services" :service="service" :index="index" :key="service"></invoice-row>
              </ul>
            </div>

            <!-- CALC SUMMARY SECTION -->
            <calc-summary :invoiceTemplate="invoice"></calc-summary>

            <!-- MAIN SUMMARY SECTION -->
            <main-summary :invoiceTemplate="invoice"></main-summary>

            <!-- FOOTER PLACEHOLDER (FLEX) -->
            <footer class="placeholder"></footer>
          </section>
        </section>

      </li>
    </ul>
    <footer class="placeholder"></footer>
  </main>
</template>

<script>
  import invoiceFrom from './invoices-list/InvoiceThumbFrom'
  import invoiceTo from './invoices-list/InvoiceThumbTo'
  import invoiceHeader from './invoices-list/InvoiceThumbHeader'
  import invoiceDate from './invoices-list/InvoiceThumbDate'
  import invoiceHeaderRow from './invoices-list/InvoiceThumbHeaderRow'
  import invoiceRow from './invoices-list/InvoiceThumbRow'
  import calcSummary from './invoices-list/InvoiceThumbCalcSummary'
  import mainSummary from './invoices-list/InvoiceThumbMainSummary'
  import {mapActions} from 'vuex'

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
      data () {
        return {
          id: this.$route.params.id,
          date: toString(new Date())
        }
      },
      invoicesList () {
        return this.$store.getters.getInvoicesList
      }
    },
    methods: {
      ...mapActions([
        'loadInvoice'
      ]),
      loadInvoice (index) {
        this.$store.commit('LOAD_INVOICE', index - 1)
        this.$router.push('fakturka-' + index)
      },
      removeInvoice (index) {
        console.info(index)
        this.$store.commit('DEL_INVOICE', index)
      }
    }
  }
</script>
