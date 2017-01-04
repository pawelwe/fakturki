<template>
  <span class="invoice-thumb-to u-text-left">{{ invoiceTemplate.recipient }}</span>
</template>

<script>
  export default {
    props: ['invoiceTemplate']
  }
</script>
