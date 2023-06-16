const FlightRepo = require('../repository/flightRepository');
const flightRepoObj = new FlightRepo();

class FlightService{

    async createFlight(data){
        try {
            const flight = await flightRepoObj.createFlight(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

    async deleteFlight(flightId){
        try {
            const flight = await flightRepoObj.deleteFlight(flightId);
            return flight;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }
    
    async getFlight(flightId){
        try {
            const flight = await flightRepoObj.getFlight(flightId);
            return flight;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

    async getAllFlights(data){
        try {
            const flight = await flightRepoObj.getAllFlights(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }
}

module.exports = FlightService;