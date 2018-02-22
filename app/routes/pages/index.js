import Ember from 'ember';
import { inject as service } from '@ember/service';

export default Ember.Route.extend({
  cart: service(),
  model(){
    let self = this;
    return this.get('cart')
                .request('pageIndexRoute')
  }
});
