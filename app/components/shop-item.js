import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',

  shop: null,
  isEditMode: false,
  shopName: '',

  actions: {
    saveChanges() {
      this.get('shop').save().then(() => this.set('isEditMode', false));
    },

    cancel() {
      this.set('shop.name', this.get('shopName'));
      this.set('isEditMode', false);
    },

    edit() {
      this.set('shopName', this.get('shop.name'));
      this.set('isEditMode', true);
    },

    delete(id) {
      let store = this.get('shop.store');
      store.findRecord('shop', id).then(shop => {
        store.findAll('product')
          .then(products => products.filter(product => product.get('shop.id') === id))
          .then(products => products.forEach(product => product.destroyRecord()));
          return shop;
      }).then(shop => shop.destroyRecord());
    }
  }
});
