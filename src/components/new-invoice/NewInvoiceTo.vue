<template>
  <textarea class="invoice-to u-text-left" rows="7" :placeholder="invoiceTemplate.recipient" v-model="invoiceTemplate.recipient"></textarea>
</template>

<script>
  export default {
    props: ['invoiceTemplate']
  }
</script>
