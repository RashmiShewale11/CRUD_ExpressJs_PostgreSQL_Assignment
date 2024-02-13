module.exports = (sequelize, DataTypes) => {
    const users = sequelize.define(
        'users', {
            id: {
                type: DataTypes.STRING,
            },
            userId: {
                type: DataTypes.BIGINT,
                primaryKey : true,
                autoIncrement : true,
            },
            username: {
                type: DataTypes.STRING,
                allowNull : false
            },
            age: {
                type: DataTypes.STRING,
                allowNull : false,
            },
            hobbies: {
                type: DataTypes.ARRAY(DataTypes.TEXT),
                defaultValue : []
            }
        }
    );
    return users;
}