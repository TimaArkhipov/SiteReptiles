import { DataTypes, Model } from 'sequelize';

import Reaction from './Reaction.js';
import db from '../db.js';

class Post extends Model {

}

const model = Post.init({
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

model.hasMany(Reaction, 
    {
    foreignKey: 'rec_id', 
    allowNull: false
    }
  );

export default model;