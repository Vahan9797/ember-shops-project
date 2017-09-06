import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: [],
  actionName: 'cancelAdding',

  shop: null,
  name: '',
  qty: null,
  price: null,

  actions: {
    addProduct() {
      let store = this.get('shop.store');
      let product = store.createRecord('product', {
        name: this.get('name'),
        qty: this.get('qty'),
        price: this.get('price')
      });

      this.get('shop').get('products').pushObject(product);
      product.save().then(() => this.get('shop').save());
      this.sendAction('actionName');
    },

    cancel() {
      this.sendAction('actionName');
    }
  }
});
