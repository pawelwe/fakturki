<template>
  <section class="u-text-left invoice-date">
    <textarea class="u-text-left invoice-date-date" rows="1" :placeholder="invoiceTemplate.invoiceDate" v-model="invoiceTemplate.invoiceDate"></textarea>
  </section>
</template>

<script>
  export default {
    props: ['invoiceTemplate']
  }
</script>
