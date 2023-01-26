import { DataTypes, Model } from 'sequelize';

import User from './User.js';
import db from '../db.js';

class Reaction extends Model {

}

const model = Reaction.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    foreignKey: true,
    allowNull: false
  },
  comment: {
    type: DataTypes.STRING,
  },
  grade: {
    type: DataTypes.INTEGER,
  }
}, {
  sequelize: db,
  tableName: 'reaction',
});
export default model;

User.Reactions = User.hasMany(Reaction);