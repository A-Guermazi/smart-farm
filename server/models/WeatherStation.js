const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const WeatherStation = sequelize.define("WeatherStation", {
        temperature: {
            type: DataTypes.FLOAT, // in °C
            allowNull: false
        },
        humidity: {
            type: DataTypes.FLOAT, // in %
            allowNull: false
        },
        rain: {
            type: DataTypes.FLOAT, // in mm (precipitation)
            allowNull: false
        },
        windSpeed: {
            type: DataTypes.FLOAT, // in m/s or km/h
            allowNull: false
        },
        windDirection: {
            type: DataTypes.INTEGER, // in degrees (0-360)
            allowNull: false
        },
        pressure: {
            type: DataTypes.FLOAT, // in hPa
            allowNull: false
        },
        uvIndex: {
            type: DataTypes.FLOAT, // max UV index value
            allowNull: false
        },
        solarRadiation: {
            type: DataTypes.FLOAT, // in W/m²
            allowNull: false
        },
        dewPoint: {
            type: DataTypes.FLOAT, // in °C
            allowNull: false
        },

    });

    WeatherStation.associate = (models) => {
        WeatherStation.belongsTo(models.Farms, {
            foreignKey: {
                allowNull: false
            },
            onDelete: "CASCADE"
        });
    };

    return WeatherStation;
};
