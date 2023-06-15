const AdminRepository = require('../repository/adminRepository');
const adminRepoObj = new AdminRepository();
const jwt = require('jsonwebtoken');
const { JWT_KEY } = require('../config/serverConfig');
const bcrypt = require('bcrypt');

class AdminService{

    async create(data){
        try {
            const admin = await adminRepoObj.create(data);
            return admin;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw error;
        }
    }

    createToken(admin){
        try {
            const response = jwt.sign(admin,JWT_KEY, {expiresIn:'1h'});
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

    // async isAuthenticated(token){
    //     try {
    //          const response = this.verifyToken(token);
    //          if(!response){
    //              throw {error: "Invalid token"};
    //          }
 
    //          const admin = await adminRepoObj.getById(response.id);
 
    //          if(!user){
    //              throw {error: "no user with given token exists"};
    //          }
 
    //          return user.id
    //     } catch (error) {
    //         console.log("something went wrong in auth process");
    //         throw error;
    //     }
 
    // }

    comparePassword(plainPassword , encryptedPassword){
        try {
         return bcrypt.compareSync(plainPassword,encryptedPassword);
        } catch (error) {
            console.log("Something went wrong in passowrd comparison");
            throw error;
        }
    }

    async signIn(email , password){
        try {
             // step 1 -> fetch the user using email
             const admin = await adminRepoObj.getAdminByEmail(email);
             
             // step 2 -> compare incoming plain password with the stored encrypted password
             const passwordsMatch = this.comparePassword(password,admin.password);
             
             if(!passwordsMatch){
                 console.log("Password doesn't match");
                 throw { err : "Incorrect password"};
             }
 
             // if password matches then create a token and send it to the user
             const newJWT = this.createToken({email : admin.email, id : admin.id});
             return newJWT;
        } catch (error) {
            throw error;
            console.log('Something went wrong in sign in process');
            throw error;
        }
 
     }
 
}

module.exports = AdminService