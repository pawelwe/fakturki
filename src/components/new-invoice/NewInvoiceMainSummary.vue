<template>
  <section class="invoice-summary">
    <span rows="1" class="invoice-summary-row u-bold invoice-calc-label">Do zapłaty: {{ bruttoValue }} zł</span>
    <textarea rows="1" class="invoice-summary-row u-text-xs" :placeholder="invoiceTemplate.valueInWords" v-model="invoiceTemplate.valueInWords"></textarea>
    <textarea rows="1" class="invoice-summary-row u-bold u-mt-15" :placeholder="invoiceTemplate.paymentType" v-model="invoiceTemplate.paymentType"></textarea>
    <textarea rows="1" class="invoice-summary-row u-text-xs" :placeholder="invoiceTemplate.accountNumber" v-model="invoiceTemplate.accountNumber"></textarea>
  </section>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    props: ['invoiceTemplate'],
    computed: mapGetters([
      'bruttoValue'
    ])
  }
</script>
