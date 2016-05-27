var url = require('../../config.js').url;
module.exports = function(app) {
  app.controller('SandwichController', ['kbResource', function(Resource) {
    this.sandwich = [];
    this.errors = [];
    var remote = new Resource(this.sandwich, this.errors, url + '/api/sandwich');

    this.getAll = function() {
      remote.getAll();
    };

    this.createSandwich = function() {
      remote.create(this.newSandwich)
      .then(() => {
        this.newSandwich = null;
      });
    }.bind(this);

    this.deleteSandwich = function(sandwich) {
      remote.removeResource(sandwich);
    };

    this.updateSandwich = function(sandwich) {
      remote.update(sandwich)
      .then(() => {
        sandwich.editing = false;
      });
    };

  }]);
};
