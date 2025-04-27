const { DataTypes } = require("sequelize");


module.exports = (sequelize, DataTypes) => {
    //define and expport the table with (table names, collumns and types)
    const Notification = sequelize.define("Notification", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        text: {
            type: DataTypes.STRING,
            allowNull: false
        },
    })
    Notification.associate = (models) => {
        Notification.belongsTo(models.Users, {
            foreignKey: {
                allowNull: true
            },
            onDelete: "CASCADE"
        });
        Notification.belongsTo(models.Farms, {
            foreignKey: {
                allowNull: true
            },
            onDelete: "CASCADE"
        });
    }

    return Notification
}