// export default [
//   { id: 1, name: 'BMW', price: 110 }
// ]

// export default {
//   executive: 'Agencja Ochrony Mienia "Maczeta", ul. Kosynierów 6b, 12-345 Wołomin, NIP: XXX-XX-XX-XXX',
//   recipient: 'NABYWCA / ODBIORCA: Parafia św. Edwarda, ul. Biskupia 7, 12-345 Pruszków, NIP: XXX-XX-XX-XXX',
//   invoice
//
// }

// export default [
//   {
//     id: 1,
//     date: '2015.02.01',
//     executive: 'Agencja Ochrony Mienia "Maczeta", ul. Kosynierów 6b, 12-345 Wołomin, NIP: XXX-XX-XX-XXX',
//     recipient: 'NABYWCA / ODBIORCA: Parafia św. Edwarda, ul. Biskupia 7, 12-345 Pruszków, NIP: XXX-XX-XX-XXX',
//     invoiceTitle: 'Fakturka nr 1',
//     invoiceDate: 'Miejsce i data wystawienia: Wołomin 12.12.1989',
//     services: [
//       {
//         id: 1,
//         serviceName: 'Usługi grabarskie',
//         ammount: 1,
//         priceNetto: 0,
//         vat: 23,
//         bruttoValue: 0
//       },
//       {
//         id: 2,
//         serviceName: 'Usługi grabarskie 2',
//         ammount: 2,
//         priceNetto: 1,
//         vat: 23,
//         bruttoValue: 1
//       }
//     ],
//     valueInWords: 'Słownie: sto złoty osiem groszy',
//     paymentType: 'Sposób płatności: przelew na konto',
//     accountNumber: 'Numer konta: (mbank) XX XXXX XXXX XXXX XXXX XXXX XXXX'
//   }
// ]

// export default [
//   {
//     id: 1,
//     date: '2015.02.01',
//     executive: 'Agencja Ochrony Mienia "Maczeta", ul. Kosynierów 6b, 12-345 Wołomin, NIP: XXX-XX-XX-XXX',
//     recipient: 'NABYWCA / ODBIORCA: Parafia św. Edwarda, ul. Biskupia 7, 12-345 Pruszków, NIP: XXX-XX-XX-XXX',
//     invoiceTitle: 'Fakturka nr 1',
//     invoiceDate: 'Miejsce i data wystawienia: Wołomin 12.12.1989',
//     services: [
//       {
//         id: 1,
//         serviceName: 'Usługi grabarskie',
//         ammount: 1,
//         priceNetto: 0,
//         vat: 23,
//         bruttoValue: 0
//       },
//       {
//         id: 2,
//         serviceName: 'Usługi grabarskie 2',
//         ammount: 2,
//         priceNetto: 1,
//         vat: 23,
//         bruttoValue: 1
//       }
//     ],
//     valueInWords: 'Słownie: sto złoty osiem groszy',
//     paymentType: 'Sposób płatności: przelew na konto',
//     accountNumber: 'Numer konta: (mbank) XX XXXX XXXX XXXX XXXX XXXX XXXX'
//   }
// ]

export default [
  {
    id: 1,
    date: '2015.02.01',
    executive: 'Agencja Ochrony Mienia "Maczeta", ul. Kosynierów 6b, 12-345 Wołomin, NIP: XXX-XX-XX-XXX',
    recipient: 'NABYWCA / ODBIORCA: Parafia św. Edwarda, ul. Biskupia 7, 12-345 Pruszków, NIP: XXX-XX-XX-XXX',
    invoiceTitle: 'Fakturka nr 1',
    invoiceDate: 'Miejsce i data wystawienia: Wołomin 12.12.1989',
    labels: {
      nrLabel: 'Nr.',
      serviceNameLabel: 'Nazwa usługi',
      serviceNameValue: 'Usługi grabarskie',
      ammountLabel: 'Ilość',
      priceNettoLabel: 'Cena netto',
      valueNettoLabel: 'Wartość',
      valRateLabel: 'VAT',
      valValueLabel: 'Kwota VAT',
      fullValueLabel: 'W. Brutto'
    },
    services: [
      {
        id: 1,
        serviceName: 'Usługi grabarskie',
        ammount: 1,
        priceNetto: 0,
        vat: '23%'
      },
      {
        id: 2,
        serviceName: 'Usługi grabarskie',
        ammount: 1,
        priceNetto: 0,
        vat: '23%'
      }
    ]
  }
]
