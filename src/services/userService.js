const UserRepository = require('../repository/userRepository');

const userRepoObj = new UserRepository();

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
}

module.exports = UserService