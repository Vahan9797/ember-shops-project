import Ember from 'ember';

export default Ember.Component.extend({
  shops: null,
  name: '',
  actionName: 'cancelAdding',

  actions: {
    addShop() {
      this.get('shops.store').createRecord('shop', {
        name: this.get('name')
      }).save().then(() => this.sendAction('actionName'));
    },

    cancel() {
      this.sendAction('actionName');
    }
  }
});
