<template>
  <ul class="invoice-calc-thumb-summary invoice-thumb-calc-row invoice-thumb-calc-row__summary">
    <li class="u-hidden invoice-thumb-calc-number"></li>
    <li class="u-hidden invoice-thumb-calc-name"></li>
    <li class="u-hidden invoice-thumb-calc-count"></li>
    <li class="invoice-thumb-calc-summary-output invoice-thumb-calc-price-netto u-bold u-left-border-light-gray">RAZEM</li>
    <li class="invoice-thumb-calc-summary-output invoice-thumb-calc-value-netto">{{ nettoValue }}</li>
    <li class="invoice-thumb-calc-summary-output invoice-thumb-calc-vat">{{ invoiceTemplate.labels.vatRateValue }}</li>
    <li class="invoice-thumb-calc-summary-output invoice-thumb-calc-vat-value">{{ vatValue }}</li>
    <li class="invoice-thumb-calc-summary-output invoice-thumb-calc-full-value">{{ bruttoValue }}</li>
  </ul>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: mapGetters([
      'nettoValue',
      'vatValue',
      'bruttoValue'
    ]),
    props: ['invoiceTemplate']
  }
</script>
