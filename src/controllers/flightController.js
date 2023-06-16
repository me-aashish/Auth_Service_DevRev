const FlightService = require('../services/flightService');
const flightServiceObj = new FlightService();
const { StatusCodes } = require('http-status-codes');

const create = async(req,res) => {
    try {
        const flight = await flightServiceObj.createFlight(req.body);
        res.status(StatusCodes.CREATED).json({
            data: flight,
            success: true,
            message: 'Successfully created the flight',
            err: {}
        })
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: 'Not able to create the flight',
            err: error
        })
    }
}

const destroy = async(req,res) => {
    try {
        console.log(req.params.id);
        const flight = await flightServiceObj.deleteFlight(req.params.id);
        
        res.status(StatusCodes.OK).json({
            data: flight,
            success: true,
            message: 'Successfully deleted the flight',
            err: {}
        })
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: 'Not able to delete the flight',
            err: error
        })
    }
}

const get = async(req,res) => {
    try {
        const flight = await flightServiceObj.getFlight(req.params.id);
        res.status(StatusCodes.OK).json({
            data: flight,
            success: true,
            message: 'Successfully fetched the flight',
            err: {}
        })
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: 'Not able to fetch the flights',
            err: error
        })
    }
}

const getAll = async(req,res)=>{
    try {
        const flight = await flightServiceObj.getAllFlights(req.query);
        console.log(flight.length);
        if(flight.length === 0){
            res.status(StatusCodes.BAD_REQUEST).json({
                data: {},
                success: false,
                message: 'Not able to fetch the flights',
                err: error
            })
        }
        res.status(StatusCodes.OK).json({
            data: flight,
            success: true,
            message: 'Successfully fetched all flights',
            err: {}
        })
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: 'Not able to fetch the flights',
            err: error
        })
    }
}

module.exports = {
    get,
    getAll,
    create,
    destroy
}