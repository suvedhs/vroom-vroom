const Dog = require('../../models/Dog')


module.exports = {
    Query:{
        async Dogs(){
            try{
                const dogs = await Dog.find().sort({createdAt:-1});
                return dogs;
            } catch (err){
                throw new Error(err);
            }
        }
    },
    async getDog (_,{dogID}){
        try{
            const dog = await Dog.findById(dogID);
            if(dog){
                return dog;
            } else{
                throw new Error('Dog not found')
            }
        } catch(err){
            throw new Error(err);
        }
    },
    Mutation:{
        async createDog(_,{name,breed,sex,age,city,image},context){
            // const user = checkAuth(context);
            

            const newDog = new Dog({
                name,breed,sex,age,city,image,
                
                createdAt:new Date().toISOString()
            });

            const dog = await newDog.save();
            return dog;
        }
    }
}