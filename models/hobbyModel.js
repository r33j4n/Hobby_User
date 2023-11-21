module.exports = (sequelize, DataTypes) => {
    const Hobby = sequelize.define('Hobbies', {
      HobbyID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      HobbyName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    return Hobby;
  };
  