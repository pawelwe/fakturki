<template>
  <!--<transition name="slide-fade" appear mode="out-in">-->
    <li class="invoice-calc-row">
      <span class="invoice-calc-output invoice-calc-number">{{ index + 1 }}</span>
      <textarea rows="1" class="invoice-calc-input invoice-calc-name" v-model="service.name" :placeholder="service.name"></textarea>
      <textarea rows="1" class="invoice-calc-input invoice-calc-count"  v-model="service.ammount" :placeholder="service.ammount"></textarea>
      <textarea rows="1" class="invoice-calc-input invoice-calc-price-netto"  v-model="service.priceNetto" :placeholder="service.priceNetto"></textarea>
      <span class="invoice-calc-output invoice-calc-value-netto">{{ nettoValue }}</span>
      <textarea rows="1" class="invoice-calc-input invoice-calc-vat"  v-model="service.vat" :placeholder="service.vat"></textarea>
      <span class="invoice-calc-output invoice-calc-vat-value">{{ vatValue }}</span>
      <span class="invoice-calc-output invoice-calc-full-value">{{ bruttoValue }}</span>
      <span class="invoice-calc-remove-row-btn" @click="$emit('removeRow')">x</span>
    </li>
  <!--</transition>-->
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
