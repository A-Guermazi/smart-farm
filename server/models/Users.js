module.exports = (sequelize, DataTypes) => {
    //define and expport the table with (table names, collumns and types)
    const Users = sequelize.define("Users", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        admin: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        }
    })
    // Users.associate = (models) => {
    //     Users.hasMany(models.Likes, { onDelete: "cascade", })
    // }
    Users.associate = (models) => {
        Users.belongsTo(models.Farms, {
            foreignKey: {
                allowNull: false
            },
            onDelete: "CASCADE"
        });
    };
    return Users
}