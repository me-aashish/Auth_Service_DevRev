'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Flights', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      flightNumber: {
        type: Sequelize.STRING,
        allowNull:false,
        unique:true
      },
      departureCity: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      arrivalCity: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      departureTime: {
        type: Sequelize.DATE,
        allowNull:false,
      },
      arrivalTime: {
        type: Sequelize.DATE,
        allowNull:false,
      },
      totalSeats: {
        type: Sequelize.INTEGER,
        defaultValue: 60
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Flights');
  }
};