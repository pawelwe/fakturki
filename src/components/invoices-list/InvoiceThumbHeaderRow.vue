<template>
  <header class="invoice-thumb-calc-row invoice-thumb-calc-row__header">
    <span class="invoice-thumb-calc-input invoice-thumb-calc-number">{{ invoiceTemplate.labels.nrLabel }}</span>
    <span class="invoice-thumb-calc-input invoice-thumb-calc-name">{{ invoiceTemplate.labels.serviceNameLabel }}</span>
    <span class="invoice-thumb-calc-input invoice-thumb-calc-count">{{ invoiceTemplate.labels.ammountLabel }}</span>
    <span class="invoice-thumb-calc-input invoice-thumb-calc-price-netto">{{ invoiceTemplate.labels.priceNettoLabel }}</span>
    <span class="invoice-thumb-calc-input invoice-thumb-calc-value-netto">{{ invoiceTemplate.labels.valueNettoLabel }}</span>
    <span class="invoice-thumb-calc-input invoice-thumb-calc-vat">{{ invoiceTemplate.labels.valRateLabel }}</span>
    <span class="invoice-thumb-calc-input invoice-thumb-calc-vat-value">{{ invoiceTemplate.labels.valValueLabel }}</span>
    <span class="invoice-thumb-calc-input invoice-thumb-calc-full-value">{{ invoiceTemplate.labels.fullValueLabel }}</span>
  </header>
</template>

<script>
  export default {
    props: ['invoiceTemplate']
  }
</script>
