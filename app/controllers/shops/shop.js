import Ember from 'ember';

export default Ember.Controller.extend({
  addingMode: false,

  totalPrice: Ember.computed('model.products.@each.price', 'model.products.@each.qty', function() {
    return this.get('model.products').reduce((prev, current) => {
        return prev + current.get('price') * current.get('qty');
      }, 0);
  }),

  actions: {
    add() {
      this.set('addingMode', true);
    },

    cancelAdding() {
      this.set('addingMode', false);
    },

    delete(id) {
      this.get('store').findRecord('product', id).then(product => product.destroyRecord());
    }
  }
});
