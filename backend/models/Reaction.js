import { DataTypes, Model } from 'sequelize';

import User from './User.js';
import Page from './Page.js';
import db from '../db.js';

class Reaction extends Model {

}

const model = Reaction.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
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

model.belongsTo(User, 
    {
    foreignKey: 'user_id', 
    allowNull: false
    }
);

model.belongsTo(Page, 
  {
  foreignKey: 'page_id', 
  allowNull: false
  }
);

export default model;