import { DataTypes, Model } from 'sequelize';

import Reaction from './Reaction.js';
import Animal from './Animal.js';
import db from '../db.js';

class Page extends Model {

}

const model = Page.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  descr: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  photo: {
    //потом переписать
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  sequelize: db,
  tableName: 'page',
});

export default model;