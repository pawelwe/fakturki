<template>
    <textarea class="invoice-from u-text-right " rows="1" :placeholder="invoiceTemplate.executive" v-model="invoiceTemplate.executive"></textarea>
</template>

<script>
  export default {
    props: ['invoiceTemplate']
  }
</script>
