const BookingRepository = require('../repository/bookingRepository');

const { ServiceError } = require('../utils/errors/index');
const { Flight } = require('../models/index');

const bookingRepoObj = new BookingRepository();


class BookingService{

    async createFlight(data){
        try {

            const flightId = data.flightId;

            const flightResponse = await Flight.findByPk(flightId);

            if(data.totalSeats > flightResponse.totalSeats){
                throw new ServiceError('Something went wrong in booking process', 'Insufficient Seats for the booking request');
            }
            // console.log(data.noOfSeats);
            let leftSeats = (flightResponse.totalSeats) - (data.noOfSeats);
            console.log(leftSeats);
            await Flight.update({
                totalSeats : leftSeats
            },{
                where:{
                    id : flightId
                }
            })

            let totalCost = data.noOfSeats * flightResponse.price;

            const bookingPayload = {...data, totalCost};

            const booking = await bookingRepoObj.createFlight(bookingPayload);

            return booking;
        } catch (error) {
            if(error.name == 'RepositoryError' || error.name == 'ValidationError'){
                throw error;
            }
            throw new ServiceError();
        }
    }

    async getAllByUserId(userId){
       try {
        const response = await bookingRepoObj.getAllByUserId(userId);
        return response;
       } catch (error) {
        console.log(error);
        console.log("Something went wrong on service layer");
        throw {error};
       }

    }

    async getAll(){
        try {
            const response = await bookingRepoObj.getAll();
            return response;
           } catch (error) {
            console.log(error);
            console.log("Something went wrong on service layer");
            throw {error};
           }
    }
}

module.exports = BookingService;