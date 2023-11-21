const User = require("../models/userModel")
async function createUser(userData){
    try {
        const newUser = await User.create(userData);
        return newUser;
      } catch (error) {
        console.error(error);
        throw new Error('Error creating user');
      }
}

