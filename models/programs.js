'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Programs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Programs.hasMany(models.ProgramInterests, {
        foreignKey: 'programId',
        as: 'interests'
      });
    }
  }
  Programs.init({
    code: DataTypes.STRING(10),
    title: DataTypes.STRING(100),
    campus: DataTypes.STRING(100),
    level: DataTypes.STRING(100),
    image: DataTypes.TEXT,
    type: DataTypes.CHAR(3),
    status: DataTypes.BOOLEAN,
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at',
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at',
    },
  }, {
    sequelize,
    modelName: 'Programs',
    tableName: 'programs',
    underscored: true,
  });
  return Programs;
};