const { DataTypes } = require("sequelize");


module.exports = (sequelize, DataTypes) => {
    //define and expport the table with (table names, collumns and types)
    const GreenHouse = sequelize.define("GreenHouse", {
        temperature: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        humidity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        soilHumidity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        gas: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        fan: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
    })
    GreenHouse.associate = (models) => {
        GreenHouse.belongsTo(models.Farms, {
            foreignKey: {
                allowNull: false
            },
            onDelete: "CASCADE"
        });
    }

    return GreenHouse
}


