<template>
  <main class="invoice">
    <section>
      <textarea class="invoice-from u-text-right " rows="1" :placeholder="invoiceTemplate.executive"></textarea>
      <textarea class="invoice-to u-text-left" rows="7" :placeholder="invoiceTemplate.recipient"></textarea>
    </section>
    <section class="invoice-data">
      <textarea class="u-text-center invoice-header" rows="1" :placeholder="invoiceTemplate.invoiceTitle"></textarea>
      <div class="u-text-left invoice-date">
        <textarea class="u-text-left invoice-date-date" rows="1">{{ invoiceTemplate.invoiceDate }}</textarea>
      </div>
      <div class="invoice-calc">
        <div class="invoice-calc-row invoice-calc-row__header">
          <textarea rows="1" class="invoice-calc-input invoice-calc-number">{{ invoiceTemplate.labels.nrLabel }}</textarea>
          <textarea rows="1" class="invoice-calc-input invoice-calc-name">{{ invoiceTemplate.labels.serviceNameLabel }}</textarea>
          <textarea rows="1" class="invoice-calc-input invoice-calc-count">{{ invoiceTemplate.labels.ammountLabel }}</textarea>
          <textarea rows="1" class="invoice-calc-input invoice-calc-price-netto">{{ invoiceTemplate.labels.priceNettoLabel }}</textarea>
          <textarea rows="1" class="invoice-calc-input invoice-calc-value-netto">{{ invoiceTemplate.labels.valueNettoLabel }}</textarea>
          <textarea rows="1" class="invoice-calc-input invoice-calc-vat">{{ invoiceTemplate.labels.valRateLabel }}</textarea>
          <textarea rows="1" class="invoice-calc-input invoice-calc-vat-value">{{ invoiceTemplate.labels.valValueLabel }}</textarea>
          <textarea rows="1" class="invoice-calc-input invoice-calc-full-value">{{ invoiceTemplate.labels.fullValueLabel }}</textarea>
        </div>
        <div class="invoice-calc-row">
          <span class="invoice-calc-input invoice-calc-number">1</span>
          <textarea rows="1" class="invoice-calc-input invoice-calc-name" :placeholder="invoiceTemplate.labels.serviceNameValue"></textarea>
          <textarea rows="1" class="invoice-calc-input invoice-calc-count" :placeholder="invoiceTemplate.labels.ammountValue" v-model="invoiceTemplate.labels.ammountValue"></textarea>
          <textarea rows="1" class="invoice-calc-input invoice-calc-price-netto" :placeholder="invoiceTemplate.labels.priceNettoValue" v-model="invoiceTemplate.labels.priceNettoValue"></textarea>
          <span class="invoice-calc-input invoice-calc-value-netto">{{ nettoValue }}</span>
          <textarea rows="1" class="invoice-calc-input invoice-calc-vat" :placeholder="invoiceTemplate.labels.vatRateValue" v-model="invoiceTemplate.labels.vatRateValue"></textarea>
          <span class="invoice-calc-input invoice-calc-vat-value">{{ vatValue }}</span>
          <span class="invoice-calc-input invoice-calc-full-value">{{ bruttoValue }}</span>
        </div>
      </div>
      <div class="invoice-calc-summary">
        <div class="invoice-calc-row invoice-calc-row__summary">
          <span class="u-hidden invoice-calc-number"></span>
          <span class="u-hidden invoice-calc-name"></span>
          <span class="u-hidden invoice-calc-count"></span>
          <span class="invoice-calc-output invoice-calc-price-netto u-bold">RAZEM</span>
          <span class="invoice-calc-output invoice-calc-value-netto">{{ nettoValue }}</span>
          <span class="invoice-calc-output invoice-calc-vat">{{ invoiceTemplate.labels.vatRateValue }}</span>
          <span class="invoice-calc-output invoice-calc-vat-value">{{ vatValue }}</span>
          <span class="invoice-calc-output invoice-calc-full-value">{{ bruttoValue }}</span>
        </div>
      </div>

      <section class="invoice-summary">
        <span rows="1" class="invoice-summary-row u-bold invoice-calc-label">Do zapłaty:</span>
        <textarea rows="1" class="invoice-summary-row u-text-xs" placeholder="Słownie: sto złoty osiem groszy"></textarea>
        <textarea rows="1" class="invoice-summary-row u-bold u-mt-15" placeholder="Sposób płatności: przelew na konto"></textarea>
        <textarea rows="1" class="invoice-summary-row u-text-xs" placeholder="Numer konta: (mbank) XX XXXX XXXX XXXX XXXX XXXX XXXX"></textarea>
      </section>

    </section>
    <footer class="placeholder"></footer>
  </main>
</template>

<script>
  export default {
    computed: {
      invoiceTemplate () {
        return this.$store.getters.template
      },
      nettoValue () {
        return parseInt((this.invoiceTemplate.labels.ammountValue * this.invoiceTemplate.labels.priceNettoValue).toFixed(2))
      },
      vatValue () {
        return parseInt((this.nettoValue * (0 + '.' + parseInt(this.invoiceTemplate.labels.vatRateValue.replace(/%/g, '')))).toFixed(2))
      },
      bruttoValue () {
        return this.nettoValue + this.vatValue
      }
    }
  }
</script>

<style lang="scss">
  @import '../scss/_custom.scss';
</style>


