const UserRepository = require('../repository/userRepository');
const userRepoObj = new UserRepository();
const jwt = require('jsonwebtoken');
const { JWT_KEY } = require('../config/serverConfig');
const bcrypt = require('bcrypt');

class UserService{

    async create(data){
        try {
            const user = await userRepoObj.create(data);
            return user;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw error;
        }
    }

    createToken(user){
        try {
            const response = jwt.sign(user,JWT_KEY, {expiresIn:'1h'});
            return response;
        } catch (error) {
            console.log('Something went wrong in token creation');
        }
    }

    verifyToken(token){
        try {
            const response = jwt.verify(token,JWT_KEY);
            return response;
        } catch (error) {
            console.log('Something went wrong in token verification');
        }
    }

    async isAuthenticated(token){
        try {
             const response = this.verifyToken(token);
             if(!response){
                 throw {error: "Invalid token"};
             }
 
             const user = await userRepositoryObj.getById(response.id);
 
             if(!user){
                 throw {error: "no user with given token exists"};
             }
 
             return user.id
        } catch (error) {
            console.log("something went wrong in auth process");
            throw error;
        }
 
    }

    comparePassword(plainPassword , encryptedPassword){
        try {
         return bcrypt.compareSync(plainPassword,encryptedPassword);
        } catch (error) {
            console.log("Something went wrong in passowrd comparison");
            throw error;
        }
     }
 
}

module.exports = UserService