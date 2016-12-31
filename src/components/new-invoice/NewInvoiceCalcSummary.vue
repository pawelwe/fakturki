<template>
  <div class="invoice-calc-summary">
    <div class="invoice-calc-row invoice-calc-row__summary">
      <span class="u-hidden invoice-calc-number"></span>
      <span class="u-hidden invoice-calc-name"></span>
      <span class="u-hidden invoice-calc-count"></span>
      <span class="invoice-calc-summary-output invoice-calc-price-netto u-bold u-left-border-light-gray">RAZEM</span>
      <span class="invoice-calc-summary-output invoice-calc-value-netto">{{ nettoValue }}</span>
      <span class="invoice-calc-summary-output invoice-calc-vat">{{ invoiceTemplate.labels.vatRateValue }}</span>
      <span class="invoice-calc-summary-output invoice-calc-vat-value">{{ vatValue }}</span>
      <span class="invoice-calc-summary-output invoice-calc-full-value">{{ bruttoValue }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['invoiceTemplate', 'nettoValue', 'vatValue', 'bruttoValue']
  }
</script>
