const {StatusCodes} = require('http-status-codes');

const {Reservation} = require('../models/index');

class BookingRepository{

    async createFlight(data){
        try {
        //    console.log(booking);
            data.totalSeats = parseInt(data.totalSeats);
            console.log((data));
            const booking = await Reservation.create(data);
            return booking;
        } catch (error) {
            console.log(error);
           console.log("Something went wrong on repository layer");
           throw {error};
        }
    }

    async getAllByUserId(userId){
       try {
        const response = await Reservation.findAll({
            where: {
                userId: userId
            }
        })
        return response;
       } catch (error) {
        console.log(error);
        console.log("Something went wrong on repository layer");
        throw {error};
       }
    }

    async getAll(){
        try {
            const response = await Reservation.findAll();
            return response
        } catch (error) {
            console.log(error);
            console.log("Something went wrong on repository layer");
            throw {error};
        }
    }
}

module.exports = BookingRepository;