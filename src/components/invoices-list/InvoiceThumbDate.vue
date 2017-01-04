<template>
  <section class="u-text-left invoice-thumb-date">
    <span class="u-text-left invoice-thumb-date-date">{{ invoiceTemplate.invoiceDate }}</span>
  </section>
</template>

<script>
  export default {
    props: ['invoiceTemplate']
  }
</script>
