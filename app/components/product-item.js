import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',

  name: '',
  qty: null,
  price: null,

  isEditMode: false,
  item: null,
  actionName: 'delete',

  actions: {
    saveChanges() {
      this.get('item').save().then(() => {
        this.set('isEditMode', false);
      })
    },

    edit() {
      this.set('name', this.get('item').get('name'));
      this.set('qty', this.get('item').get('qty'));
      this.set('price', this.get('item').get('price'));
      this.set('isEditMode', true);
    },

    cancel() {
      this.set('isEditMode', false);
      this.get('item').set('name', this.get('name'));
      this.get('item').set('qty', this.get('qty'));
      this.get('item').set('price', this.get('price'));
    },

    delete() {
      this.sendAction('actionName', this.get('item.id'));
    }
  }
});
