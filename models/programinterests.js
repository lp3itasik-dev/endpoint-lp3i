'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProgramInterests extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ProgramInterests.belongsTo(models.Programs, {
        foreignKey: 'programId',
        as: 'program'
      });
    }
  }
  ProgramInterests.init({
    program_id: DataTypes.INTEGER,
    name: DataTypes.STRING(100),
    status: DataTypes.BOOLEAN,
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at'
    },
  }, {
    sequelize,
    modelName: 'ProgramInterests',
    tableName: 'program_interests',
    underscored: true,
  });
  return ProgramInterests;
};