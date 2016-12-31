<template>
  <textarea class="u-text-center invoice-header" rows="1" :placeholder="invoiceTemplate.invoiceTitle" v-model="invoiceTemplate.invoiceTitle"></textarea>
</template>

<script>
  export default {
    props: ['invoiceTemplate']
  }
</script>
