<template>
  <div class="invoice-calc-row">
    <span class="invoice-calc-output invoice-calc-number">{{ service.id }}</span>
    <textarea rows="1" class="invoice-calc-input invoice-calc-name" v-model="service.name" :placeholder="service.name"></textarea>
    <textarea rows="1" class="invoice-calc-input invoice-calc-count"  v-model="service.ammount" :placeholder="service.ammount"></textarea>
    <textarea rows="1" class="invoice-calc-input invoice-calc-price-netto"  v-model="service.priceNetto" :placeholder="service.priceNetto"></textarea>
    <span class="invoice-calc-output invoice-calc-value-netto">{{ nettoValue }}</span>
    <textarea rows="1" class="invoice-calc-input invoice-calc-vat"  v-model="service.vat" :placeholder="service.vat"></textarea>
    <span class="invoice-calc-output invoice-calc-vat-value">{{ vatValue }}</span>
    <span class="invoice-calc-output invoice-calc-full-value">{{ bruttoValue }}</span>
    <span class="invoice-calc-remove-row-btn" @click="$emit('removeRow')">x</span>
  </div>
</template>

<script>
  export default {
    props: ['service', 'index'],
    computed: {
      nettoValue () {
        return parseInt((this.service.ammount * this.service.priceNetto)).toFixed(2)
      },
      vatValue () {
        return parseInt((this.nettoValue * (0 + '.' + parseInt(this.service.vat.replace(/%/g, ''))))).toFixed(2)
      },
      bruttoValue () {
        return (parseInt(this.nettoValue) + parseInt(this.vatValue)).toFixed(2)
      }
    },
    methods: {
      removeInvoiceRow (index, $event) {
        this.$store.commit('REMOVE_ROW', this.index)
        console.log('index: ', index, 'event: ', $event)
      }
    }
  }
</script>
