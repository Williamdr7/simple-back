module.exports = (sequelize, DataTypes) => {
  const Pessoa = sequelize.define(
    "Pessoa",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        field: "id_pessoa",
      },
      nome: {
        type: DataTypes.STRING(100),
        field: "nm_pessoa",
      },
      uf: {
        type: DataTypes.STRING(2),
        field: "uf_pessoa",
      },
      idade: {
        type: DataTypes.INTEGER,
        field: "idade_pessoa",
      },
      cep: {
        type: DataTypes.STRING(9),
        field: "cep_pessoa",
      },
      city: {
        type: DataTypes.STRING(50),
        field: "city_pessoa",
      },
    },
    {
      timestamps: false,
      tableName: "NEG_PESSOA",
    }
  );

  return Pessoa;
};
