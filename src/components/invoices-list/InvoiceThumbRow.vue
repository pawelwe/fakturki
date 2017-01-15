<template>
  <li class="invoice-thumb-calc-row">
    <span class="invoice-thumb-calc-output invoice-thumb-calc-number">{{ index + 1 }}</span>
    <span class="invoice-thumb-calc-input invoice-thumb-calc-name">{{ service.name }}</span>
    <span class="invoice-thumb-calc-input invoice-thumb-calc-count">{{ service.amount }}</span>
    <span class="invoice-thumb-calc-input invoice-thumb-calc-price-netto">{{ service.priceNetto }}</span>
    <span class="invoice-thumb-calc-output invoice-thumb-calc-value-netto">{{ nettoValue }}</span>
    <span class="invoice-thumb-calc-input invoice-thumb-calc-vat">{{ service.vat }}</span>
    <span class="invoice-thumb-calc-output invoice-thumb-calc-vat-value">{{ vatValue }}</span>
    <span class="invoice-thumb-calc-output invoice-thumb-calc-full-value">{{ bruttoValue }}</span>
  </li>
</template>

<script>
  export default {
    props: ['service', 'index'],
    computed: {
      nettoValue () {
        return parseFloat((this.service.ammount * this.service.priceNetto)).toFixed(2)
      },
      vatValue () {
        return parseFloat((this.nettoValue * (0 + '.' + parseFloat(this.service.vat.replace(/%/g, ''))))).toFixed(2)
      },
      bruttoValue () {
        return (parseFloat(this.nettoValue) + parseFloat(this.vatValue)).toFixed(2)
      }
    }
  }
</script>
