const { DataTypes } = require('sequelize');
const sequelize = require('../../database');

const Patient = sequelize.define('Patient', {
  patientName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  patientNID: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  bodyTemperature: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  heartRate: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  frequentSickness: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

Patient.sync({ force: false, alter:true }); // This creates or updates the table in the database

module.exports = Patient;
