const { DataTypes } = require("sequelize");


module.exports = (sequelize, DataTypes) => {
    //define and expport the table with (table names, collumns and types)
    const GreenHouse = sequelize.define("GreenHouse", {
        temperature: {
            type: DataTypes.INTEGER,
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


