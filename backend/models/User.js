// import e from 'express';
// import { DataTypes, Model, Sequelize } from 'sequelize';

// import db from '../connDb.js';
// const Sequelize = require('sequalize')
// import { Sequelize } from "sequelize";
import { DataTypes, Model } from 'sequelize';
import db from '../db.js';

class User extends Model {

}

const model = User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize: db,
  tableName: 'user',
});
export default model;

// module.exports = function (seq) {
//   return seq.define('user', {
//     id: {
//       type: Sequelize.INTEGER,
//       autoIncrement: true,
//       primaryKey: true,
//       allowNull: false
//     },
//     email: {
//       type: Sequelize.STRING,
//       allowNull: false
//     },
//     password: {
//       type: Sequelize.STRING,
//       allowNull: false
//     },
//   }, {
//     timestamps: false
//   }
//   )
// }

// class User extends Model {

// }

// const model = User.init({
//   id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true
//   },
//   username: {
//     type: DataTypes.STRING(255),
//     allowNull: false
//   }
// }, {
//   sequelize: db,
//   tableName: 'users',
// });
// export default model;