export default {
  id: '0',
  executive: 'Agencja Ochrony Mienia "Maczeta", ul. Kosynierów 6b, 12-345 Wołomin, NIP: XXX-XX-XX-XXX',
  recipient: 'NABYWCA / ODBIORCA: Parafia św. Edwarda, ul. Biskupia 7, 12-345 Pruszków, NIP: XXX-XX-XX-XXX',
  invoiceTitle: 'Template',
  invoiceDate: 'Miejsce i data wystawienia: Wołomin 12.12.1989',
  labels: {
    nrLabel: 'Nr.',
    serviceNameLabel: 'Nazwa usługi',
    amountLabel: 'Ilość',
    priceNettoLabel: 'Cena netto',
    valueNettoLabel: 'Wartość',
    valRateLabel: 'VAT',
    valValueLabel: 'Kwota VAT',
    vatRateValue: '-',
    fullValueLabel: 'W. Brutto'
  },
  services: [
    {
      id: 1,
      name: '',
      amount: '',
      priceNetto: '',
      vat: ''
    }
  ],
  valueInWords: 'Słownie: sto złoty osiem groszy',
  paymentType: 'Sposób płatności: przelew na konto',
  accountNumber: 'Numer konta: (mbank) XX XXXX XXXX XXXX XXXX XXXX XXXX'
}
