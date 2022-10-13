const { User, Cat, Dog } = require('../models');

// const Cat = require("../models/Cat");

const resolvers = {

  Query:{
    async Cats(){
      try{
        const cats = await Cat.find();
        return cats;
      } catch(err){
        throw new Error(err);
      }
    },
    async Dogs(){
      try{
        const dogs = await Dog.find();
        return dogs;
      } catch(err){
        throw new Error(err);
      }
    }
  }
  

    // Query: {
    //     cats: async () => {
    //         return Cat.find()
    //     }
    // },
    // Query: {
    //   dogs: async () => {
    //     return Dog.find()
    //   }
    // }
};

module.exports = resolvers;