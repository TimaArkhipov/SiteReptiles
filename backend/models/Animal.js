import { DataTypes, Model } from 'sequelize';

import db from '../db.js';

class Animal extends Model {

}

const model = Animal.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize: db,
  tableName: 'animal',
});

export default model;