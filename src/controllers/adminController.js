const AdminService = require('../services/adminService');
const adminServiceObj = new AdminService();

const create = async(req,res) => {
    try {
        const response = await adminServiceObj.create({
            email : req.body.email,
            password: req.body.password
        })
        return res.status(201).json({
            success : true,
            message : "successfully created user",
            data : response,
            err : {}
        })
    } catch (error) {
        return res.status(500).json({
            message : "Something went wrong",
            data : {},
            success : false,
            err: error
        });
    }


}

const signIn = async(req,res) => {
    try {
        const response = await adminServiceObj.signIn(req.body.email,req.body.password);
        return res.status(201).json({
            data : response,
            success : true,
            message : "successfully signed in",
            err : {}
        })
    } catch (error) {
        return res.status(500).json({
            message : error,
            data : {},
            success : false,
            err: error
        });
    }
}


module.exports = {
    create,
    signIn
}