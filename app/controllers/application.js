import Ember from 'ember';
import { inject as service } from '@ember/service';

export default Ember.Controller.extend({
  cart: service(),
  cartRequestedBy: Ember.computed('cart.requestedBy', function() {
    return this.get('cart.requestedBy');
  })
});
