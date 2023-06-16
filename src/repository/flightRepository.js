const { Flight } = require('../models/index');
const { Op } = require('sequelize');

class FlightRepo{

    createFilter(data){

        let filter = {};
        filter.departureCity = data.departureCity,
        filter.arrivalCity = data.arrivalCity;
        filter.departureDate = data.departureDate;
        return filter;
    }

    async createFlight(data){
        try {
            const flight = await Flight.create(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw {error};
        }
    }

    async deleteFlight(flightId){
        try {
            const flight = await Flight.findByPk(flightId);
            if(!flight){
                throw new Error("no flight with given id present");
            }
            await Flight.destroy({
                where : {
                    id : flightId
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            console.log(error);
            throw {error};
        }
    }

    async getFlight(flightId){
        try {
            const flight = await Flight.findByPk(flightId);
            return flight;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw {error};
        }
    }

    async getAllFlights(filter){
        try {
            const filterObject = this.createFilter(filter);
            console.log(filterObject);
            const flight = await Flight.findAll({
                where : filterObject
            });
            return flight;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw {error};
        }
    }
}
module.exports = FlightRepo;