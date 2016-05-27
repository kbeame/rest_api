var url = require('../../config.js').url;
module.exports = function(app) {
  app.controller('PetController', ['kbResource', function(Resource) {
    this.pet = [];
    this.errors = [];
    var remote = new Resource(this.pet, this.errors, url + '/api/pet');

    this.getAll = function() {
      remote.getAll();
    };

    this.createPet = function() {
      remote.create(this.newPet)
      .then(() => {
        this.newPet = null;
      });
    }.bind(this);

    this.deletePet = function(pet) {
      remote.removeResource(pet);
    };

    this.updatePet = function(pet) {
      remote.update(pet)
      .then(() => {
        pet.editing = false;
      });
    };

  }]);
};
