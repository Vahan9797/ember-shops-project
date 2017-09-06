import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('shop');
  },

  actions: {
    backToShopList() {
      this.get('controller').set('shopSelected', false);
      this.transitionTo('shops');
    }
  }
});
