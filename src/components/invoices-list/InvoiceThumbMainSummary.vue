<template>
  <section class="invoice-thumb-summary">
    <span class="invoice-thumb-summary-row u-bold invoice-thumb-calc-label">Do zapłaty: {{ bruttoValue }} zł</span>
    <span class="invoice-thumb-summary-row u-text-xs">{{ invoiceTemplate.valueInWords }}</span>
    <span class="invoice-thumb-summary-row u-bold u-mt-15">{{ invoiceTemplate.paymentType }}</span>
    <span class="invoice-thumb-summary-row u-text-xs">{{ invoiceTemplate.accountNumber }}</span>
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
