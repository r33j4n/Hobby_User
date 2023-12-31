module.exports=(sequelize,DataTypes)=>{
    const User = sequelize.define('users', {
        name: {
          type: DataTypes.STRING,
          allowNull: false,
          validate:{
              notEmpty:true,
          },
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      });
      return User;
};

