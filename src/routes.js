import Home from './components/Home'
import NewInvoice from './components/NewInvoice'
import InvoicesList from './components/InvoicesList'

export const routes = [
  { path: '/', component: Home },
  { path: '/nowa-fakturka', component: NewInvoice },
  { path: '/lista-fakturek', component: InvoicesList },
  { path: '/fakturka-:id', component: NewInvoice },
  { path: '*', redirect: '/' }
]
