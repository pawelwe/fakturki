export default {
  executive: 'Agencja Ochrony Mienia "Maczeta", ul. Kosynierów 6b, 12-345 Wołomin, NIP: XXX-XX-XX-XXX',
  recipient: 'NABYWCA / ODBIORCA: Parafia św. Edwarda, ul. Biskupia 7, 12-345 Pruszków, NIP: XXX-XX-XX-XXX',
  invoiceTitle: 'Fakturka nr 108',
  invoiceDate: 'Miejsce i data wystawienia: Wołomin 12.12.1989',
  labels: {
    nrLabel: 'Nr.',
    serviceNameLabel: 'Nazwa usługi',
    ammountLabel: 'Ilość',
    priceNettoLabel: 'Cena netto',
    valueNettoLabel: 'Wartość',
    valRateLabel: 'VAT',
    valValueLabel: 'Kwota VAT',
    vatRateValue: '-',
    fullValueLabel: 'W. Brutto'
  },
  services: [
    {
      name: 'Usługi grabarskie',
      ammount: '1',
      priceNetto: '123.00',
      vat: '23%'
    }
  ],
  valueInWords: 'Słownie: sto złoty osiem groszy',
  paymentType: 'Sposób płatności: przelew na konto',
  accountNumber: 'Numer konta: (mbank) XX XXXX XXXX XXXX XXXX XXXX XXXX'
}
