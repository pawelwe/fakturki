<template>
  <main class="invoice">
    <section>
      <textarea class="invoice-from u-text-right " rows="1" placeholder="Agencja Ochrony Mienia 'Maczeta', ul. Kosynierów 6b, 12-345 Wołomin, NIP: XXX-XX-XX-XXX"></textarea>
      <textarea class="invoice-to u-text-left" rows="7" placeholder="NABYWCA / ODBIORCA:
Parafia św. Edwarda,
ul. Biskupia 7,
12-345 Pruszków,
NIP: XXX-XX-XX-XXX">
      </textarea>
    </section>
    <section class="invoice-data">
      <textarea class="u-text-center invoice-header" rows="1" placeholder="Fakturka nr 1"></textarea>
      <div class="u-text-left invoice-date">
        <textarea class="u-text-left invoice-date-date" rows="1">Miejsce i data wystawienia: Wołomin 12.12.1989</textarea>
      </div>
      <div class="invoice-calc">
        <div class="invoice-calc-row invoice-calc-row__header">
          <textarea rows="1" class="invoice-calc-input invoice-calc-number">Nr.</textarea>
          <textarea rows="1" class="invoice-calc-input invoice-calc-name">Nazwa usługi</textarea>
          <textarea rows="1" class="invoice-calc-input invoice-calc-count">Ilość</textarea>
          <textarea rows="1" class="invoice-calc-input invoice-calc-price-netto">Cena netto</textarea>
          <textarea rows="1" class="invoice-calc-input invoice-calc-value-netto">Wartość</textarea>
          <textarea rows="1" class="invoice-calc-input invoice-calc-vat">VAT</textarea>
          <textarea rows="1" class="invoice-calc-input invoice-calc-vat-value">Kwota VAT</textarea>
          <textarea rows="1" class="invoice-calc-input invoice-calc-full-value">W. Brutto</textarea>
        </div>
        <div class="invoice-calc-row">
          <textarea rows="1" class="invoice-calc-input invoice-calc-number" placeholder="1"></textarea>
          <textarea rows="1" class="invoice-calc-input invoice-calc-name" placeholder="Usługi grabarskie"></textarea>
          <textarea rows="1" class="invoice-calc-input invoice-calc-count" placeholder="1"></textarea>
          <textarea rows="1" class="invoice-calc-input invoice-calc-price-netto" placeholder="8650.00"></textarea>
          <textarea rows="1" class="invoice-calc-input invoice-calc-value-netto" placeholder="8650.00"></textarea>
          <textarea rows="1" class="invoice-calc-input invoice-calc-vat" placeholder="23%"></textarea>
          <textarea rows="1" class="invoice-calc-input invoice-calc-vat-value" placeholder="1989.50"></textarea>
          <textarea rows="1" class="invoice-calc-input invoice-calc-full-value" placeholder="10639.50"></textarea>
        </div>
        <div class="invoice-calc-row">
          <textarea rows="1" class="invoice-calc-input invoice-calc-number" placeholder="2"></textarea>
          <textarea rows="1" class="invoice-calc-input invoice-calc-name" placeholder="Usługi grabarskie"></textarea>
          <textarea rows="1" class="invoice-calc-input invoice-calc-count" placeholder="1"></textarea>
          <textarea rows="1" class="invoice-calc-input invoice-calc-price-netto" placeholder="8650.00"></textarea>
          <textarea rows="1" class="invoice-calc-input invoice-calc-value-netto" placeholder="8650.00"></textarea>
          <textarea rows="1" class="invoice-calc-input invoice-calc-vat" placeholder="23%"></textarea>
          <textarea rows="1" class="invoice-calc-input invoice-calc-vat-value" placeholder="1989.50"></textarea>
          <textarea rows="1" class="invoice-calc-input invoice-calc-full-value" placeholder="10639.50"></textarea>
        </div>
        <div class="invoice-calc-row">
          <textarea rows="1" class="invoice-calc-input invoice-calc-number" placeholder="3"></textarea>
          <textarea rows="1" class="invoice-calc-input invoice-calc-name" placeholder="Usługi grabarskie"></textarea>
          <textarea rows="1" class="invoice-calc-input invoice-calc-count" placeholder="1"></textarea>
          <textarea rows="1" class="invoice-calc-input invoice-calc-price-netto" placeholder="8650.00"></textarea>
          <textarea rows="1" class="invoice-calc-input invoice-calc-value-netto" placeholder="8650.00"></textarea>
          <textarea rows="1" class="invoice-calc-input invoice-calc-vat" placeholder="23%"></textarea>
          <textarea rows="1" class="invoice-calc-input invoice-calc-vat-value" placeholder="1989.50"></textarea>
          <textarea rows="1" class="invoice-calc-input invoice-calc-full-value" placeholder="10639.50"></textarea>
        </div>
      </div>
      <div class="invoice-calc-summary">
        <div class="invoice-calc-row invoice-calc-row__summary">
          <span class="u-hidden invoice-calc-number"></span>
          <span class="u-hidden invoice-calc-name"></span>
          <span class="u-hidden invoice-calc-count"></span>
          <textarea rows="1" class="invoice-calc-input invoice-calc-price-netto u-bold">RAZEM</textarea>
          <textarea rows="1" class="invoice-calc-input invoice-calc-value-netto" placeholder="8650.00"></textarea>
          <textarea rows="1" class="invoice-calc-input invoice-calc-vat" placeholder="23%"></textarea>
          <textarea rows="1" class="invoice-calc-input invoice-calc-vat-value" placeholder="1989.50"></textarea>
          <textarea rows="1" class="invoice-calc-input invoice-calc-full-value" placeholder="10639.50"></textarea>
        </div>
      </div>

      <section class="invoice-summary">
        <textarea rows="1" class="invoice-summary-row u-bold" placeholder="Do zapłaty: 10639.50 zł"></textarea>
        <textarea rows="1" class="invoice-summary-row u-text-xs" placeholder="Słownie: dziesięć tysięcy sześćset trzydzieści dziewięć złotych, pięćdziesiąt groszy"></textarea>
        <textarea rows="1" class="invoice-summary-row u-bold u-mt-15" placeholder="Sposób płatności: przelew na konto"></textarea>
        <textarea rows="1" class="invoice-summary-row u-text-xs" placeholder="Numer konta: (mbank) 42 1140 2004 0000 3302 7499 3684"></textarea>
      </section>

    </section>
    <footer class="placeholder"></footer>
  </main>
</template>

<script>
  export default {
    data () {
      return {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non faucibus ligula. Vivamus sapien lorem, condimentum a malesuada vel, hendrerit id mauris. Nunc at libero nisl. Nulla ut posuere mi, ut dictum ligula. Integer lobortis velit sed vestibulum finibus. Aliquam nec massa et magna malesuada pellentesque. Suspendisse pharetra nisi tortor, vitae varius elit tristique dignissim. Aliquam vulputate faucibus elit, eu accumsan lacus hendrerit vitae. '
      }
    }
  }
</script>

<style lang="scss">
  @import '../scss/_custom.scss';
</style>


