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
                allowNull: false
            },
            onDelete: "CASCADE"
        });
    }

    return Notification
}