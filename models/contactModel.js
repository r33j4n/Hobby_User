module.exports = (sequelize, DataTypes) => {
    const ContactNumber = sequelize.define('contactnumbers', {
      ContactID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      Number: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Type: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    });
    return ContactNumber;
};