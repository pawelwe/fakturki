<template>
  <ul class="invoice-calc-summary invoice-calc-row invoice-calc-row__summary">
    <li class="u-hidden invoice-calc-number"></li>
    <li class="u-hidden invoice-calc-name"></li>
    <li class="u-hidden invoice-calc-count"></li>
    <li class="invoice-calc-summary-output invoice-calc-price-netto u-bold u-left-border-light-gray u-no-left-border-mobile">RAZEM</li>
    <li class="invoice-calc-summary-output invoice-calc-value-netto">{{ nettoValue }}</li>
    <li class="invoice-calc-summary-output invoice-calc-vat" v-if="invoiceTemplate.labels.vatRateValue">{{ invoiceTemplate.labels.vatRateValue }}</li>
    <li class="invoice-calc-summary-output invoice-calc-vat-value">{{ vatValue }}</li>
    <li class="invoice-calc-summary-output invoice-calc-full-value">{{ bruttoValue }}</li>
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
