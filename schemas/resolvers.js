const { User } = require('../models');

const resolvers = {
    Query: {
        me: async (parent, args) => {
          if (context.user) {
            const userData = await User.findOne();
            return userData;
          }
        }
    }
};

module.exports = resolvers;