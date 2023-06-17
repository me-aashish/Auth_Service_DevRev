const BookingService = require('../services/bookingService');
const UserService = require('../services/userService');
const bookingServiceObj = new BookingService();
const userServiceObj = new UserService();
const { StatusCodes } = require('http-status-codes');
const { JWT_KEY } = require('../config/serverConfig');

const create = async(req,res) => {
    try {
        // console.log(req.body);
        const user = userServiceObj.verifyToken(req.headers['x-access-token'],JWT_KEY);
        // console.log(user.id);
        console.log(req.headers);
        req.body.userId = user.id
        const response = await bookingServiceObj.createFlight(req.body);
        // console.log("FROM BOOKING CONTROLLER", response);
        return res.status(StatusCodes.OK).json({
            message: 'Successfully completed booking',
            success: true,
            err: {},
            data: response
        })
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: error.message,
            success: false,
            err: error.explanation,
            data: {}
        });
    }
}

const getId = async(req,res)=>{
    const user = userServiceObj.verifyToken(req.headers['x-access-token'],JWT_KEY);
    if(user){
        return res.status(StatusCodes.OK).json({
            message: 'Successfully fetched id',
            success: true,
            err: {},
            data: user.id
        })
    }
    else{
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message:"something wrong with jwt token",
            success: false,
            data: {}
        });
    }
}

const getAllByUser = async(req,res) => {
    try {
       
        // console.log(req.params.id);
        const response = await bookingServiceObj.getAllByUserId(req.params.id);
        return res.status(StatusCodes.OK).json({
            message: 'Successfully fetched all bookings',
            success: true,
            err: {},
            data: response
        })
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: error.message,
            success: false,
            err: error.explanation,
            data: {}
        });
    }
}

const getAll = async(req,res) => {
    try {
       
        // console.log(req.params.id);
        const response = await bookingServiceObj.getAll();
        return res.status(StatusCodes.OK).json({
            message: 'Successfully fetched all bookings',
            success: true,
            err: {},
            data: response
        })
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: error.message,
            success: false,
            err: error.explanation,
            data: {}
        });
    }
}

module.exports = {
    create,
    getAllByUser,
    getId,
    getAll
}