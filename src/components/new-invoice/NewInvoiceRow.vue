<template>
  <li class="invoice-calc-row">
    <span class="invoice-calc-output invoice-calc-number">{{ index + 1 }}</span>
    <span class="invoice-calc-input-wrap invoice-calc-name" :class="{ 'u-error': $v.service.name.$invalid }">
      <span class="invoice-calc-input-wrap-label">Nazwa: </span>
      <textarea rows="1" cols="1" class="invoice-calc-input" lazy v-model="service.name" :placeholder="service.name"></textarea>
    </span>
    <span class="invoice-calc-input-wrap invoice-calc-count" :class="{ 'u-error': $v.service.amount.$invalid }">
      <span class="invoice-calc-input-wrap-label">Ilość: </span>
      <textarea rows="1" cols="1" lazy class="invoice-calc-input" v-model="service.amount" :placeholder="service.amount"></textarea>
    </span>
    <span class="invoice-calc-input-wrap invoice-calc-price-netto" :class="{ 'u-error': $v.service.priceNetto.$invalid }" >
      <span class="invoice-calc-input-wrap-label">Cena Netto: </span>
      <textarea rows="1" cols="1" lazy class="invoice-calc-input" v-model.number="service.priceNetto" :placeholder="service.priceNetto"></textarea>
    </span>
    <span class="invoice-calc-output invoice-calc-value-netto">{{ nettoValue }}</span>
    <span class="invoice-calc-input-wrap invoice-calc-vat" :class="{ 'u-error': $v.service.vat.$invalid }">
      <span class="invoice-calc-input-wrap-label">VAT: </span>
      <textarea rows="1" cols="1" class="invoice-calc-input" lazy v-model="service.vat" :placeholder="service.vat"></textarea>
    </span>
    <span class="invoice-calc-output invoice-calc-vat-value">{{ vatValue }}</span>
    <span class="invoice-calc-output invoice-calc-full-value">{{ bruttoValue }}</span>
    <span class="invoice-calc-remove-row-btn" @click="$emit('removeRow')">x</span>
  </li>
</template>

<script>
  import { required, minLength, between } from 'vuelidate/lib/validators'

  export default {
    props: ['service', 'index'],
    computed: {
      nettoValue () {
        return (!isNaN(this.service.amount) && !isNaN(this.service.priceNetto)) ? parseFloat((this.service.amount * this.service.priceNetto)).toFixed(2) : 0
      },
      vatValue () {
        return (!isNaN(this.service.vat.replace(/%/g, '')) && this.service.vat.length > 0) ? parseFloat(((this.nettoValue / 100) * parseFloat(this.service.vat.replace(/%/g, '')))).toFixed(2) : 0
      },
      bruttoValue () {
        return (parseFloat(this.nettoValue) + parseFloat(this.vatValue)).toFixed(2)
      }
    },
    validations: {
      service: {
        name: {
          required,
          minLength: minLength(3)
        },
        amount: {
          required,
          minLength: minLength(1),
          between: between(1, 9999)
        },
        priceNetto: {
          required,
          minLength: minLength(1),
          between: between(1, 999999999)
        },
        vat: {
          required,
          minLength: minLength(1, 100)
        }
      }
    }
  }
</script>
