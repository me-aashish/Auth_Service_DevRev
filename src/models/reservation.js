'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reservation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Reservation.init({
    flightId:{
      type: DataTypes.INTEGER,
      allowNull:false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
    noOfSeats:{
      type: DataTypes.INTEGER,
      allowNull:false,
      defaultValue : 60
    },
    totalCost: {
      type: DataTypes.INTEGER,
      allowNull:false,
      defaultValue : 0
    },
    arrivalCity: {
      type:DataTypes.STRING,
      allowNull:false
    },
    departureCity:{
      type:DataTypes.STRING,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Reservation',
  });
  return Reservation;
};