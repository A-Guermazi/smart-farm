const { DataTypes } = require("sequelize");


module.exports = (sequelize, DataTypes) => {
    //define and expport the table with (table names, collumns and types)
    const Farms = sequelize.define("Farms", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        code: {
            type: DataTypes.STRING,
            allowNull: false
        }

    })
    Farms.associate = (models) => {
        Farms.hasMany(models.Users, { onDelete: "cascade", })
        Farms.hasMany(models.GreenHouse, { onDelete: "cascade", })
        Farms.hasMany(models.WeatherStation, { onDelete: "cascade", })
    }

    return Farms
}