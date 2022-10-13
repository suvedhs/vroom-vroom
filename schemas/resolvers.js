const { User, Cat } = require('../models');

const resolvers = {
    Query: {
        cats: async () => {

            return Cat.find()
          
        }
    }
};

module.exports = resolvers;