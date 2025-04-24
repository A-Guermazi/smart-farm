const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const FarmJoinRequests = sequelize.define("FarmJoinRequests", {
        status: {
            type: DataTypes.ENUM("pending", "approved", "rejected"),
            defaultValue: "pending"
        },
    });

    FarmJoinRequests.associate = (models) => {
        FarmJoinRequests.belongsTo(models.Users, {
            foreignKey: {
                allowNull: false
            },
            onDelete: "CASCADE"
        });

        FarmJoinRequests.belongsTo(models.Farms, {
            foreignKey: {
                allowNull: false
            },
            onDelete: "CASCADE"
        });
    };

    return FarmJoinRequests;
};
