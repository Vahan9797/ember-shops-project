import Ember from 'ember';

export default Ember.Controller.extend({
  shopSelected: false,
  addingMode: false,

  actions: {
    add() {
      this.set('addingMode', true);
    },

    cancelAdding() {
      this.set('addingMode', false);
    }
  }
});
