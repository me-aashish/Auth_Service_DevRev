const { Admin } = require('../models/index');

class AdminRepository{

    async create(data){
        try {
            const user = await Admin.create(data);
            return user;
        } catch (error) {
            console.log("Something went wrong in repo layer");
            throw error;
           
        }
    }

    async getAdminByEmail(adminMail){
        try {
            const user = await Admin.findOne({
                where : {
                    email : adminMail
                }
            });
            if(!user){
                // throw new ClientError(
                //     'AttributeNotFound',
                //     'Invalid email sent in the request',
                //     'Please check email, as there is no record of the email',
                //     StatusCodes.NOT_FOUND
                // )
                console.log("admin with given email not found");
                throw new error(
                    "admin not found"
                )
            }
            return user;
        } catch (error) {
           
            console.log("Something went wrong on repository layer");
            throw error;
        }
    }
}

module.exports = AdminRepository