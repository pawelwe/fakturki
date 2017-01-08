<template>
  <li class="invoice-calc-row">
    <span class="invoice-calc-output invoice-calc-number">{{ index + 1 }}</span>
    <span class="invoice-calc-input-wrap invoice-calc-name">
      <span class="invoice-calc-input-wrap-label">Nazwa: </span>
      <textarea rows="1" cols="1" class="invoice-calc-input" lazy v-model="service.name" :placeholder="service.name"></textarea>
    </span>
    <span class="invoice-calc-input-wrap invoice-calc-count">
      <span class="invoice-calc-input-wrap-label">Ilość: </span>
      <textarea rows="1" cols="1" @keyup.prevent="checkAmmount" lazy class="invoice-calc-input" v-model.number="service.ammount" :placeholder="service.ammount"></textarea>
    </span>
    <span class="invoice-calc-input-wrap invoice-calc-price-netto">
      <span class="invoice-calc-input-wrap-label">Cena Netto: </span>
      <textarea rows="1" cols="1" @keyup.prevent="checkNetto" lazy class="invoice-calc-input" v-model.number="service.priceNetto" :placeholder="service.priceNetto"></textarea>
    </span>
    <span class="invoice-calc-output invoice-calc-value-netto">{{ nettoValue }}</span>
    <span class="invoice-calc-input-wrap invoice-calc-vat">
      <span class="invoice-calc-input-wrap-label">VAT: </span>
      <textarea rows="1" cols="1" @keyup.prevent="checkVat" class="invoice-calc-input" lazy v-model="service.vat" :placeholder="service.vat"></textarea>
    </span>
    <span class="invoice-calc-output invoice-calc-vat-value">{{ vatValue }}</span>
    <span class="invoice-calc-output invoice-calc-full-value">{{ bruttoValue }}</span>
    <span class="invoice-calc-remove-row-btn" @click="$emit('removeRow')">x</span>
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
        return parseFloat(((this.nettoValue / 100) * parseFloat(this.service.vat.replace(/%/g, '')))).toFixed(2)
      },
      bruttoValue () {
        return (parseFloat(this.nettoValue) + parseFloat(this.vatValue)).toFixed(2)
      }
    },
    methods: {
      checkAmmount (e) {
        const charCode = e.keyCode
        if (charCode !== 8 && charCode < 48 || charCode > 57) {
          this.service.ammount = 1
        }
      },
      checkNetto (e) {
        const charCode = e.keyCode
        if (charCode !== 8 && charCode !== 190 && (charCode < 48 || charCode > 57)) {
          this.service.priceNetto = 123.00
        }
      },
      checkVat (e) {
        const charCode = e.keyCode
        if (charCode !== 8 && charCode < 48 || charCode > 57) {
          this.service.vat = '23%'
        }
      }
    }
  }
</script>
