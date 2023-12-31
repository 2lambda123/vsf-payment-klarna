import { KlarnaPlugin } from '../types'

const plugin: KlarnaPlugin = {
  name: 'lastOrder',
  afterCreate: ({ order }) => {
    localStorage.setItem('kco/last-order', JSON.stringify(order))
  }
}

export default plugin
