const { User, Cat, Dog } = require('../models');

const resolvers = {
    Query: {
        cats: async () => {
            return Cat.find()
        }
    },
    Query: {
      dogs: async () => {
        return Dog.find()
      }
    }
};

module.exports = resolvers;