<template>
  <div class="invoice-calc-row invoice-calc-row__header">
    <textarea rows="1" class="invoice-calc-input invoice-calc-number" v-model="invoiceTemplate.labels.nrLabel" :placeholder="invoiceTemplate.labels.nrLabel"></textarea>
    <textarea rows="1" class="invoice-calc-input invoice-calc-name" v-model="invoiceTemplate.labels.serviceNameLabel" :placeholder="invoiceTemplate.labels.serviceNameLabel"></textarea>
    <textarea rows="1" class="invoice-calc-input invoice-calc-count" v-model="invoiceTemplate.labels.ammountLabel" :placeholder="invoiceTemplate.labels.ammountLabel"></textarea>
    <textarea rows="1" class="invoice-calc-input invoice-calc-price-netto" v-model="invoiceTemplate.labels.priceNettoLabel" :placeholder="invoiceTemplate.labels.priceNettoLabel"></textarea>
    <textarea rows="1" class="invoice-calc-input invoice-calc-value-netto" v-model="invoiceTemplate.labels.valueNettoLabel" :placeholder="invoiceTemplate.labels.valueNettoLabel"></textarea>
    <textarea rows="1" class="invoice-calc-input invoice-calc-vat" v-model="invoiceTemplate.labels.valRateLabel" :placeholder="invoiceTemplate.labels.valRateLabel"></textarea>
    <textarea rows="1" class="invoice-calc-input invoice-calc-vat-value" v-model="invoiceTemplate.labels.valValueLabel" :placeholder="invoiceTemplate.labels.valValueLabel"></textarea>
    <textarea rows="1" class="invoice-calc-input invoice-calc-full-value" v-model="invoiceTemplate.labels.fullValueLabel" :placeholder="invoiceTemplate.labels.fullValueLabel"></textarea>
  </div>
</template>

<script>
  export default {
    props: ['invoiceTemplate']
  }
</script>
