module.exports = function(app) {
  app.factory('warPredictor', [function() {
    return {
      numPet: [],
      numSand: [],
      totalContendors: numSand.length + numPet.length,
      addPet: function() {
        this.numPet.push(pet);
      },
      addSandwich: function() {
        this.numSand.push(sandwich);
      }

    };
  }]);
};


// module.exports = function(app) {
//   app.factory('warPredictor', [function() {
//     return {
//       totalContendors: 0,
//       addContendors: function() {
//         this.totalContendors++;
//       }
//     };
//   }]);
// };

//
module.exports = function(app) {
  app.factory('warPredictor', [function() {
    return {
      winner: { pet: false,
                sandwich: false
              },
      numPet: [],
      numSand: [],
      totalContendors: numSand.length + numPet.length,
      prediction: function() {
        if (numPet.length > numSand.length) {
          return this.winner.pet = true;
        }
        return this.winner.sandwich = true;
      }
    };
  }]);
};


// module.exports = function(app) {
//   app.factory('warPredictor', function() {
//     var winner;
//     if (this.pet.length > this.sandwich.length) {
//       return winner.prediction = 'pets';
//     }
//     return winner.prediction = 'sandwiches';
//   });
// };
