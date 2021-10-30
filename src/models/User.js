module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        field: "id_user",
      },
      email: {
        type: DataTypes.STRING(100),
        field: "email_user",
      },
      password: {
        type: DataTypes.STRING(25),
        field: "password_user",
      },
    },
    {
      timestamps: false,
      tableName: "NEG_USER",
    }
  );

  return User;
};
