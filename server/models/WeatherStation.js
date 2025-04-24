const { DataTypes } = require("sequelize");


module.exports = (sequelize, DataTypes) => {
    //define and expport the table with (table names, collumns and types)
    const WeatherStation = sequelize.define("WeatherStation", {

    })
    WeatherStation.associate = (models) => {
        WeatherStation.belongsTo(models.Farms, {
            foreignKey: {
                allowNull: false
            },
            onDelete: "CASCADE"
        });
    }

    return WeatherStation
}