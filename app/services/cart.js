import Ember from 'ember';

export default Ember.Service.extend({
  _dataPromise: null,
  requestedBy: null,
  request(caller) {
    let self = this;
    return this.fetchCart(caller)
                .then(
                  (response) => { 
                    console.log(response);
                    self.set('_dataPromise', null)
                    return response },
                  (error) => {
                    console.log(error); }
                )
  },
  fetchCart(caller) {
    let self = this;
    self.set('requestedBy', caller)
    return new Promise(function(resolve, reject) {
      if(!self.get('_dataPromise')) {
        self.set('_dataPromise', self._request(caller));
      }
      resolve(self.get('_dataPromise'));
    });
  },
  _request(caller) {
    let self = this;
    return Ember.$.ajax({
      type: "POST",
      url: 'https://dog.ceo/api/breeds/list/all',
      dataType: 'json'
    }).then((response) => {
      console.log("returning reponse by " + caller)
      // let callerHash = { 'caller': caller, 'data': response.message }
      return response.message;
    });
  }
});
