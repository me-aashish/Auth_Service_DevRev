'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('Flights', [
      {
        flightNumber: 'BOEING-747',
        departureCity: 'Delhi',
        arrivalCity: 'Mumbai',
        departureTime:  '2023-07-07 22:07:13.014123',
        arrivalTime:'2023-07-07 23:45:00.014123',
        price: 5500,
        totalSeats: 60,
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
      flightNumber: 'SPICEJET-AA292',
      departureCity: 'Delhi',
      arrivalCity: 'Mumbai',
      departureTime: '2023-08-08 09:15:13.014123',
      arrivalTime: '2023-07-07 10:30:13.014123',
      totalSeats: 60,
      price: 5500,
      createdAt: new Date(),
      updatedAt: new Date()
   }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
